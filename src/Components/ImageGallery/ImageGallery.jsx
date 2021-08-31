/** @format */

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import Button from "../Button/Button";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import pixAPI from "../../Api/Api";

export default function ImageGallery({ pixabayName }) {
  const [pixabay, setPixabay] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("idle");
  const [name, setName] = useState("");

  useEffect(() => {
    if (!pixabayName) return false;
    setPixabay(null);
    setStatus("panding");
    setName(pixabayName);

    fnFetchPixabayAPI(pixabayName);

    return () => {
      setPixabay(null);
      setError(null);
      setPage(1);
      setStatus("idle");
      setName("");
    };
  }, [pixabayName]);

  const newPage = () => {
    setStatus("panding");
    fnFetchPixabayAPI(name, page);
  };

  const fnFetchPixabayAPI = (name, page = 1) => {
    pixAPI
      .fetchPixabay(name, page)
      .then((pixabays) => {
        if (page === 1) setPixabay([...pixabays.hits]);
        setStatus("resolved");
        setPage((page) => page + 1);
        return pixabays.hits;
      })
      .then((newImg) => {
        if (page > 1) setPixabay((pixabays) => [...pixabays, ...newImg]);
        setStatus("resolved");
        setPage((page) => page + 1);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  };

  if (status === "idle") {
    return <h2 className="title">Введите запрос для поиска изображений</h2>;
  }

  if (status === "rejected") {
    return <h2>{error.massage}</h2>;
  }

  if (status === "resolved") {
    return (
      <div className="conteinerImageGallery">
        <ul className="ImageGallery">
          {pixabay.map((img) => (
            <ImageGalleryItem
              key={img.id}
              previewURL={img.previewURL}
              largeImageURL={img.largeImageURL}
              name={img.tags}
            />
          ))}
        </ul>
        {pixabay.length && <Button newPage={newPage} />}
        {!pixabay.length && (
          <div>Нет изображений по данному запросу - {pixabayName}</div>
        )}
      </div>
    );
  }

  if (status === "panding") {
    return (
      <div className="conteinerLoding">
        <Loader
          type="Puff"
          color="#000000"
          height={100}
          width={100}
          timeout={2000}
        />
        <h2 className="titleLoding">Загружаем изображения...</h2>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  pixabay: PropTypes.array,
  loding: PropTypes.bool,
  error: PropTypes.string,
  page: PropTypes.number,
  status: PropTypes.string,
  name: PropTypes.string,
};
