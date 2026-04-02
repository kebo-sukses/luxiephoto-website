# 📸 Panduan Update Portfolio

## 🎯 Cara Menambah/Edit Portfolio Couple di Dashboard Admin

### **Metode 1: Via Admin Panel** (PALING MUDAH) ⭐

1. **Buka Dashboard Admin:**
   ```
   https://www.luxiephoto.com/admin/
   ```

2. **Login dengan GitHub**

3. **Pilih "📸 Portfolio" di sidebar**

4. **Untuk Menambah Couple Baru:**
   - Scroll ke bawah  
   - Klik tombol **"Add Portfolio"**
   - Isi semua field:
     - **ID**: ID unik (huruf kecil dengan dash), contoh: `budi-ani`
     - **Couple Names**: Nama couple, contoh: `Budi & Ani`
     - **Category**: Pilih kategori (Wedding, Beach Wedding, dll)
     - **Location**: Lokasi, contoh: `Jakarta, Indonesia`
     - **Description**: Deskripsi singkat wedding
     - **Main Image**: Upload foto utama (1 foto)
     - **Featured**: Centang jika ingin tampil di homepage
     - **Gallery Images**: 
       - Klik **"Add Image"** untuk setiap foto
       - Upload 4-6 foto terbaik dari couple tersebut
       - Foto pertama sebaiknya sama dengan Main Image

5. **Klik "Publish"** untuk save & deploy

6. **Tunggu 2-3 menit** untuk deployment selesai

---

### **Metode 2: Edit Manual (Advanced)**

Jika ingin edit langsung di file:

```powershell
cd "e:\NEW LUXIE"

# Edit file portfolio
notepad content/portfolio/_data.json

# Setelah edit, sync ke GitHub
.\sync-to-github.ps1 "Update: Tambah portfolio couple baru"
```

Format untuk tambah couple di `_data.json`:

```json
{
  "id": "budi-ani",
  "names": "Budi & Ani",
  "category": "Wedding",
  "location": "Jakarta, Indonesia",
  "description": "A beautiful traditional Javanese wedding celebration.",
  "image": "/image/FOTO_UTAMA.jpg",
  "featured": true,
  "gallery": [
    "/image/FOTO_1.jpg",
    "/image/FOTO_2.jpg",
    "/image/FOTO_3.jpg",
    "/image/FOTO_4.jpg",
    "/image/FOTO_5.jpg"
  ]
}
```

---

## 🖼️ Upload Foto ke Website

### **Via Admin Panel:**
1. Di field "Main Image" atau "Gallery Images"
2. Klik "Choose an image"
3. Klik "Upload" tab
4. Drag & drop foto atau klik "Choose files"
5. Foto akan otomatis tersimpan di `/public/image/`

### **Via Manual Upload:**
1. Copy foto ke folder: `e:\NEW LUXIE\public\image\`
2. Gunakan nama file yang deskriptif, contoh: `budi-ani-01.jpg`
3. Sync ke GitHub:
   ```powershell
   .\sync-to-github.ps1 "Upload: Foto wedding Budi & Ani"
   ```

---

## ✅ Hasil di Website

### **Tampilan Portfolio:**

**Homepage (Section Portfolio):**
- Hanya couple dengan `"featured": true` yang muncul
- Tampil dalam grid layout cantik
- Hover untuk lihat nama & lokasi

**Full Gallery Page:**
- Semua couple tampil di halaman `/gallery`
- Filter by category
- Search by nama

**Lightbox (Klik Foto):**
- Klik foto couple mana saja
- Akan muncul gallery slider dengan semua foto
- Navigasi dengan:
  - ← → Arrow buttons
  - Keyboard (arrow keys)
  - Thumbnail preview
  - ESC untuk close

---

## 🔄 Auto-Sync Portfolio

**Setiap kali Anda update portfolio di Admin Panel:**

1. ✅ Otomatis commit ke GitHub
2. ✅ Otomatis trigger Vercel deployment  
3. ✅ Website update dalam 2-3 menit
4. ✅ Semua foto dalam gallery akan terlihat

**Tidak perlu manual sync!**

---

## 🎨 Tips Foto Portfolio

### **Foto yang Bagus:**
- **Resolution**: Minimal 1920x1080px
- **Format**: JPG (lebih kecil file size)
- **Ukuran**: Max 2MB per foto (compress jika perlu)
- **Jumlah**: 4-6 foto per couple (yang terbaik saja)
- **Komposisi**: Variasi shot (wide, close-up, detail, candid)

### **Urutan Foto di Gallery:**
1. Foto utama (hero shot)
2. Foto couple (portrait)
3. Foto ceremony  
4. Foto reception
5. Foto detail/kreative
6. Foto candid/emotion

---

## 📊 Status Sinkronisasi

### **Sebelum Fix:**
❌ Gallery kosong di `_data.json`  
❌ Hanya 1 foto terlihat per couple  
❌ Lightbox tidak menampilkan gallery

### **Setelah Fix:**
✅ Gallery lengkap di `_data.json`  
✅ Semua foto couple terlihat  
✅ Lightbox dengan slider functional  
✅ Thumbnail navigation working  
✅ Arrow & keyboard navigation working

---

## 🚀 Quick Commands

```powershell
# Sync perubahan portfolio
.\sync-to-github.ps1 "Update portfolio: tambah Budi & Ani"

# Check status
git status

# Test lokal
npm run dev
# Buka: http://localhost:5173
```

---

## 📞 Troubleshooting

### **Foto tidak muncul di website:**
1. Cek path foto benar: `/image/nama-file.jpg`
2. Pastikan foto ada di folder `public/image/`
3. Clear browser cache (Ctrl+Shift+R)

### **Gallery masih kosong:**
1. Pastikan sudah klik "Add Image" di admin panel
2. Pastikan field "Gallery Images" terisi
3. Check file `_data.json` apakah array gallery terisi

### **Couple baru tidak muncul:**
1. Tunggu 2-3 menit setelah publish
2. Check Vercel deployment status
3. Clear browser cache

---

**🎉 Portfolio system sudah fully functional dengan gallery support!**

Last updated: 2026-04-02
