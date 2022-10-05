import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getproduct_data } from "../redux/actions/product.actions";
import { setalertaction } from "../redux/actions/alert.action";
import { addcartaction } from "../redux/actions/cart.action";

function Filterproducts(props) {
  const data = props.location.state;
  const history = useHistory();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productroot);
  const pdata = product.productdata;
  useEffect(() => {
    dispatch(getproduct_data());
  }, []);
  let fdata = [];
  pdata.map((d) => {
    if (d.cselect === data.id) {
      fdata.push(d);
    }
  });

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

  const handleview = (id) => {
    history.push("/productdetail", { id: id });
  };
  return (
    <>
      <div>
        <section className="inner_page_head">
          <div className="container_fuild">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <h3>{data.name}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="row">
            {fdata.map((d, i) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="box">
                    <div class="option_container">
                      <div class="options">
                        <a onClick={() => handleview(d.id)} class="option1">
                          View
                        </a>
                        <a
                          onClick={() => {
                            handleadd(d.id);
                          }}
                          className="option2"
                        >
                          + Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="img-box">
                      <img src={d.pname} alt />
                    </div>
                    <div className="detail-box">
                      <h5>{d.name}</h5>
                      <h6>${d.price}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Filterproducts;
