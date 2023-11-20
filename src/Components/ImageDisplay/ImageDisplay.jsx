import ImageList from "./ImageList";
import "./ImageDisplay.css";
// import smallImageList from "./SmallImageList";
function ImageDisplay() {
  return (
    <section className="image-container">
      <div className="main-image-display">
        <img src={ImageList.mainImage1} alt="" />
      </div>
      <div>
        <div className="thumbnail-list">
          <img src={ImageList.TNImageOne} alt="sneaker" />

          <img src={ImageList.TNImageTwo} alt="sneaker" />

          <img src={ImageList.TNImageThree} alt="sneaker" />

          <img src={ImageList.TNImageFour} alt="sneaker" />
        </div>
      </div>
    </section>
  );
}
export default ImageDisplay;
