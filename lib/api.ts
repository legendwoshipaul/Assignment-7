export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const BASE_URL = "https://fakestoreapi.com";

// Beberapa host (termasuk Vercel) bisa ditolak API kalau tanpa User-Agent
const HEADERS = {
  Accept: "application/json",
  "User-Agent": "Mozilla/5.0 (compatible; ProductShowcase/1.0)",
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    headers: HEADERS,
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Gagal mengambil daftar produk (status ${res.status})`);
  return res.json();
}

export async function getProduct(id: number): Promise<Product | null> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    headers: HEADERS,
    next: { revalidate: 3600 },
  });
<<<<<<< HEAD
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Gagal mengambil produk (status ${res.status})`);
=======
  if (!res.ok) return null;
>>>>>>> 0a04769cfc789a967fa10e7b7922fa2bca7a6f49
  const text = await res.text();
  // fakestoreapi mengembalikan body kosong jika id tidak ada
  if (!text) return null;
  return JSON.parse(text) as Product;
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/** Slug format: "<id>-<judul-produk>", contoh: 1-fjallraven-foldsack-no-1-backpack */
export function productSlug(p: Pick<Product, "id" | "title">): string {
  return `${p.id}-${slugify(p.title)}`;
}

export function idFromSlug(slug: string): number | null {
  const id = parseInt(slug.split("-")[0], 10);
  return Number.isNaN(id) ? null : id;
}
