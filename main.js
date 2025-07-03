import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabase = createClient(
  'https://vgchzuqtrmohyzojvngw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnY2h6dXF0cm1vaHl6b2p2bmd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNzE1NzAsImV4cCI6MjA2Njg0NzU3MH0.WKcSXto5EXcS1fdScAKf6atW7tcXM9AB9jObapii_2g'
);

window.navigate = async function (page) {
  const res = await fetch(`pages/${page}.html`);
  const html = await res.text();
  document.getElementById('app-content').innerHTML = html;
};

// Load halaman default saat pertama kali
navigate('home');
