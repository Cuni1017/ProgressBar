import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Routes,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import Topic from "./Topic.jsx";

function Topics() {
  // 跳轉網址
  let navigate = useNavigate();
  // 取得網址 http://127.0.0.1:5500/topics?search123#hash456
  //   let location = useLocation();
  //   console.log(location);
  // 取得參數
  let params = useParams();
  console.log(params);
  //   console.log(match);
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to="rendering">Rendering</Link>
        </li>
        <li>
          <Link to="components">Components</Link>
        </li>
        <li>
          <Link to="props-v-state">Props v. State</Link>
        </li>
      </ul>
      <button onClick={() => navigate("/about")}>About</button>

      <Routes>
        {/* 此處會將topicId傳入Topic裡當作他的props */}
        <Route path=":topicId" element={<Topic />} />
        <Route path="*" element={<h3>Please select a topic.</h3>} />
      </Routes>
    </div>
  );
}

export default Topics;
