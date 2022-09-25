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
          <div className="row justify-content-between">
            <div className="col-sm-6 col-md-4 col-lg-6 align-self-center">
              <div className="pdbox">
                <div className="text-center">
                  <img src="images/p5.png" />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-6 align-self-center">
              <div className="m-3">
                <h5 className="h1tagpd my-3">women's dress</h5>
                <div className="h1tagpd1">PRICE : $75</div>

                <div className="my-3">
                  <div className="h1tagpd1">Product Ratings</div>
                  <ul className="row m-0 p-0 pdull">
                    <li style={{ color: "#f7444e", padding: "0 5px" }}>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li style={{ color: "#f7444e", padding: "0 5px" }}>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li style={{ color: "#f7444e", padding: "0 5px" }}>
                      <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    </li>
                    <li style={{ color: "#f7444e", padding: "0 5px" }}>
                      <i class="fa fa-star-o" aria-hidden="true"></i>
                    </li>
                    <li style={{ color: "#f7444e", padding: "0 5px" }}>
                      <i class="fa fa-star-o" aria-hidden="true"></i>
                    </li>
                  </ul>
                </div>
                <div className="my-3">
                  <h6 className="h1tagpd1">Description : </h6>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                </div>
                <a className="buybtn my-3">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Productdetails;
