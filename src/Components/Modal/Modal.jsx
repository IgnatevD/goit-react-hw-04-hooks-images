/** @format */

import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");
export default function Modal({ onClose, largeImageURL, name }) {
  useEffect(() => {
    window.addEventListener("keydown", closeModalFn);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", closeModalFn);
      body.style.overflow = "auto";
    };
  });

  const closeModalFn = (e) => {
    if (e.code === "Escape") onClose();
  };
  const closeModalBd = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div className="Overlay" onClick={closeModalBd}>
      <div className="Modal">
        <img src={largeImageURL} alt={name} />
      </div>
    </div>,
    modalRoot
  );
}
