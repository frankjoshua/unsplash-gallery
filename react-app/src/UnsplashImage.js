import React, { Component } from 'react';

class UnsplashImage extends Component {
  render() {
    var { regular, small } = this.props.image.urls;
    small = 'http://placekitten.com/200/200';
    const key = this.props.image.id;
    const alt = this.props.image.alt;
    return (
      <a href={regular} data-lightbox={key}>
        <img src={small} alt={alt} />
      </a>
    );
  }
}

export default UnsplashImage;
