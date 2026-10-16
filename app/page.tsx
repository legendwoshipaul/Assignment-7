import { notFound } from "next/navigation";
import ClientProductDetail from "@/components/ClientProductDetail";
import ProductDetail from "@/components/ProductDetail";
import { getProduct, idFromSlug, type Product } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const id = idFromSlug(slug);
  let product: Product | null = null;
  try {
    product = id ? await getProduct(id) : null;
  } catch {
    /* judul default dipakai kalau fetch gagal */
  }
  return { title: product ? `${product.title} | Product Showcase` : "Product | Product Showcase" };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const id = idFromSlug(slug);
  if (!id) notFound();

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
}
