import imageList from "./ImageList";
import ImageList from "./ImageList";
import "./ImageList.css";
// import smallImageList from "./SmallImageList";
function ImageDisplay() {
  return (
    <section className="image-container">
      <div className="main-image-display">
        <img src={imageList.mainImage1} alt="" />
      </div>
      <div>
        <div className="thumbnail-list">
          <div>
            <img src={ImageList.TNImageOne} alt="" />
          </div>
          <div>
            <img src={ImageList.TNImageTwo} alt="" />
          </div>
          <div>
            <img src={ImageList.TNImageThree} alt="" />
          </div>
          <div>
            <img src={ImageList.TNImageFour} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ImageDisplay;
// {
//   /* <ul className="thumbnail-list">
//         <li>
//           <figure>
//             <img src={ImageList.TNImageOne} alt="" />
//           </figure>
//         </li>
//         <li>
//           <figure>
//             <img src={ImageList.TNImageTwo} alt="" />
//           </figure>
//         </li>
//         <li>
//           <figure>
//             <img src={ImageList.TNImageThree} alt="" />
//           </figure>
//         </li>
//         <li>
//           <figure>
//             <img src={ImageList.TNImageFour} alt="" />
//           </figure>
//         </li>
//       </ul> */
// }
