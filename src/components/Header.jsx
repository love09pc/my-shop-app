import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Header.module.css";

function Header() {
  const { cartItems } = useContext(CartContext);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>인터넷 쇼핑</h1>
      <nav className={styles.nav}>
        <Link to="/">🏠 홈</Link>
        <Link to="/cart">
          📦 장바구니 ({cartCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
