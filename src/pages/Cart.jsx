import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
  const { cartItems, removeFromCart, increase, decrease } = useContext(CartContext);

  const handlePurchase = () => {
    if (cartItems.length === 0) {
      alert("장바구니가 비어있습니다.");
      return;
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`구매가 완료되었습니다!\n총 결제 금액: ${total.toLocaleString()}원`);
    window.location.reload();
  };

  return (
    <div className={styles.cart}>
      <h2> 📦 장바구니</h2>
      {cartItems.length === 0 ? (
        <>
          <p className={styles.empty}>장바구니가 비어있습니다.</p>
        </>
      ) : (
        <>
          <ul className={styles.itemList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <span className={styles.name}>{item.name}</span> - {item.price}원 × {item.quantity}
                <div className={styles.buttons}>
                  <button onClick={() => increase(item.id)}>+</button>
                  <button className={styles.decreaseBtn} onClick={() => decrease(item.id)}>
                    -
                  </button>
                  <button className={styles.deleteBtn} onClick={() => removeFromCart(item.id)}>
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className={styles.total}>
            총 합계:{" "}
            {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}원
          </p>
          <>
            <button onClick={handlePurchase}>구매하기</button>
            <div style={{ marginTop: "1rem" }}>
              <Link to="/">🏠 홈으로 돌아가기</Link>
            </div>
          </>
        </>
      )}
    </div>
  );
}

export default Cart;
