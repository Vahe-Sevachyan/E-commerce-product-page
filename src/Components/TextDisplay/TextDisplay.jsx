import "./TextDisplay.css";
const TextDisplay = () => {
  return (
    <section className="text-display-container">
      <h3>SNEAKER COMPANY</h3>
      <h3>Fall Limited Edition Sneakers</h3>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <span>$125.00</span>
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
