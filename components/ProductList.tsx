"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Product, productSlug } from "@/lib/api";

const DEFAULT_COUNT = 5;

export default function ProductList({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");

  // Tanpa pencarian: tampilkan 5 produk. Dengan pencarian: cari di semua produk.
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, DEFAULT_COUNT);
    // Cocokkan di awal kata, jadi "men" tidak ikut menangkap "women"
    const terms = q.split(/\s+/);
    return products.filter((p) => {
      const words = `${p.title} ${p.category}`.toLowerCase().split(/[^a-z0-9]+/);
      return terms.every((t) => words.some((w) => w.startsWith(t)));
    });
  }, [products, query]);

  return (
    <>
      <input
        type="search"
        className="search"
        placeholder="Cari produk..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Cari produk"
      />

      {visible.length === 0 ? (
        <p className="empty">Produk tidak ditemukan.</p>
      ) : (
        <ul className="grid">
          {visible.map((p) => (
            <li key={p.id} className="card">
              <div className="card-image">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h2 className="card-title">{p.title}</h2>
              <Link href={`/products/${productSlug(p)}`} className="btn btn-primary">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
