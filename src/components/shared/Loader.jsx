
import Lottie from "lottie-react"; // Correct default import

import loadingAnimation from "../../../public/animation/ani.json";
// const loadingAnimation = '/spoon.json'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie
        animationData={loadingAnimation}
        style={{ height: "100px", width: "100px" }} // Adjust size as needed
      />
    </div>
  );
};

export default Loader;
