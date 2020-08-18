import React, { Component } from 'react';

class UnsplashImage extends Component {
  render() {
    var { regular, small } = this.props.image.urls;
    const key = this.props.image.id;
    const alt = this.props.image.alt;
    return (
      <div>
        <a href={regular} data-lightbox={key}>
          <img src={small} alt={alt} />
        </a>
      </div>
    );
  }
}

export default UnsplashImage;
