import './globals.css';
import Header from '../components/Header';
import { CartProvider } from '../components/CartContext';

export const metadata = {
  title: 'iBzA Aero Shift | Premium Water Bottle E-Commerce',
  description: 'A 3D Next.js e-commerce website for the iBzA water bottle collection, part of the @iBzA Universe.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="page-shell">
            <Header />
            {children}
          </div>
        </CartProvider>
        <script src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" defer></script>
      </body>
    </html>
  );
}