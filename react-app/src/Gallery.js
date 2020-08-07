import React, { Component } from 'react';
import './Gallery.css';
import UnsplashImage from './UnsplashImage';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
if(!SERVER_URL){
  throw new Error("REACT_APP_SERVER_URL must be set in .env");
}

class Gallery extends Component {
  state = {
    images: [],
    count: 20,
    start: 1,
  };

  componentDidMount() {
    const { count, start } = this.state;
    axios
      .get(`${SERVER_URL}/photos/?count=${count}&start=${start}`)
      .then((res) => this.setState({ images: res.data }));
  }

  fetchImages = () => {
    const { count } = this.state;
    this.setState({ start: this.state.start + 1 });
    axios
      .get(
        `http://localhost:3001/photos/?count=${count}&start=${this.state.start}`
      )
      .then((res) =>
        this.setState({ images: this.state.images.concat(res.data) })
      );
  };

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.images.length}
        next={this.fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="gallery">
          {this.state.images.map((image) => (
            <UnsplashImage image={image} key={image.id} />
          ))}
        </div>
      </InfiniteScroll>
    );
  }
}

export default Gallery;
