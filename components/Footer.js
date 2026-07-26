import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Image src="/logo.svg" alt="iBzA logo" width={36} height={36} />
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.1rem' }}>
                iBzA Universe
              </span>
            </Link>
            <p>
              Premium, precision-engineered water bottles for those who live at the intersection of performance and luxury.
            </p>
          </div>

          {/* Products column */}
          <div>
            <p className="footer-heading">Products</p>
            <ul className="footer-links">
              <li><Link href="/products/aero-shift">Aero Shift</Link></li>
              <li><Link href="/products/apex-guard">Apex Guard</Link></li>
              <li><Link href="/products/volt-surge">Volt Surge</Link></li>
              <li><Link href="/products">All Products</Link></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <p className="footer-heading">Company</p>
            <ul className="footer-links">
              <li><Link href="/#about">Our Story</Link></li>
              <li><Link href="/#technology">Technology</Link></li>
              <li><Link href="/#products">Collections</Link></li>
            </ul>
          </div>

          {/* Support column */}
          <div>
            <p className="footer-heading">Support</p>
            <ul className="footer-links">
              <li><Link href="/checkout">Cart &amp; Checkout</Link></li>
              <li><a href="mailto:hello@ibzauniverse.com">hello@ibzauniverse.com</a></li>
              <li>
                <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
                  Mon–Sat, 10am–6pm IST
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} iBzA Universe. All rights reserved.
          </p>
          <div className="footer-socials">
            {['IG', 'TW', 'YT', 'LI'].map((s) => (
              <a key={s} href="#" className="footer-social" aria-label={s}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
