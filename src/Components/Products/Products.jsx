import Button from "react-bootstrap/Button";
import "./Products.css";

const Products = ({ productsArr }) => {
  return (
    <>
      <center style={{ marginTop: "4vh", fontSize: "2rem" }}>
        <b>PRODUCTS</b>
        {productsArr.map((item) => {
          return (
            <>
              <div
                style={{
                  marginTop: "2rem",
                  fontSize: "1.6rem",
                  marginBottom: "2rem",
                }}
              >
                <b>{item.title}</b>
              </div>
              <img src={item.imageUrl} alt="" />
              <div className="cart">
                <div style={{ fontSize: "1rem", marginTop: "1.6rem" }}>
                  ${item.price}
                </div>
                <Button variant="primary">ADD TO CART</Button>{" "}
              </div>
            </>
          );
        })}
      </center>
    </>
  );
};

export default Products;
