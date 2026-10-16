import ProductList from "@/components/ProductList";
import { getProducts, type Product } from "@/lib/api";

// Render saat request (bukan saat build), jadi build tidak gagal kalau API sedang down
export const dynamic = "force-dynamic";

export default async function HomePage() {
  let products: Product[] = [];
<<<<<<< HEAD
  try {
    products = await getProducts();
  } catch (err) {
    // Data kosong -> ProductList mengambil sendiri dari browser
    console.error("getProducts failed:", err);
=======
  let failed = false;
  try {
    products = await getProducts();
  } catch (err) {
    console.error("getProducts failed:", err);
    failed = true;
>>>>>>> 0a04769cfc789a967fa10e7b7922fa2bca7a6f49
  }

  return (
    <section>
      <h1 className="page-title">Featured Products</h1>
<<<<<<< HEAD
      <ProductList products={products} />
=======
      {failed ? (
        <p className="empty">Gagal memuat produk. Coba refresh halaman.</p>
      ) : (
        <ProductList products={products} />
      )}
>>>>>>> 0a04769cfc789a967fa10e7b7922fa2bca7a6f49
    </section>
  );
}
