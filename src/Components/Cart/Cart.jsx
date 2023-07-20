import ReactDOM from "react-dom";
import "./Cart.css";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import { useContext } from "react";

// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },
//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];

const Cart = ({ removeShowCart, cartElements }) => {
  const user = useContext(UserContext);

  const removeCartShow = () => {
    removeShowCart();
  };

  const handlePurchase = () => {
    if (user.cartCnt > 0) {
      alert("Your Purcahse is Successful !! Thanks for Purchase...");
      user.setCartElements([]);
      user.setTotalCost(0);
      user.setCartCnt(0);

      for (let i = 0; i < user.productsArr.length; i++) {
        user.productsArr[i].added = false;
      }
    } else {
      alert("Add items to Cart to Purchase..");
    }
  };

  const handleRemoveItem = (title, price) => {
    const updatedCart = cartElements.filter((item) => {
      return item.title !== title;
    });

    user.setCartElements(updatedCart);
    user.setTotalCost((prevCost) => prevCost - price);
    user.setCartCnt((prevCnt) => prevCnt - 1);

    for (let i = 0; i < user.productsArr.length; i++) {
      if (user.productsArr[i].title === title) {
        user.productsArr[i].added = false;
      }
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className="cart"
          style={{
            height: "90vh",
            width: "38vw",
            border: "2px solid red",
            overflow: "scroll",
          }}
        >
          <button
            onClick={removeCartShow}
            style={{ marginLeft: "90%", marginTop: "10px" }}
          >
            X
          </button>
          <center>
            <b style={{ fontSize: "2.4rem" }}>CART</b>
          </center>
          <div
            className="cartListTitle"
            style={{ marginTop: "20px", fontSize: "1.2rem" }}
          >
            <div>
              <b>ITEM</b>
            </div>
            <div>
              <b>PRICE</b>
            </div>
            <div>
              <b>QUANTITY</b>
            </div>
          </div>
          <hr />
          {cartElements.map((item) => {
            return (
              <>
                <div
                  className="cartListData"
                  style={{ marginTop: "20px", fontSize: "1.2rem" }}
                >
                  <div>
                    <img src={item.imageUrl} alt="" height="50px" />
                    <div style={{ width: "50px" }}>{item.title}</div>
                  </div>
                  <div>{item.price}$ </div>x
                  <span
                    style={{
                      border: "1px solid black",
                      maxHeight: "40px",
                      padding: "5px",
                    }}
                  >
                    {item.quantity}
                  </span>
                  <Button
                    style={{ maxHeight: "40px" }}
                    onClick={() => {
                      handleRemoveItem(item.title, item.price);
                    }}
                  >
                    Remove
                  </Button>
                </div>
                <hr />
              </>
            );
          })}

          <div>
            <b style={{ marginLeft: "70%", fontSize: "1.3rem" }}>Total </b>-- $
            {user.totalCost}
          </div>

          <center style={{ marginTop: "1.5rem" }}>
            <Button onClick={handlePurchase}>PURCHASE</Button>
          </center>
        </div>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Cart;
