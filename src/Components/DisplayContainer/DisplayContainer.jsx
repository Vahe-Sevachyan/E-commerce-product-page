import ImageDisplay from "../ImageDisplay/ImageDisplay";
import TextDisplay from "../TextDisplay/TextDisplay";
import "./DisplayContainer.css";
const DisplayContainer = () => {
  return (
    <div className="display-container">
      <ImageDisplay />
      <TextDisplay />
    </div>
  );
};

export default DisplayContainer;
