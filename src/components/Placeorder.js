import React from "react";

function Placeorder(props) {
  const orderdata = props.location.state;
  console.log(orderdata.cart);
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 ">
            <div className="w-100 my-3">
              <h1 className="placeorderdata">Add your data</h1>
              <form>
                <input name="name" placeholder="Please enter your name" />
                <input name="name" placeholder="Please enter your name" />
                <input name="name" placeholder="Please enter your name" />
                <input name="name" placeholder="Please enter your name" />
                <button type="submit" className="placeorder1">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Placeorder;
