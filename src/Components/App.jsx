import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";

class App extends Component {
  state = {
    pixabayName: "",
  };

  getFormSubmit = (searcNameForm) => {
    this.setState({ pixabayName: searcNameForm });
  };

  render() {
    const { pixabayName } = this.state;
    return (
      <>
        <Searchbar onGetSubmit={this.getFormSubmit} />
        <ImageGallery pixabayName={pixabayName} />
        <ToastContainer />
      </>
    );
  }
}

App.propTypes = {
  pixabayName: PropTypes.string,
};

export default App;
