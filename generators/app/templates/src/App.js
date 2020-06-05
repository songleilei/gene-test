import React, { useState } from "react";
// import "./App.css";

const myPromise = (flag) => {
  if (flag) {
    return Promise.resolve(1);
  } else {
    return Promise.reject(2);
  }
};

const Button = () => {
  const [liked, setLiked] = useState("确认");
  const [inputValue, setInputValue] = useState("1223");

  myPromise(1)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));

  return (
    <>
      <button
        onClick={() => {
          setInputValue(1233333);
        }}
        // style={{ width: 300, height: 100 }}
        className="home"
      >
        {liked}
      </button>
      <input value={inputValue} />
    </>
  );
};

export default Button;
