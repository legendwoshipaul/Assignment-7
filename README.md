# Product Showcase

Simple product showcase memakai Next.js (App Router, TypeScript) dan [FakeStore API](https://fakestoreapi.com/docs).

## Fitur

| Fitur | Keterangan |
| --- | --- |
| Home (`/`) | 5 produk: gambar, nama, tombol **View Details** |
| Detail (`/products/[slug]`) | Info lengkap produk. Slug: `<id>-<judul>` |
| Navigasi | Menu Home & Contact memakai `<Link>` |
| Add to Favorite | `useState` + `useEffect`, disimpan di `localStorage` |
| Search (opsional) | Cari berdasarkan nama/kategori (mencari di semua 20 produk) |
| Styling (opsional) | CSS biasa, responsif |

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Import repo di https://vercel.com/new (preset Next.js otomatis terdeteksi).
3. Klik **Deploy**.
