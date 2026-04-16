export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        {/* Brand & Address */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/_next/static/media/growwLogo.8624b069.svg" alt="Groww" />
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
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              {/* Use material icons as fallback if FontAwesome is not loaded */}
              <span className="material-icons" style={{ fontSize: 20, cursor: 'pointer', color: '#7b809a' }}>share</span>
            </div>
          </div>

          <div className="footer-app-section">
            <h4>Download the App</h4>
            <div className="app-links">
              <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/_next/static/media/apple-store-logo.e7195f41.svg" alt="App Store" />
              <img src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/_next/static/media/google-play-badge.5c957e1c.svg" alt="Play Store" />
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
