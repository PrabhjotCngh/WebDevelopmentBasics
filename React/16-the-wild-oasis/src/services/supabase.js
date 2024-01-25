import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://czphyscxkdgxchfumwzp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6cGh5c2N4a2RneGNoZnVtd3pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2OTA0NzcsImV4cCI6MjAyMTI2NjQ3N30.lamViBdF41ByC7RTHAPk9nCgF7089IANenCZS5Z9hmg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
