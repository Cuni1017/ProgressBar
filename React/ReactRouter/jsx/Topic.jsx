import React from "react";
import { useParams } from "react-router-dom";

export default function Topic() {
  // 取得父的參數
  let { topicId } = useParams();
  console.log(topicId);
  return <h3>Requested topic ID: {topicId}</h3>;
}
