import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Planner from './pages/Planner';
import Profile from './pages/Profile';
import About from './pages/About';
import { User, SavedPlan, DestinationName, SpotCategory, ItineraryDay } from './types';
import { getTripEssence } from './utils/plannerLogic';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Load user from local storage on mount (Mock persistence)
  useEffect(() => {
    const savedUser = localStorage.getItem('trippin_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      // Show auth modal on first visit (simulated by checking session storage)
      const hasVisited = sessionStorage.getItem('has_visited');
      if (!hasVisited) {
        setTimeout(() => setIsAuthOpen(true), 2000);
        sessionStorage.setItem('has_visited', 'true');
      }
    }
  }, []);

  const handleLogin = (name: string, email: string) => {
    // Mock ID generation
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      savedPlans: [],
      favorites: []
    };
    setUser(newUser);
    localStorage.setItem('trippin_user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('trippin_user');
  };

  const handleToggleFavorite = (spotId: string) => {
    if (!user) {
      setIsAuthOpen(true);
      return;
    }
    const isFav = user.favorites.includes(spotId);
    let newFavorites;
    if (isFav) {
      newFavorites = user.favorites.filter(id => id !== spotId);
    } else {
      newFavorites = [...user.favorites, spotId];
    }
    const updatedUser = { ...user, favorites: newFavorites };
    setUser(updatedUser);
    localStorage.setItem('trippin_user', JSON.stringify(updatedUser));
  };

  const handleSavePlan = (name: string, dest: DestinationName, time: string, prefs: SpotCategory[], itinerary: ItineraryDay[]) => {
    if (!user) return;
    
    const essence = getTripEssence(dest, time as any, prefs);
    const newPlan: SavedPlan = {
      id: Date.now().toString(),
      name,
      destination: dest,
      timeAvailable: time,
      preferences: prefs,
      itinerary,
      createdAt: new Date().toLocaleDateString(),
      essence
    };

    const updatedUser = {
      ...user,
      savedPlans: [newPlan, ...user.savedPlans]
    };

    setUser(updatedUser);
    localStorage.setItem('trippin_user', JSON.stringify(updatedUser));
  };

  const handleDeletePlan = (planId: string) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      savedPlans: user.savedPlans.filter(p => p.id !== planId)
    };
    setUser(updatedUser);
    localStorage.setItem('trippin_user', JSON.stringify(updatedUser));
  };

  return (
    <Router>
      <Layout 
        user={user} 
        onLogout={handleLogout} 
        onOpenAuth={() => setIsAuthOpen(true)}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/:name" 
            element={
              <Destination 
                user={user} 
                onToggleFavorite={handleToggleFavorite} 
              />
            } 
          />
          <Route 
            path="/planner" 
            element={
              <Planner 
                user={user} 
                onSavePlan={handleSavePlan} 
                onOpenAuth={() => setIsAuthOpen(true)}
                onToggleFavorite={handleToggleFavorite}
              />
            } 
          />
          <Route 
            path="/profile" 
            element={
              <Profile 
                user={user} 
                onDeletePlan={handleDeletePlan} 
                onToggleFavorite={handleToggleFavorite}
              />
            } 
          />
        </Routes>
        
        <AuthModal 
          isOpen={isAuthOpen} 
          onClose={() => setIsAuthOpen(false)} 
          onLogin={handleLogin}
        />
      </Layout>
    </Router>
  );
};

export default App;