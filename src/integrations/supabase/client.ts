// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uoqxghqpvebrltusjrzm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvcXhnaHFwdmVicmx0dXNqcnptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NDY3MTgsImV4cCI6MjA2NjQyMjcxOH0.EUw3kIgQMFRW4Q5HQ7ROqPwHguwqD0KJoeZvSMqZS9Y";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);