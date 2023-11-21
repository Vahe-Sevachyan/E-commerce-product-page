import "./TextDisplay.css";
const TextDisplay = () => {
  return (
    <section className="text-display-container">
      <p className="sneaker-header">SNEAKER COMPANY</p>
      <h3 className="limited-edition-title">Fall Limited Edition Sneakers</h3>
      <p className="shoe-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they will withstand everything
        the weather can offer.
      </p>
      <div className="price-container">
        <span className="price">$125.00</span>
        <span className="discount-percentage">50%</span>
      </div>
      <span>$250.00</span>
      <div>
        <button>-</button>
        <span>3</span>
        <button>+</button>
        <button>Add to cart</button>
      </div>
    </section>
  );
};

export default TextDisplay;
