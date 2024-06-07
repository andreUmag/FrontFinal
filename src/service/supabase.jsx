import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iqdbkofpszlgvoiilvoh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxZGJrb2Zwc3psZ3ZvaWlsdm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc3MDYyODAsImV4cCI6MjAzMzI4MjI4MH0.JkP5kApjx9KHkLIvv5u6wmFP3jaZeOaDZR_9iM6ir8w";

export const supabase = createClient(supabaseUrl, supabaseKey);
