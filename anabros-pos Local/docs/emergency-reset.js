// Anabros POS emergency password reset (paste into the browser console on the SAME device and browser).
// Edit the two lines below, then paste the whole thing.
const USERNAME = '';              // the admin's username. Leave empty to use the first admin.
const NEW_PASSWORD = 'TempPass123'; // choose a temporary password (at least 6 characters)

(async () => {
  const KEY = 'jb-pos-v2';
  const raw = localStorage.getItem(KEY);
  if (!raw) { console.log('No Anabros POS data found in this browser. Open the app in the browser where you normally use it.'); return; }
  const d = JSON.parse(raw);
  const admins = d.users.filter(u => u.role === 'admin');
  const u = USERNAME ? admins.find(x => x.username === USERNAME) : admins[0];
  if (!u) { console.log('No matching admin. Admin usernames here:', admins.map(x => x.username).join(', ')); return; }
  u.salt = Math.random().toString(36).slice(2, 10);
  const bytes = new TextEncoder().encode(u.salt + ':' + NEW_PASSWORD);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  u.hash = [...new Uint8Array(digest)].map(x => x.toString(16).padStart(2, '0')).join('');
  u.active = true;
  localStorage.setItem(KEY, JSON.stringify(d));
  console.log('Done. Reload the page and sign in as "' + u.username + '" with the temporary password. Then change it in your account menu.');
})();
