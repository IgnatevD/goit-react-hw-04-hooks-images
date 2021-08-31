/** @format */

import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../Modal/Modal";

export default function ImageGalleryItem({ previewURL, name, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => (showModal = !showModal));
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={previewURL}
        alt={name}
        className="ImageGalleryItem-image"
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal} largeImageURL={largeImageURL} alt={name} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  showModal: PropTypes.bool,
};
