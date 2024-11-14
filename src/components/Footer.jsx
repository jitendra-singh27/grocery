
import './Footer.css';
import AmazonLogo from "../assets/images/payment/amazonpay.svg"
import AmericanExpressLogo from "../assets/images/payment/american-express.svg"
import PaypalLogo from "../assets/images/payment/paypal.svg"
import VisaLogo from "../assets/images/payment/visa.svg"
import MastercardLogo from "../assets/images/payment/mastercard.svg"
import GoogleplayLogo from "../assets/images/payment/googleplay-btn.svg"
import AppstoreLogo from "../assets/images/payment/appstore-btn.svg"
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="g-4 py-4 row">
            {/* Left Side Categories Section */}
            <div className="col-lg-4 col-md-12 col-12">
              <h6 className="mb-4">Categories</h6>
              <div className="row">
                <div className="col-6">
                  <div className="flex-column nav">
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Vegetables & Fruits
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Breakfast & Instant Food
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Bakery & Biscuits
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Atta, Rice & Dal
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Sauces & Spreads
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Organic & Gourmet
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Baby Care
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Cleaning Essentials
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Personal Care
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="flex-column nav">
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Dairy, Bread & Eggs
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Cold Drinks & Juices
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Tea, Coffee & Drinks
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Masala, Oil & More
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Chicken, Meat & Fish
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Paan Corner
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Pharma & Wellness
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Home & Office
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Pet Care
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Sections */}
            <div className="col-lg-8 col-md-12 col-12">
              <div className="g-4 row">
                {/* Get to Know Us Section */}
                <div className="col-md-3 col-sm-6 col-6">
                  <h6 className="mb-4">Get to Know Us</h6>
                  <div className="flex-column nav">
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Company
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        About
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Blog
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Help Center
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Our Value
                      </a>
                    </div>
                  </div>
                </div>

                {/* For Consumers Section */}
                <div className="col-md-3 col-sm-6 col-6">
                  <h6 className="mb-4">For Consumers</h6>
                  <div className="flex-column nav">
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Payments
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Shipping
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Product Returns
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        FAQ
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Shop Checkout
                      </a>
                    </div>
                  </div>
                </div>

                {/* Become a Shopper Section */}
                <div className="col-md-3 col-sm-6 col-6">
                  <h6 className="mb-4">Become a Shopper</h6>
                  <div className="flex-column nav">
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Shopper Opportunities
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Become a Shopper
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Earnings
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        Ideas & Guides
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        New Retailers
                      </a>
                    </div>
                  </div>
                </div>

                {/* FreshCart Programs Section */}
                <div className="col-md-3 col-sm-6 col-6">
                  <h6 className="mb-4">FreshCart Programs</h6>
                  <div className="flex-column nav">
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        FreshCart Plus
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        FreshCart for Business
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        FreshCart for Students
                      </a>
                    </div>
                    <div className="mb-2 nav-item">
                      <a href="#" role="button" className="nav-link" tabIndex="0">
                        FreshCart Coupons
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment and App Sections */}
          <div className="border-top py-4">
            <div className="align-items-center row">
              <div className="text-lg-start text-center mb-2 mb-lg-0 col-lg-5">
                <ul className="mb-0 undefined list-inline">
                  <li className="text-dark list-inline-item">Payment Partners</li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src={AmazonLogo} alt="Amazon Pay" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src={AmericanExpressLogo} alt="American Express" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src={MastercardLogo} alt="MasterCard" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src={PaypalLogo} alt="PayPal" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src={VisaLogo} alt="Visa" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4 mt-md-0 col-lg-7">
                <div className="list-inline mb-0 text-lg-end text-center">
                  <div className="list-inline-item mb-2 mb-md-0 text-dark">
                    Get deliveries with FreshCart
                  </div>
                  <div className="list-inline-item ms-5 me-3">
                    <a href="#!">
                      <img src={AppstoreLogo} alt="App Store" style={{ width: '140px' }} />
                    </a>
                  </div>
                  <div className="list-inline-item">
                    <a href="#!">
                      <img src={GoogleplayLogo} alt="Google Play" style={{ width: '140px' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="py-4 mt-4 row border-top">
  <div className="col-lg-8 col-md-12 col-12">
    <p className="text-muted">&copy; 2024 Test. All Rights Reserved.</p>
  </div>
  <div className="col-lg-4 col-md-12 col-12">
    <div className="d-flex justify-content-end">
      <a href="#" role="button" aria-label="Facebook" className="social-icon">
        <i className="fa-brands fa-facebook fa-2x"></i>
      </a>
      <a href="#" role="button" aria-label="Twitter" className="social-icon">
        <i className="fa-brands fa-twitter fa-2x"></i>
      </a>
      <a href="#" role="button" aria-label="Instagram" className="social-icon">
        <i className="fa-brands fa-instagram fa-2x"></i>
      </a>
      <a href="#" role="button" aria-label="LinkedIn" className="social-icon">
        <i className="fa-brands fa-linkedin fa-2x"></i>
      </a>
    </div>
  </div>
</div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
