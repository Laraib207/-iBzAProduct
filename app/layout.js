import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider } from '../components/CartContext';

export const metadata = {
  title: 'iBzA Universe | Premium Hydration Engineered for Excellence',
  description: 'Luxury, precision-engineered water bottles from iBzA Universe. Shop Aero Shift, Apex Guard & Volt Surge.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <CartProvider>
          {/* Announcement bar */}
          <div className="announcement-bar">
            ✦ Free delivery on orders above ₹999 &nbsp;·&nbsp; Use code <strong>IBZA10</strong> for 10% off your first order ✦
          </div>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
