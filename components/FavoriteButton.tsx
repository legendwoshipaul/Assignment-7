"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "favorites";

function readFavorites(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as number[]) : [];
  } catch {
    return [];
  }
}

export default function FavoriteButton({ productId }: { productId: number }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [ready, setReady] = useState(false);

  // Baca status favorit dari localStorage setelah mount
  useEffect(() => {
    setIsFavorite(readFavorites().includes(productId));
    setReady(true);
  }, [productId]);

  // Simpan perubahan ke localStorage
  useEffect(() => {
    if (!ready) return;
    try {
      const current = readFavorites().filter((id) => id !== productId);
      if (isFavorite) current.push(productId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch {
      /* abaikan jika storage tidak tersedia */
    }
  }, [isFavorite, ready, productId]);

  return (
    <button
      type="button"
      onClick={() => setIsFavorite((v) => !v)}
      aria-pressed={isFavorite}
      className={`btn ${isFavorite ? "btn-fav-active" : "btn-outline"}`}
    >
      {isFavorite ? "♥ Favorited" : "♡ Add to Favorite"}
    </button>
  );
}
