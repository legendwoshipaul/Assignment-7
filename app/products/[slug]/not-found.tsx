import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1 className="page-title">Produk tidak ditemukan</h1>
      <Link href="/" className="btn btn-primary">
        Kembali ke Home
      </Link>
    </section>
  );
}
