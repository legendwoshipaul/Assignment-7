import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import type { Product } from "@/lib/api";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <section>
      <Link href="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="detail">
        <div className="detail-image">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="detail-info">
          <span className="badge">{product.category}</span>
          <h1>{product.title}</h1>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="rating">
            ★ {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p className="description">{product.description}</p>
          <FavoriteButton productId={product.id} />
        </div>
      </div>
    </section>
  );
}
