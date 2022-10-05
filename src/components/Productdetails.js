import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setalertaction } from "../redux/actions/alert.action";
import { addcartaction, buycartaction } from "../redux/actions/cart.action";
import { getproduct_data } from "../redux/actions/product.actions";
function Productdetails(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productroot);
  const data = product.productdata;
  const handleadd = (id) => {
    const values = {
      id: id,
      qty: 1,
    };
    dispatch(addcartaction(values));
    dispatch(
      setalertaction({ text: "Product in add to cart.", color: "info" })
    );
  };
  const handlebuy = (id) => {
    const values = {
      id: id,
      qty: 1,
    };
    dispatch(buycartaction(values));
    dispatch(setalertaction({ text: "you buy this product.", color: "info" }));
  };
  useEffect(() => {
    dispatch(getproduct_data());
  }, []);
  let id = props.location.state;
  const fdata = data.filter((d) => d.id === id.id);
  return (
    <>
      {fdata.map((d) => {
        return (
          <>
            <section className="inner_page_head">
              <div className="container_fuild">
                <div className="row">
                  <div className="col-md-12">
                    <div className="full">
                      <h3>{d.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
      <section className="my-5">
        <div className="container">
          <div className="row justify-content-between">
            {fdata.map((d) => {
              return (
                <>
                  <div className="col-sm-6 col-md-4 col-lg-6 align-self-center">
                    <div className="pdbox">
                      <div className="text-center">
                        <img src={d.pname} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-6 align-self-center">
                    <div className="m-3">
                      <div className="h1tagpd1">{`PRICE : $${d.price}`}</div>
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
                        <div>{d.description}</div>
                      </div>
                      <div className="row">
                        <a
                          className="buybtn my-3 mx-1"
                          onClick={() => {
                            handlebuy(d.id);
                          }}
                        >
                          Buy Now
                        </a>
                        <a
                          onClick={() => {
                            handleadd(d.id);
                          }}
                          className="buybtn my-3 mx-1"
                        >
                          + Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Productdetails;
