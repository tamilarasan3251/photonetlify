import "./compcss/fineart.css";
import img1 from "./babies/baby 1.jpg";
import img2 from "./babies/baby 2.jpg";
import img3 from "./babies/baby 3.jpg";
import img4 from "./babies/baby 4.jpg";
import img5 from "./babies/b4.jpg";
import img6 from "./babies/baby 6.jpg";
import img7 from "./babies/baby 7.jpg";
import img8 from "./babies/b3.png";
import img9 from "./babies/b1.jpg";
import img10 from "./babies/b2.jpg";
import img11 from "./babies/baby 5.jpg";
import img12 from "./babies/b5.jpeg";

import { Footer, Header } from "./link";
function Finearts() {
  return (
    <>
      <Header />
      <div className="baby">
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img4}></img>
        <img src={img5}></img>
        <img src={img6}></img>
        <img src={img7}></img>
        <img src={img8}></img>
        <img src={img9}></img>
        <img src={img10}></img>
        <img src={img11} />
        <img src={img12} />
      </div>
      <Footer />
    </>
  );
}
export { Finearts };
