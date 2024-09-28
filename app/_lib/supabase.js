import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://pltgpkzornjgjomouhqm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsdGdwa3pvcm5qZ2pvbW91aHFtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjg5Njk3MiwiZXhwIjoyMDIyNDcyOTcyfQ.yIy2iEZcwBbxfQqs69dRTnBf9mEKO3ItuvoHV_IjMd4"
);
