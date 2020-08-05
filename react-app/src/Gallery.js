import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.css'
 
class Gallery extends Component {

  extractImages(unplashImages) {
      return unplashImages.map((unsplashImage) => {
        return {
          original: unsplashImage.urls.full,
          thumbnail: unsplashImage.urls.thumb
        }
      });
  }

  _onImageClick(event) {
    let unsplashImage = this.props.unplashImages[this._imageGallery.getCurrentIndex()]
    var win = window.open(unsplashImage.links.html, '_blank');
    win.focus();
    console.log(this.props.unplashImages[this._imageGallery.getCurrentIndex()]);
  }

  render() {
    return <ImageGallery 
      ref={i => this._imageGallery = i}
      onClick={this._onImageClick.bind(this)} 
      items={this.extractImages(this.props.unplashImages)} 
    />;
  }
}

export default Gallery;