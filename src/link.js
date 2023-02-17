import { Link } from "react-router-dom";
import "./compcss/link.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./Banner/s1.jpg";
import img2 from "./Banner/s2.jpg";
import img3 from "./Banner/s3.jpeg";
function Header() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="https://i.pinimg.com/736x/82/28/e7/8228e746cc589349a1c470612c6c41a6.jpg"></img>
          <div className="logocontent">
            <h1>logo</h1>
            <span>photography</span>
          </div>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/Commerical">WEDDING</Link>
            </li>
            <li>
              <Link to="/nature">NATURE</Link>
            </li>
            <li>
              <Link to="/finearts">BABYES</Link>
            </li>

            <li>
              <Link to="/bts">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export { Header };
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerlogo">
          <img src="https://i.pinimg.com/736x/82/28/e7/8228e746cc589349a1c470612c6c41a6.jpg"></img>
          <h2>name</h2>
          <span>contact no</span>
          <h5>email</h5>
        </div>
        <div className="icon">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-twitter"></i>
          <br></br>
          <br></br>
          <span> Copyright @ Kit Kat Software technologies-coimbatore.</span>
        </div>
      </div>
    </>
  );
}

export { Footer };
function Join() {
  return (
    <>
      <Header />
      <div>
        <div className="banner">
          <Carousel>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
}
export { Join };
