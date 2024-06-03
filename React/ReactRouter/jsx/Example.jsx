import React from "react";
import { BrowserRouter, Route, Link, Switch, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Third from "./Third.jsx";
import Topics from "./Topics.jsx";
import PageNotFound from "./PageNotFound.jsx";

function BasicExample() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/third">Third</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          {/* exact代表要完全符合後面的網址才會顯示，如果不寫的話只有路徑有/就會顯示Home */}
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* 在react-router-dom v6以上好像可以拿掉了，也會正常顯示 */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="third" element={<Third />} />
          {/* 這裡面還有分頁所以要加/* */}
          <Route path="/topics/*" element={<Topics />} />
          {/* 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default BasicExample;
