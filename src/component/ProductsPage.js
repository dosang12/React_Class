import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";

import "./MainPage.css";

const ProductsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let url = `https://d61fb4ea-8d46-4be4-b5aa-c8563d8f140b.mock.pstmn.io/products/${id}`;
    axios
      .get(url)
      .then((result) => {
        setProduct(result.data);
      })
      .catch((error) => {
        error.log(error);
      });
  }, []);
  if (product == null) {
    return <h1>상품정보를 받고 있습니다..</h1>;
  }
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        뒤로
      </button>
      <div id="image-box">
        <img src={`/${product.imageUrl}`} alt={product.name} />
      </div>
      <div id="profile-box">
        <img src="/images/images/icons/avatar.png" alt={product.seller} />
        <span className="product-seller">{product.seller}</span>
      </div>
      <div className="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createAt">2023.03.10</div>
        <div id="description">{product.desc}</div>
      </div>
    </div>
  );
};

export default ProductsPage;
