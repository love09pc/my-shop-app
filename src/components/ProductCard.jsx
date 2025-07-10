import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";


function ProductCard({ product }) {
  const { id, name, price, image } = product;

  return (
    <Link to={`/product/${id}`} className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 style={{ marginTop: "0.5rem" }}>{name}</h3>
      <p style={{ color: "#555" }}>{price.toLocaleString()}원</p>
    </Link>
  );
}

export default ProductCard;
