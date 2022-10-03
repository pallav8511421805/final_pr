import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../../redux/actions/category.action";

function Displaycategory(props) {
  const dispatch = useDispatch();
  const categorydata = useSelector((state) => state.categoryroot);
  const data = categorydata.category;
  useEffect(() => {
    dispatch(getdata());
  }, []);

  const handlecat = () => {
    alert("hiiii");
  };
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
                <div className="box m-2" onClick={() => handlecat()}>
                  <div className="img-box">
                    <img src={d.cname} alt />
                  </div>
                  <div className="detail-box">
                    <h5>{d.name}</h5>
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
