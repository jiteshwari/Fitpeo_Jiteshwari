import React from "react";
import Card from "./UI/Card";
import "./Product.css";
import { AiOutlineSearch } from "react-icons/ai";

const Products = () => {
  return (
    <div>
    <div className=" prod-text">       
        <div className="expenses-filter__control">
          <div>
            <label>Product Sell</label>
          </div>
          <div>
          <lable>
              <AiOutlineSearch  /> <input   className='search' placeholder="Search" style={{ border: "none"}}   />
            </lable>
            <select className="profit-details" style={{ border: "none" }}>
              <option value="2022">Last 30 days</option>
            </select>
          </div>          
      </div>
    </div>


    <div className="ProdL-card">
        <div class="table-container">

    <table class="custom-table">
    <tr className="profit-details">
      <th style={{width: '70%'}}>Product</th>
      <th>Stock</th>
      <th>Price</th>
      <th>Total sales</th>
    </tr>
    {/* <tr>
      <td> 
      <p> <img src="https://wallpapercave.com/wp/27gbdql.jpg" alt="Demo Image" width="70" height="50"style={{borderRadius:'10px'}}/>
        <b> Abstract 3D </b>
       <span>This is a demo paragraph with a small image</span></p> 
        </td>
      <td>32 in Stock</td>
      <td>$ 45.99</td>
      <td>20</td>
    </tr> */}

<tr>
  <td>
    <div className="row">
    <div className="col-lg-2  col-sm-12">
      <img src="https://wallpapercave.com/wp/27gbdql.jpg" alt="Demo Image" width="70" height="50" style={{ borderRadius: '10px', marginRight: '10px' }} />
     
     </div>
      <div className="col-lg-10  col-sm-12 p-6"> <b> Abstract 3D </b><br />
       <p className="profit-details2"> lorem ipsum dolor sit amet, consectetur adipiscing alit </p>
      </div>
      </div>
  </td>
  <td className="profit-details2">32 in Stock</td>
  <td>$ 45.99</td>
  <td className="profit-details2">20</td>
</tr>
 

<tr>
  <td>
    <div className="row">
    <div className="col-lg-2 col-sm-12">
      <img src="https://wallpapercave.com/wp/27gbdql.jpg" alt="Demo Image" width="70" height="50" style={{ borderRadius: '10px', marginRight: '10px' }} />
     
     </div>
      <div className="col-lg-10 col-sm-12 p-6"> <b> Sarphens IIIustration </b><br />
       <p className="profit-details2"> lorem ipsum dolor sit amet, consectetur adipiscing alit </p>
      </div>
      </div>
  </td>
  <td className="profit-details2">32 in Stock</td>
  <td>$ 45.99</td>
  <td className="profit-details2">20</td>
</tr>
 
  </table>
  </div>


    </div>
    </div>
  );
};

export default Products;
