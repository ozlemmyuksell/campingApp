import React, { useState, useEffect } from "react";
import Card from "./CardUI";
import ReactList from "react-list";
import staticData from "../staticData";

export default function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(staticData.features);
  }, []);

  function renderItem(index, key) {
    const { source, title, content } = data[index];
    return (
      <div className="inline-block">
        <Card imgsrc={source} title={title} content={content} />
      </div>
    );
  }

  return (
    <div>
      <h1>Camping</h1>
      <div className="container-fluid">
        <ReactList itemRenderer={renderItem} length={data.length} />
      </div>
    </div>
  );
}
