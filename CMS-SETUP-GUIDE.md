# 🎨 Panduan Setup CMS untuk Luxie Photography

## Apa itu CMS?

CMS (Content Management System) memungkinkan Anda mengedit konten website **tanpa coding**. Anda bisa:

- ✏️ Mengubah semua teks (judul, deskripsi, dll)
- 🎨 Mengubah warna dan font
- 🖼️ Mengupload dan mengganti gambar dengan mudah
- 📸 Menambah/menghapus item portfolio
- ⭐ Mengelola testimonial
- 💰 Mengatur paket harga
- 📝 Menulis blog posts
- Dan banyak lagi!

---

## 📋 Langkah Setup (15 menit)

### Step 1: Buat Akun Sanity

1. Buka **[sanity.io](https://www.sanity.io/)**
2. Klik **"Get started"** (GRATIS)
3. Daftar dengan Google atau GitHub
4. Pilih **"Create new project"**
5. Beri nama project: `luxiephoto-cms`
6. Pilih dataset: `production`
7. **Catat Project ID** yang muncul (contoh: `abc123xy`)

### Step 2: Setup Sanity Studio

```bash
# Masuk ke folder sanity-studio
cd sanity-studio

# Install dependencies
npm install

# Jalankan Sanity Studio
npm run dev
```

Studio akan terbuka di `http://localhost:3333`

### Step 3: Deploy Sanity Studio (Opsional tapi Direkomendasikan)

```bash
# Deploy studio ke cloud (gratis)
npm run deploy
```

Setelah deploy, Anda bisa akses studio dari mana saja via URL:
`https://luxiephoto-cms.sanity.studio`

### Step 4: Konfigurasi Website

1. Copy file `.env.example` menjadi `.env`
2. Ganti `YOUR_PROJECT_ID` dengan Project ID Anda:

```env
VITE_SANITY_PROJECT_ID=abc123xy
VITE_SANITY_DATASET=production
```

3. Edit juga di `sanity-studio/sanity.config.js`:
```js
projectId: 'abc123xy',  // Ganti dengan ID Anda
```

4. Edit di `src/lib/sanity.js`:
```js
projectId: 'abc123xy',  // Ganti dengan ID Anda
```

### Step 5: Isi Konten Pertama

1. Buka Sanity Studio (`http://localhost:3333`)
2. Klik **"⚙️ Site Settings"** → Isi informasi dasar
3. Klik **"🏠 Homepage Sections"** → Isi konten hero, about, dll
4. Tambahkan portfolio, testimonial, pricing, dll

---

## 🖥️ Cara Menggunakan CMS

### Mengubah Teks

1. Buka Sanity Studio
2. Pilih section yang ingin diedit (Hero, About, dll)
3. Edit teks langsung
4. Klik **"Publish"** untuk menyimpan

### Mengubah Gambar

1. Klik field gambar
2. Klik **"Upload"** atau drag & drop gambar
3. Gunakan **"Hotspot"** untuk menentukan fokus gambar
4. Klik **"Publish"**

### Mengubah Warna & Font

1. Buka **"⚙️ Site Settings"**
2. Ubah **Primary Color** (format: #ec4899)
3. Pilih **Font Heading** dan **Font Body**
4. Publish perubahan

### Menambah Portfolio

1. Klik **"📸 Portfolio"**
2. Klik **"+ Create new"**
3. Isi nama pasangan, upload gambar, pilih kategori
4. Tambahkan gambar gallery
5. Publish

### Menambah Blog Post

1. Klik **"📰 Blog Posts"**
2. Klik **"+ Create new"**
3. Tulis judul dan konten dengan rich text editor
4. Upload gambar
5. Publish

---

## 🎨 Kustomisasi Lanjutan

### Menambah Kategori Portfolio Baru

Edit file `sanity-studio/schemas/portfolioItem.js`:

```js
options: {
  list: [
    { title: 'Classic Wedding', value: 'Classic Wedding' },
    { title: 'New Category', value: 'New Category' },  // Tambahkan ini
    // ...
  ]
}
```

### Menambah Warna ke Pilihan

Edit `sanity-studio/schemas/siteSettings.js` untuk menambah opsi warna preset.

---

## 📱 Akses CMS dari HP

Setelah deploy studio, Anda bisa mengedit konten dari HP:
1. Buka browser di HP
2. Akses `https://luxiephoto-cms.sanity.studio`
3. Login dan edit!

---

## ❓ FAQ

**Q: Apakah gratis?**
A: Ya! Sanity free tier mencakup:
- 100,000 API requests/bulan
- 10GB bandwidth
- 2 users
- Unlimited documents

**Q: Perubahan langsung terlihat?**
A: Ya, setelah Publish, perubahan langsung terlihat di website.

**Q: Bagaimana jika CMS tidak tersedia?**
A: Website tetap berjalan dengan data default.

**Q: Bisa kolaborasi dengan tim?**
A: Ya, undang anggota tim di sanity.io/manage

---

## 🆘 Butuh Bantuan?

- Dokumentasi Sanity: [sanity.io/docs](https://www.sanity.io/docs)
- Sanity Community: [slack.sanity.io](https://slack.sanity.io)
