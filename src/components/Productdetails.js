import React from "react";

function Productdetails(props) {
  return (
    <>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Product Details</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="pdbox m-3">
                <img src="images/p5.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Productdetails;
