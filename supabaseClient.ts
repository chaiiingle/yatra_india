import { createClient } from '@supabase/supabase-js'

// You get these from your Supabase Dashboard Settings > API
const supabaseUrl ='https://lfudkqlfmcspgiqdzyql.supabase.co';
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmdWRrcWxmbWNzcGdpcWR6eXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4Mzg5NjYsImV4cCI6MjA4MjQxNDk2Nn0.UyQ3qqGXmp229maRwCMD_zZ1_h2so4U1s4BZf3voidE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
