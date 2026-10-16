import ProductList from "@/components/ProductList";
import { getProducts, type Product } from "@/lib/api";

// Render saat request (bukan saat build), jadi build tidak gagal kalau API sedang down
export const dynamic = "force-dynamic";

export default async function HomePage() {
  let products: Product[] = [];
  try {
    products = await getProducts();
  } catch (err) {
    // Data kosong -> ProductList mengambil sendiri dari browser
    console.error("getProducts failed:", err);
  }

  return (
    <section>
      <h1 className="page-title">Featured Products</h1>
      <ProductList products={products} />
    </section>
  );
}
