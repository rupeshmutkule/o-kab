export default function Footer() {
  return (
    <>
      {/* TOP FOOTER */}
      <div className="top-footer">
        <div className="container">
          <div className="ok-row">
            <div className="ok-md-2 ok-xsd-12 ok-sd-6 widget">
              <h5 className="widget-titel">About</h5>
              <div className="widget-content">
                <ul className="with-border">
                  <li><a data-animated-link="fadeOut" href="#">About Us</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Press</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Store Locator</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Track Order</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Customer Support</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Careers </a></li>
                </ul>
              </div>
            </div>
            
            <div className="ok-md-2 ok-xsd-12 ok-sd-6 widget">
              <h5 className="widget-titel">Shop</h5>
              <div className="widget-content">
                <ul className="with-border">
                  <li><a data-animated-link="fadeOut" href="#">Sale Corner</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Featured Products</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Top Products</a></li>
                  <li><a data-animated-link="fadeOut" href="#">New Arrivals</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Store Locator</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Gifting </a></li>
                </ul>
              </div>
            </div>
            
            <div className="ok-md-2 ok-xsd-12 ok-sd-6 widget">
              <h5 className="widget-titel">Categories</h5>
              <div className="widget-content">
                <ul className="with-border">
                  <li><a data-animated-link="fadeOut" href="#">Home Decor</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Dining</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Accessories</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Fashion</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Furniture</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Wall Decor</a></li>
                </ul>
              </div>
            </div>
            
            <div className="ok-md-2 ok-xsd-12 ok-sd-6 widget">
              <h5 className="widget-titel">Policies</h5>
              <div className="widget-content">
                <ul className="with-border">
                  <li><a data-animated-link="fadeOut" href="#">Privacy Policy</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Terms & Conditions of Use</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Return Policy</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Refund Policy</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Cancellation Policy</a></li>
                  <li><a data-animated-link="fadeOut" href="#">Gift Voucher T&C  </a></li>
                </ul>
              </div>
            </div>
            
            <div className="ok-md-2 ok-xsd-12 ok-sd-6 widget">
              <h5 className="widget-titel">Contact us</h5>
              <div className="widget-content">
                <ul className="with-border featured-posts contact-icon">
                  <li>
                    <i className="fa fa-map-marker "></i>
                    <p>Bluett Avenue, Seaview, Isle of Wight PO34, UK</p>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <p>+213 2020 555013</p>
                    <p>+213 7700 900106</p>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <p>Emal1@domain.com</p>
                    <p>Emal2@domain.com</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="ok-md-2 ok-xsd-12 ok-sd-6 widget">
              <h5 className="widget-titel">Connect</h5>
              <div className="widget-content">
                <p> An ISO 9001 2015, ISO 14001 2015, ISO 45001 2018 Certified Company. </p>
              </div>
              <div className="widget-content">
                <div className="dima-social-footer social-media social-medium">
                  <ul className="inline clearfix">
                    <li><a data-animated-link="fadeOut" href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a data-animated-link="fadeOut" href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a data-animated-link="fadeOut" href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a data-animated-link="fadeOut" href="#"><i className="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* BOTTOM FOOTER */}
      <footer role="contentinfo" className="dima-footer e-footre">
        <div className="container">
          <div className="copyright dima-center-full">
            <p>© 2026 ABC Technologies</p>
          </div>
          <ul className="inline clearfix text-end hidden-xsd">
            <li className="no-bottom-margin">
              <a data-animated-link="fadeOut" href="#"><img className="auto-width" src="/images/icons/amex.jpg" alt="" /></a>
            </li>
            <li className="no-bottom-margin">
              <a data-animated-link="fadeOut" href="#"><img className="auto-width" src="/images/icons/discover.jpg" alt="" /></a>
            </li>
            <li className="no-bottom-margin">
              <a data-animated-link="fadeOut" href="#"><img className="auto-width" src="/images/icons/visa.jpg" alt="" /></a>
            </li>
            <li className="no-bottom-margin">
              <a data-animated-link="fadeOut" href="#"><img className="auto-width" src="/images/icons/mastercard.jpg" alt="" /></a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
