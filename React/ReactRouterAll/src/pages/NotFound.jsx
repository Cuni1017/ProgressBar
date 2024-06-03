import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  // console.log(navigate);
  useEffect(() => {
    console.log("5秒後回首頁");
    const BackTimeout = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(BackTimeout);
    };
  }, []);

  return <h1>404 NotFound</h1>;
};

export default NotFound;
