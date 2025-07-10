import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "1rem" }}>
      <h1>상품 목록📋</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Home;
