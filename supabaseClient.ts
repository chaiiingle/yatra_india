import { createClient } from '@supabase/supabase-js'

// You get these from your Supabase Dashboard Settings > API
const supabaseUrl ='https://lfudkqlfmcspgiqdzyql.supabase.co';
const supabaseAnonKey ='lfudkqlfmcspgiqdzyql';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
