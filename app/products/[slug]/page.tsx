<<<<<<< HEAD
import { notFound } from "next/navigation";
import ClientProductDetail from "@/components/ClientProductDetail";
import ProductDetail from "@/components/ProductDetail";
import { getProduct, idFromSlug, type Product } from "@/lib/api";
=======
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FavoriteButton from "@/components/FavoriteButton";
import { getProduct, idFromSlug } from "@/lib/api";
>>>>>>> 0a04769cfc789a967fa10e7b7922fa2bca7a6f49

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const id = idFromSlug(slug);
<<<<<<< HEAD
  let product: Product | null = null;
  try {
    product = id ? await getProduct(id) : null;
  } catch {
    /* judul default dipakai kalau fetch gagal */
  }
  return { title: product ? `${product.title} | Product Showcase` : "Product | Product Showcase" };
=======
  const product = id ? await getProduct(id) : null;
  return { title: product ? `${product.title} | Product Showcase` : "Product Not Found" };
>>>>>>> 0a04769cfc789a967fa10e7b7922fa2bca7a6f49
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const id = idFromSlug(slug);
  if (!id) notFound();

<<<<<<< HEAD
  let product: Product | null = null;
  try {
    product = await getProduct(id);
  } catch (err) {
    console.error("getProduct failed:", err);
    // Fetch server gagal: ambil data dari browser
    return <ClientProductDetail id={id} />;
  }
  if (!product) notFound();

  return <ProductDetail product={product} />;
=======
  const product = await getProduct(id);
  if (!product) notFound();

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
>>>>>>> 0a04769cfc789a967fa10e7b7922fa2bca7a6f49
}
