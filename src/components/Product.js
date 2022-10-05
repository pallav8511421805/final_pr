import React from "react";
import Displayproducts from "../Admin/components/Displayproducts";
function Products(props) {
  return (
    <>
      <div>
        <section className="inner_page_head">
          <div className="container_fuild">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <h3>Product Grid</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end inner page section */}
        {/* product section */}
        <section className="product_section layout_padding">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our <span>products</span>
              </h2>
            </div>
            <Displayproducts />
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;
