import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  useEffect(() => {
    // [Example]: calling endpoint /lessons
    axios.get("http://localhost:3001/lessons").then((res) => {
      // console.log("res =", res);
    });
  }, []);

  return <div>Main component</div>;
};

export default Main;
