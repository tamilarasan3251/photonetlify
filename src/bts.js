import { Footer, Header } from "./link";
import "./compcss/bts.css";
import { useState } from "react";
import axios from "axios";

function Bts() {
  const url = "http://localhost:8080/api/create";
  const [data1, setdata1] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });
  const handler = (x, y) => {
    if (x === "name") {
      console.log(y);
      setdata1((data1) => ({
        ...data1,
        name: y,
      }));
    } else if (x === "contact") {
      console.log(y);
      setdata1((data1) => ({
        ...data1,
        contact: y,
      }));
    } else if (x === "email") {
      console.log(y);
      setdata1((data1) => ({
        ...data1,
        email: y,
      }));
    } else if (x === "address") {
      console.log(y);
      setdata1((data1) => ({
        ...data1,
        address: y,
      }));
    }
  };
  const Sumbit = () => {
    const item = {};
    item.name = data1.name;
    item.contact = data1.contact;
    item.email = data1.email;
    item.address = data1.address;
    console.log(item);
    axios
      .post(url, item)
      .then((res) => {
        setdata1((data1) => ({
          ...data1,
        }));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className="contact">
        <form>
          <lable className="lable">Name:</lable>
          <input
            type="text"
            placeholder="enter name"
            className="input"
            required
            onChange={(e) => handler("name", e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <lable className="lable">Contact No:</lable>
          <input
            type="text"
            placeholder="Enter number"
            className="input"
            required
            onChange={(e) => handler("contact", e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <lable className="lable">Email:</lable>
          <input
            type="text"
            placeholder="Enter e-mail"
            className="input"
            required
            onChange={(e) => handler("email", e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <lable className="lable">Address:</lable>
          <textarea
            type="text"
            placeholder="enter address"
            className="input"
            onChange={(e) => handler("address", e.target.value)}
          ></textarea>
          <br></br>
          <br></br>
          <button className="btn" onClick={() => Sumbit()}>
            Sumbit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
export { Bts };
