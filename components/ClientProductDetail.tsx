"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductDetail from "@/components/ProductDetail";
import type { Product } from "@/lib/api";

// Fallback: ambil data dari browser kalau fetch di server gagal
export default function ClientProductDetail({ id }: { id: number }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [status, setStatus] = useState<"loading" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`);
        return res.json();
      })
      .then((data: Product) => {
        if (!cancelled) setProduct(data);
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (product) return <ProductDetail product={product} />;

  return (
    <section>
      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
      <p className="empty">
        {status === "loading" ? "Memuat produk..." : "Gagal memuat produk. Coba refresh halaman."}
      </p>
    </section>
  );
}
