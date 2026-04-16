import growwLogo from '../assets/groww-logo.png';

/* Social icon inline SVGs */
const TwitterX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const Instagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const Facebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const LinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const YouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const AppStoreBadge = () => (
  <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="36" rx="6" fill="#000"/>
    <path d="M14 18.5c0-2.4 1.3-4.5 3.2-5.7l-1.5-2.6C13.5 11.7 12 14.9 12 18.5c0 3.7 1.6 7 4.1 9.3l1.5-2.6C15.5 23.9 14 21.3 14 18.5z" fill="white"/>
    <path d="M22.5 11c-1.1 0-2.1.3-3 .8l1.5 2.6c.4-.2.9-.4 1.5-.4 1.9 0 3.5 1.6 3.5 3.5S24.4 21 22.5 21c-.6 0-1.1-.1-1.5-.4L19.5 23.2c.9.5 1.9.8 3 .8 3.3 0 6-2.7 6-6S25.8 11 22.5 11z" fill="white"/>
    <text x="34" y="13" fill="white" fontSize="7" fontFamily="Helvetica, Arial, sans-serif">Download on the</text>
    <text x="34" y="25" fill="white" fontSize="12" fontWeight="bold" fontFamily="Helvetica, Arial, sans-serif">App Store</text>
  </svg>
);

const PlayStoreBadge = () => (
  <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="36" rx="6" fill="#000"/>
    <path d="M11 10.5l13 7.5-13 7.5V10.5z" fill="url(#ps1)"/>
    <path d="M11 10.5l8 8-8 8V10.5z" fill="url(#ps2)"/>
    <path d="M24 18l3 1.7-3 1.7V18z" fill="#FFBC00"/>
    <path d="M19 18.5L11 10.5l11.3 6.5-3.3 1.5z" fill="#EA4335"/>
    <path d="M19 17.5l3.3 1.5-11.3 6L19 17.5z" fill="#34A853"/>
    <defs>
      <linearGradient id="ps1" x1="11" y1="18" x2="24" y2="18">
        <stop offset="0%" stopColor="#00D2FF"/>
        <stop offset="100%" stopColor="#3A7BFF"/>
      </linearGradient>
      <linearGradient id="ps2" x1="11" y1="26.5" x2="19" y2="18.5">
        <stop offset="0%" stopColor="#32A071"/>
        <stop offset="100%" stopColor="#2DA771"/>
      </linearGradient>
    </defs>
    <text x="34" y="13" fill="white" fontSize="7" fontFamily="Helvetica, Arial, sans-serif">GET IT ON</text>
    <text x="34" y="25" fill="white" fontSize="12" fontWeight="bold" fontFamily="Helvetica, Arial, sans-serif">Google Play</text>
  </svg>
);

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        {/* Brand & Address */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={growwLogo} alt="Groww" width="32" height="32" />
            <span>Groww</span>
          </div>
          <p className="footer-address">
            Vaishnavi Tech Park, South Tower, 3rd Floor,<br />
            Sarjapur Main Road, Bellandur, Bengaluru – 560103<br />
            Karnataka
          </p>

          <div className="footer-social-section">
            <h4>Contact Us</h4>
            <div className="social-icons">
              <a href="https://twitter.com/GrowwApp" target="_blank" rel="noreferrer" title="X (Twitter)"><TwitterX /></a>
              <a href="https://instagram.com/groww" target="_blank" rel="noreferrer" title="Instagram"><Instagram /></a>
              <a href="https://facebook.com/growwapp" target="_blank" rel="noreferrer" title="Facebook"><Facebook /></a>
              <a href="https://linkedin.com/company/groww" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedIn /></a>
              <a href="https://youtube.com/@GrowwApp" target="_blank" rel="noreferrer" title="YouTube"><YouTube /></a>
            </div>
          </div>

          <div className="footer-app-section">
            <h4>Download the App</h4>
            <div className="app-links">
              <a href="https://apps.apple.com/in/app/groww-stocks-mutual-fund-app/id1404871703" target="_blank" rel="noreferrer">
                <AppStoreBadge />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.nextbillion.groww" target="_blank" rel="noreferrer">
                <PlayStoreBadge />
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links">
          <div className="link-group">
            <h4>GROWW</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Media &amp; Press</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Help &amp; Support</a></li>
              <li><a href="#">Trust &amp; Safety</a></li>
              <li><a href="#">Investor Relations</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#">AMC Mutual Funds</a></li>
              <li><a href="#">Calculators</a></li>
              <li><a href="#">Glossary</a></li>
              <li><a href="#">Open Demat Account</a></li>
              <li><a href="#">Groww Digest</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2016-2026 Groww. All rights reserved.</span>
        <span>Version: 7.5.1</span>
      </div>
    </footer>
  );
}
