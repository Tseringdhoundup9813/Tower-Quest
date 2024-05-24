import React, { Fragment, useState } from "react";
import boxImage from "../../public/images/boxs.png";

function Box({ item, activeBox }) {
  const [selectBox, setSelectBox] = useState();

  function SelectBoxHandler(id, item) {
    if (activeBox) {
      setSelectBox(id);
    }
  }

  return (
    <div
      onClick={() => SelectBoxHandler(item.id, item)}
      style={{
        backgroundImage: `url(${boxImage})`,
        visibility: `${
          item.active || item.id == selectBox ? "hidden" : "visible"
        }`,
      }}
      className={activeBox ? "highlightActive" : "highlightInActive"}
    >
      <img
        src={item.img}
        style={{
          opacity: `${selectBox == item.id || item.active ? "1" : "0"}`,
        }}
        className={
          selectBox == item.id || item.active ? "activeImage" : "inactiveImage"
        }
      />
    </div>
  );
}

export default Box;
