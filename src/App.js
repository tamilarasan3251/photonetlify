import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Commerical } from "./commerical";
import { Home } from "./home";
import { Finearts } from "./finearts";
import { Bts } from "./bts";
import { Join } from "./link";
import { Nature } from "./nature";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Join />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/commerical" element={<Commerical />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/finearts" element={<Finearts />} />
          <Route path="/bts" element={<Bts />} />
        </Routes>
      </BrowserRouter>
      <Connect />
    </>
  );
}
export { App };

function Connect() {
  const [data, setdata] = useState([]);

  // const Getdata = async () => {
  const url = "http://localhost:8080/api/get";
  // setdata(response.data);

  //   fetch("http://localhost:8080/get")
  //     .then((res) => res.json())
  //     .then((res) => setdata(res));
  // };

  // useEffect(() => {
  //   Getdata();
  // }, []);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {data.map((val) => {
        return (
          <div>
            <h1>{val.name}</h1>
            <h1>{val.email}</h1>
          </div>
        );
      })}
    </>
  );
}
export { Connect };
