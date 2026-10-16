import ProductList from "@/components/ProductList";
import { getProducts, type Product } from "@/lib/api";

// Render saat request (bukan saat build), jadi build tidak gagal kalau API sedang down
export const dynamic = "force-dynamic";

export default async function HomePage() {
  let products: Product[] = [];
  let failed = false;
  try {
    products = await getProducts();
  } catch (err) {
    console.error("getProducts failed:", err);
    failed = true;
  }

  return (
    <section>
      <h1 className="page-title">Featured Products</h1>
      {failed ? (
        <p className="empty">Gagal memuat produk. Coba refresh halaman.</p>
      ) : (
        <ProductList products={products} />
      )}
    </section>
  );
}
