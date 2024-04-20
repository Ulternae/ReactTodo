// Puede que el lauaout no vaya en todas orita checo

import { imagesBackgrounds } from "../Global/images";

const image =
  imagesBackgrounds[parseInt(Math.random() * imagesBackgrounds.length)];

const LayoutPage = ({ opacity, children }) => {
  return (
    <>
      <div
        className="Layout_Image"
        style={{ backgroundImage: `url(${image})`, opacity: opacity }}
      ></div>
      <div className="Layout_Content">{children}</div>
    </>
  );
};

export { LayoutPage };
