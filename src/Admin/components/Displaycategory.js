import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getdata } from "../../redux/actions/category.action";

function Displaycategory(props) {
  const dispatch = useDispatch();
  const categorydata = useSelector((state) => state.categoryroot);
  const data = categorydata.category;
  const history = useHistory();
  const handlefilterdata = (id) => {
    console.log(id);
    history.push("/filter");
  };
  useEffect(() => {
    dispatch(getdata());
  }, []);
  return (
    <>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              <span>category</span>
            </h2>
          </div>

          <div className="row">
            {data.map((d, i) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="w-100" onClick={() => handlefilterdata(d.id)}>
                    <div className="box">
                      <div className="img-box">
                        <img src={d.cname} alt />
                      </div>
                      <div className="detail-box justify-content-center">
                        <h5>{d.name}</h5>
                      </div>
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

export default Displaycategory;
