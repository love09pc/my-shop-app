import { useParams } from "react-router-dom";
import { useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import style from "./ProductDetail.module.css"

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  const { name, price, image } = product;

  return (
    <main style={{ maxWidth: 800, margin: "2rem auto", padding: "1rem" }}>
      <h1>{name}</h1>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", maxWidth: 400, borderRadius: 10 }}
      />
      <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1rem 0" }}>
        {price.toLocaleString()}원
      </p>
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1.1rem",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        장바구니에 담기
      </button>
    </main>
  );
}

export default ProductDetail;