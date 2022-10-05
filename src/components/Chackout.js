import React from "react";

function Chackout(props) {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 cheack_box my-5">
            <div className="w-100">
              <div className="d-flex justify-content-center">
                <div className="my-2 check_icon">
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                </div>
              </div>
              <h1 className="text-center">
                <span>Thank you, </span> Your order is placed, vist again
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chackout;
