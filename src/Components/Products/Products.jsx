import Button from "react-bootstrap/Button";
import "./Products.css";
import { UserContext } from "../../App";
import { useContext } from "react";

const Products = ({ productsArr, handleCartElements }) => {
  const user = useContext(UserContext);

  const handleCart = (title, imageUrl, price, added) => {
    handleCartElements(title, imageUrl, price, added);

    if (added === false) {
      user.setCartCnt((prevCnt) => {
        return prevCnt + 1;
      });

      user.setTotalCost((prevCost) => {
        return prevCost + price;
      });
    }
  };

  return (
    <>
      <center style={{ marginTop: "4vh", fontSize: "2rem", margin: "auto" }}>
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
              <div>
                <div style={{ fontSize: "1rem", marginTop: "1.6rem" }}>
                  ${item.price}
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleCart(
                      item.title,
                      item.imageUrl,
                      item.price,
                      item.added
                    );
                  }}
                >
                  ADD TO CART
                </Button>{" "}
              </div>
            </>
          );
        })}
      </center>
    </>
  );
};

export default Products;
