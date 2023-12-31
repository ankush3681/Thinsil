import React, { useEffect, useState } from "react";
import style from "../styles/Product.module.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdFilterListAlt } from "react-icons/md";
import { CgSortAz } from "react-icons/cg";
import Sidebar from "../component/Sidebar";

const data = [
  {
    brand: "Apple",
    category: "smartphones",
    description:
      "An apple mobile which is nothing like apple ple mobile which is nothing like apple",
    discountPercentage: 12.96,
    id: 1,
    images: (5)[
      ("https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg")
    ],
    price: 549,
    rating: 4.69,
    stock: 94,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    title: "iPhone 9",
  },

  {
    brand: "Apple",
    category: "smartphones",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    discountPercentage: 17.94,
    id: 2,
    images: (4)[
      ("https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg")
    ],
    price: 899,
    rating: 4.44,
    stock: 34,
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    title: "iPhone X",
  },
  {
    brand: "Samsung",
    category: "smartphones",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    discountPercentage: 15.46,
    id: 3,
    images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    price: 1249,
    rating: 4.09,
    stock: 36,
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    title: "Samsung Universe 9",
  },
  {
    brand: "OPPO",
    category: "smartphones",
    description: "OPPO F19 is officially announced on April 2021.",
    discountPercentage: 17.91,
    id: 4,
    images: (5)[
      ("https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg")
    ],
    price: 280,
    rating: 4.3,
    stock: 123,
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    title: "OPPOF19",
  },
  {
    brand: "Huawei",
    category: "smartphones",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    discountPercentage: 10.58,
    id: 5,
    images: (3)[
      ("https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg")
    ],
    price: 499,
    rating: 4.09,
    stock: 32,
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    title: "Huawei P30",
  },
  {
    brand: "Apple",
    category: "laptops",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    discountPercentage: 11.02,
    id: 6,
    images: (4)[
      ("https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg")
    ],
    price: 1749,
    rating: 4.57,
    stock: 83,
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    title: "MacBook Pro",
  },
  {
    brand: "Samsung",
    category: "laptops",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    discountPercentage: 4.15,
    id: 7,
    images: (4)[
      ("https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/3.jpg",
      "https://i.dummyjson.com/data/products/7/thumbnail.jpg")
    ],
    price: 1499,
    rating: 4.25,
    stock: 50,
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    title: "Samsung Galaxy Book",
  },
  {
    brand: "Microsoft Surface",
    category: "laptops",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    discountPercentage: 10.23,
    id: 8,
    images: (5)[
      ("https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
      "https://i.dummyjson.com/data/products/8/4.jpg",
      "https://i.dummyjson.com/data/products/8/thumbnail.jpg")
    ],
    price: 1499,
    rating: 4.43,
    stock: 68,
    thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    title: "Microsoft Surface Laptop 4",
  },
  {
    brand: "Infinix",
    category: "laptops",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    discountPercentage: 11.83,
    id: 9,
    images: (5)[
      ("https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.png",
      "https://i.dummyjson.com/data/products/9/3.png",
      "https://i.dummyjson.com/data/products/9/4.jpg",
      "https://i.dummyjson.com/data/products/9/thumbnail.jpg")
    ],
    price: 1099,
    rating: 4.54,
    stock: 96,
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    title: "Infinix INBOOK",
  },
  {
    brand: "HP Pavilion",
    category: "laptops",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    discountPercentage: 6.18,
    id: 10,
    images: (4)[
      ("https://i.dummyjson.com/data/products/10/1.jpg",
      "https://i.dummyjson.com/data/products/10/2.jpg",
      "https://i.dummyjson.com/data/products/10/3.jpg",
      "https://i.dummyjson.com/data/products/10/thumbnail.jpeg")
    ],
    price: 1099,
    rating: 4.43,
    stock: 89,
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    title: "HP Pavilion 15-DK1056WM",
  },
];

const Product = () => {
  const [modalFilter , setModalFilter] = useState(false);
//   {
//   // const [data, setData] = useState([]);

//   // function getData() {
//   //   fetch("https://dummyjson.com/products")
//   //     .then((res) => res.json())
//   //     .then((res) => {
//   //       console.log(res.products);
//   //       // setData(res.Products);
//   //     })
//   //     .catch((err) => console.log(err));
//   // }

//   // useEffect(() => {
//   //   getData();
//   // }, []);
// }
const toggleSidebar = () =>{
       setModalFilter(!modalFilter);
       console.log("ankush")
}
  return (
    <>
    <div className={style.sidebarPopup}>
      <div onClick={toggleSidebar}><CgSortAz/>Sort</div>
      <div onClick={toggleSidebar}><MdFilterListAlt/>Filter</div>
    </div>
    <div className={style.container}>
      <div className={style.sidebar}><Sidebar/></div>
      <div className={style.products}>
        {data.length != 0 &&
          data.map((ele) => (
            <div className={style.productBox} key={ele.id}>
              <Link to={`/overview/${ele.id}`} className={style.overViewLink}>
              <img width={"100%"} src={ele.thumbnail} alt="image" />
              <h3>{ele.title}</h3>
              <p>{ele.brand}</p>
              <p>{ele.description}</p>
              <p>{ele.category}</p>
              <div>
                <span className={style.rating}>
                  {ele.rating} <AiFillStar color="white" /> 
                </span>
                 ({Math.floor(Math.random() * 45)})
              </div>
              <h4>
                <span className={style.discoutPrice}>
                  Rs.
                  {Math.floor(ele.price / (1 - ele.discountPercentage / 100))}
                </span>{" "}
                Rs. {ele.price}
              </h4>             
                <button className={style.button}>Add to Cart</button>
                </Link>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default Product;
