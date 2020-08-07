import React, { Component } from 'react';

class UnsplashImage extends Component {
  render() {
    const { regular, small } = this.props.image.urls;
    const key = this.props.key;
    const alt = this.props.image.alt;
    console.log( this.props.image.urls);
    return <a href={regular} data-lightbox={key}><img src={small} alt={alt}/></a> 
  }
}

export default UnsplashImage;