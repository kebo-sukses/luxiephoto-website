# 🔄 Panduan Automatic Sync - LuxiePhoto Website

## 🎯 Cara Kerja Automatic Sync

Setiap kali Anda push ke GitHub branch `main`, sistem akan:
1. ✅ Auto-build project
2. ✅ Auto-deploy ke Vercel
3. ✅ Live di https://www.luxiephoto.com dalam ~2 menit

---

## 📝 Workflow Harian - Cara Update Website

### **Metode 1: Menggunakan Script PowerShell (RECOMMENDED)**

Untuk perubahan apapun (content/code), cukup jalankan:

```powershell
# Di folder E:\NEW LUXIE
.\sync-to-github.ps1 "Deskripsi perubahan"

# Contoh:
.\sync-to-github.ps1 "Update portfolio Rizki & Dewi"
.\sync-to-github.ps1 "Tambah blog artikel tips fotografi"
.\sync-to-github.ps1 "Fix typo di halaman about"
```

Script akan otomatis:
- ✅ Pull latest changes
- ✅ Add semua perubahan
- ✅ Commit dengan pesan
- ✅ Push ke GitHub
- ✅ Trigger Vercel deploy

---

### **Metode 2: Manual Git Commands**

```powershell
# 1. Pull latest
git pull origin main

# 2. Add changes
git add .

# 3. Commit
git commit -m "Deskripsi perubahan"

# 4. Push
git push origin main
```

---

### **Metode 3: Melalui Admin Panel (Untuk Content Saja)**

1. Buka: https://www.luxiephoto.com/admin/
2. Login dengan GitHub
3. Edit content (blog, portfolio, pricing, dll)
4. Klik **Publish**
5. ✅ Otomatis commit + push + deploy!

---

## 🔐 Admin Panel Access

**URL Admin:** https://www.luxiephoto.com/admin/

**Yang Bisa Dikonfigurasi:**
- ⚙️ Site Settings (nama, email, phone, social media)
- 🏠 Hero Section (judul, deskripsi, gambar background)
- 👤 About Section
- 📸 Portfolio Items
- 💰 Pricing Plans
- 📝 Blog Posts
- 💬 Testimonials
- 🤝 Partners
- 🎯 Services

**Fitur Admin:**
- ✅ WYSIWYG editor untuk Markdown
- ✅ Upload gambar langsung
- ✅ Preview sebelum publish
- ✅ Auto-commit ke GitHub
- ✅ Auto-deploy ke production

---

## ⚡ Quick Commands

```powershell
# Sync dengan pesan auto-generated (timestamp)
.\sync-to-github.ps1

# Sync dengan pesan custom
.\sync-to-github.ps1 "Update homepage banner"

# Test local development
npm run dev
# Buka: http://localhost:5173

# Test production build
npm run build
npm run preview

# Check git status
git status

# View commit history
git log --oneline -10
```

---

## 🚨 Troubleshooting

### **Error: Cannot push to GitHub**
```powershell
# Cek apakah ada conflict
git status

# Pull dulu
git pull origin main

# Resolve conflicts, lalu:
git add .
git commit -m "Resolve conflicts"
git push origin main
```

### **Admin Panel tidak bisa login**
1. Pastikan sudah login ke GitHub
2. Cek GitHub OAuth di repo settings
3. Clear browser cache

### **Perubahan tidak muncul di website**
1. Cek status deploy di: https://vercel.com
2. Tunggu 2-3 menit (build + deploy time)
3. Hard refresh browser (Ctrl+Shift+R)

---

## 📊 Monitoring

**Cek Status Deploy:**
- Vercel Dashboard: https://vercel.com
- GitHub Actions: https://github.com/kebo-sukses/luxiephoto-website/actions

**Website URLs:**
- Production: https://www.luxiephoto.com
- Admin Panel: https://www.luxiephoto.com/admin/

---

## 🔒 Files yang TIDAK Di-Sync (Sesuai .gitignore)

- ❌ `.env` (environment variables)
- ❌ `node_modules/` (dependencies)
- ❌ `dist/` (build output)
- ❌ `luxiephoto-website/` (temporary folder)

---

## 💡 Best Practices

1. **Selalu test lokal dulu** sebelum push:
   ```powershell
   npm run dev
   # Test di http://localhost:5173
   ```

2. **Gunakan pesan commit yang jelas:**
   - ✅ "Update pricing paket Essential menjadi 12.9jt"
   - ✅ "Tambah portfolio wedding Budi & Ani"
   - ❌ "update" (terlalu umum)

3. **Pull sebelum edit** (hindari conflict):
   ```powershell
   git pull origin main
   ```

4. **Backup penting:**
   - Database ada di Sanity.io
   - Content files di folder `content/`
   - Images di folder `public/image/`

---

**🎉 Setup selesai! Website sudah siap untuk automatic sync.**
