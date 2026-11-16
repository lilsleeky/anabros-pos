# Locked out? How to get back in

Anabros POS has no server, so there is no "email me a reset link". Use these, in this order.

## 1. Use another admin (best)
Any other admin can open **Users**, pick you, and set a new password. This is why we recommend **two admin accounts**.

## 2. Use the recovery code
On the sign-in screen choose **Use recovery code**, enter the code you were given at setup, and set a new password. You get a new code afterwards. Write it down.

## 3. Emergency reset (no code, no other admin)
This works only on **the same device and the same browser** where the shop data is stored. If the browser's site data was cleared, restore a backup first (Settings > Restore from backup, or install the app fresh and restore there; a backup keeps the same passwords, so you still need this step afterwards).

1. Open the app in that browser, on the sign-in page.
2. Open the browser console: press **F12** (or Ctrl+Shift+J on Chrome/Edge, Ctrl+Shift+K on Firefox) and click **Console**. On a phone, do this on a computer if you can.
3. Open [`emergency-reset.js`](emergency-reset.js) and edit the two lines at the top: your username (or leave it empty for the first admin) and a temporary password.
4. Copy the whole file and paste it into the console, then press Enter. Chrome may ask you to type `allow pasting` first. That is a safety feature. Only paste code you trust.
5. When it says **Done**, reload the page and sign in with the temporary password. Change it straight away from the account menu.

The script only changes the password of one admin account. It does not touch sales, stock or customers.

## Why this works, and why it is not a flaw
The data lives in the browser on the shop's device, so anyone with full access to that device could always do this. Treat the device as the key: keep it safe and lock it. A server version would add proper account recovery.

## Prevent it
- Keep **two admins**.
- Keep the **recovery code** on paper somewhere safe.
- **Copy a backup** from Settings every week or two.
