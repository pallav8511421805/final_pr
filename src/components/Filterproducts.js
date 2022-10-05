import React from "react";

function Filterproducts(props) {
  const data = props.location.state;
  console.log(data);
  return (
    // <>
    //   <div className="row">
    //     {data.map((d, i) => {
    //       return (
    //         <div className="col-sm-6 col-md-4 col-lg-4">
    //           <div className="box">
    //             <div class="option_container">
    //               <div class="options">
    //                 <a onClick={() => handleview(d.id)} class="option1">
    //                   View
    //                 </a>
    //                 <a
    //                   onClick={() => {
    //                     handleadd(d.id);
    //                   }}
    //                   className="option2"
    //                 >
    //                   + Add to cart
    //                 </a>
    //               </div>
    //             </div>
    //             <div className="img-box">
    //               <img src={d.pname} alt />
    //             </div>
    //             <div className="detail-box">
    //               <h5>{d.name}</h5>
    //               <h6>${d.price}</h6>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>
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
      </div>
    </>
  );
}

export default Filterproducts;
