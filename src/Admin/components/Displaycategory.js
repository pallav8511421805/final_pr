import React from "react";
import { useSelector } from "react-redux";

function Displaycategory(props) {
  const categorydata = useSelector((state) => state.categoryroot);
  return (
    <>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              <span>category</span>
            </h2>
          </div>

          <div className="row">{console.log(categorydata.category)}</div>
        </div>
      </section>
    </>
  );
}

export default Displaycategory;
