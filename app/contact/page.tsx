export const metadata = { title: "Contact | Product Showcase" };

export default function ContactPage() {
  return (
    <section>
      <h1 className="page-title">Contact</h1>
      <p>Ada pertanyaan? Hubungi kami lewat kontak di bawah ini.</p>
      <ul className="contact-list">
        <li>Email: hello@example.com</li>
        <li>Phone: +62 812 0000 0000</li>
        <li>Address: Jakarta, Indonesia</li>
      </ul>
    </section>
  );
}
