import React from "react";

function Filterproducts(props) {
  const data = props.location.state;
  return <div>{data.id}</div>;
}

export default Filterproducts;
