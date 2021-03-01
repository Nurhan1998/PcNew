import React from "react";
import { Image } from "react-bootstrap";

const Info1 = () => {
  return (
    <div>
      <Image
        style={{
          height: "100%",
          position: "relative",
          width: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
        src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-page-background-desktop-block-01-en-15jun20?$native$"
        fluid
      />
    </div>
  );
};

export default Info1;
