import React from 'react';
import style from "../styles/Sidebar.module.css";
import { BsStarFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className={style.sidebar}>
        <h2>Filters</h2>
       <div className={style.brandFilter}>
        <h4>Brand</h4>
          <div className={style.brand}>
            <label><input type="checkbox"/> Samsung</label>
            <label><input type="checkbox"/> Oppo</label>
            <label><input type="checkbox"/> Infinix</label>
            <label><input type="checkbox"/> Huawei</label>
            <label><input type="checkbox"/> Apple</label>
          </div>
       </div>
       <div className={style.categoryFilter}>
        <h4>Category</h4>
        <div className={style.category}>
       <label><input type="checkbox"/> Laptops</label>
            <label><input type="checkbox"/> SmartPhone</label>
            <label><input type="checkbox"/> I-Pad</label>
            <label><input type="checkbox"/> Watch</label>
            </div>
       </div>
       <div className={style.ratingFilter}>
        <h4>Customer Ratings</h4>
        <div className={style.rating}>
            <label><input type="checkbox"/> 4 <BsStarFill className={style.ratingIcon}/> & above</label>
            <label><input type="checkbox"/> 3 <BsStarFill className={style.ratingIcon}/> & above</label>
            <label><input type="checkbox"/> 2 <BsStarFill className={style.ratingIcon}/> & above</label>
            <label><input type="checkbox"/> 1 <BsStarFill className={style.ratingIcon}/> & above</label>
        </div>
       </div>
       <div className={style.sortingPrice}>
        <h4>Sort By Price</h4>
        <select className={style.price}>
          <option value="">Select</option>
          <option value="">Low to High</option>
          <option value="">High to Low</option>
        </select>
       </div>
      </div>
    </>
  )
}

export default Sidebar
