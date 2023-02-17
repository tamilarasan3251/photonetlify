import "./compcss/nature.css";

import { Footer, Header } from "./link";
import img1 from "./nature/n1.jpg";
import img2 from "./nature/n2.jpg";
import img3 from "./nature/n3.jpg";
import img4 from "./nature/n4.webp";
import img5 from "./nature/n5.jpeg";
import img6 from "./nature/n6.jpg";
import img7 from "./nature/n7.jpeg";
import img8 from "./nature/n8.jpg";
import img9 from "./nature/n9.jpg";
import img10 from "./nature/n10.jpeg";
import img11 from "./nature/n11.jpg";
import img12 from "./nature/n12.jpg";
import img13 from "./nature/n13.jpeg";
import img14 from "./nature/n14.jpg";
import img15 from "./nature/n15.jpeg";

function Nature() {
  return (
    <>
      <Header />
      <div className="nature">
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
        <img src={img11}></img>
        <img src={img12}></img>
        <img src={img13}></img>
        <img src={img14}></img>
        <img src={img15}></img>
      </div>
      <Footer />
    </>
  );
}
export { Nature };
