import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [str, setStr] = useState("");

  const images = [
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://plus.unsplash.com/premium_photo-1676648196796-8dabd4e80d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  ];
  let string = "";
  const reqString = "0val1val4val7val";
  const select = (e) => {
    e.target.className = "full-length selected";
    console.log(e.currentTarget.className);
    string = string + e.currentTarget.className;
    //setStr((prevStr) => prevStr + e.currentTarget.className);
    console.log(string);
    if (string == reqString) alert("Authentication successful");
  };

  return (
    <>
      {/* <div>
        {images.forEach((el, i) => {
          return (
            <div key={i + 1}>
              <img src={el} alt="" />
            </div>
          );
        })}
      </div> */}

      <div className="grid-3 ">
        {images.map((el, i) => (
          <div key={"val" + i} className={i + "val"} onClick={(e) => select(e)}>
            <img
              src={el}
              key={"val" + i}
              className="full-length unselected"
              color="black"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
