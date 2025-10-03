import { useEffect, useState } from "react";
import "../../Style/AddToCard.css";
import axios from "axios";

const AddToCard = () => {
  const [card, setcard] = useState([]);
  console.log("🚀 ~ AddToCard ~ card:", card);
  const totalPrice = card.reduce((acc, item) => acc + item.price, 0);
  console.log("🚀 ~ AddToCard ~ totalPrice:", totalPrice);
  const deleteData = (productid) => {
    console.log("🚀 ~ deleteData ~ productid:", productid);
    axios
      .delete(`http://localhost:8080/addtocart/delete/${productid}`, {
        withCredentials: true,
      })
      .then((res) => (alert("Delete Data Success"), addTOCard()))
      .catch((errr) => console.error(errr));
  };

  const addTOCard = () => {
    axios
      .get(`http://localhost:8080/addtocart/get`, {
        withCredentials: true,
      })
      .then((res) => setcard(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    addTOCard();
    deleteData();
  }, []);
  return (
    <div>
      <div className="cart-page">
        <header className="header">
          <div className="logo">
            <img
              src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
              alt="Lenskart Logo"
            />
          </div>
          <div className="secure">
            <span>100% safe and secure</span>
          </div>
        </header>
        <div className="cart-header my-2">
          <span className="cart-title">Cart ({card.length} item)</span>
        </div>
        <div className="CardBothSide">
          <div className="CardMap">
            {card.map((obj) => {
              console.log(obj);
              return (
                <div key={obj.id}>
                  <div className="content">
                    <div className="cart-section">
                      <div className="cart-item">
                        <img
                          src={obj.imageUrl}
                          alt="Blue Block Screen Glasses"
                        />
                        <div className="item-details">
                          <span className="item-title">
                            {obj.brand}: {obj.sizeCollection} <br />{" "}
                            {obj.reviews} , {obj.rating}
                          </span>
                          <span className="item-price">₹{obj.price}</span>
                          <span className="final-price">
                            Final Price ₹{obj.price}
                          </span>
                          <div className="item-actions cursor-pointer">
                            <a onClick={() => deleteData(obj?._id)}>Remove |</a>
                            <a href="#">Repeat</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cardBillSide">
            <div className="bill-details">
              <div className="bill-header">
                <span>Bill Details</span>
              </div>
              <div className="bill-item">
                <span>Total item price</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="bill-item">
                <span>Total discount</span>
                <span>-₹{(totalPrice * 25) / 100}</span>
              </div>
              <div className="bill-total">
                <span>Total payable</span>
                <span>₹{totalPrice - (totalPrice * 25) / 100}</span>
              </div>
              <div className="discount-code">
                <span>LKFLASH applied</span>
                <span>You are saving ₹{(totalPrice * 25) / 100}</span>
                <a href="#">REMOVE</a>
              </div>
              <button className="checkout-btn">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
