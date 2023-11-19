import ImageList from "./ImageList";
import "./ImageList.css";
// import smallImageList from "./SmallImageList";
function ImageDisplay() {
  return (
    <section className="image-container">
      <figure className="main-image-display">
        <img src="" alt="" />
      </figure>
      <div>
        <ul className="thumbnail-list">
          <li>
            <figure>
              <img src={ImageList.TNImageOne} alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src={ImageList.TNImageTwo} alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src={ImageList.TNImageThree} alt="" />
            </figure>
          </li>
          <li>
            <figure>
              <img src={ImageList.TNImageFour} alt="" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default ImageDisplay;
