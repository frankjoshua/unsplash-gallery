import React, { Component } from 'react';
import './Gallery.css';
import UnsplashImage from './UnsplashImage';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
 
class Gallery extends Component {
  state = {
    images: [],
    count: 5,
    start: 1
  };

  componentDidMount() {
    const { count, start } = this.state;
    axios
      .get(`http://localhost:3001/photos/?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  }

  fetchImages = () => {
    const { count, start } = this.state;
    this.setState({start: this.state.start + count})
    axios
      .get(`http://localhost:3001/photos/?count=${count}&start=${start}`)
      .then(res => this.setState({ images: this.state.images.concat(res.data) }));
  }

  extractImages(unplashImages) {
      return unplashImages.map((unsplashImage) => {
        return {
          key: unsplashImage.id,
          original: unsplashImage.urls.full,
          thumbnail: unsplashImage.urls.small,
          alt: unsplashImage.alt_description
        }
      });
  }

  // createImageDivs(){
  //   return <div className="gallery">
      
  //     {this.extractImages(this.props.unplashImages).map((image) => {
  //         return <UnsplashImage image={image} key={image.key}/> 
  //       })};
      
  //   </div>
    
  // }

  render() {
    return <div className="gallery">
      <InfiniteScroll
        dataLength={this.state.images.length}
        next={this.fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {this.state.images.map(image => (
          <UnsplashImage image={image} key={image.key}/>
        ))}
      </InfiniteScroll>
      
      </div>
  }
}

export default Gallery;