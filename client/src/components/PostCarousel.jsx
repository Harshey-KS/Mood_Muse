// components/PostCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import PostCard from './PostCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PostCarousel = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='relative'>
      <Slider {...settings}>
        {posts.map((post) => (
          <div key={post._id} className="p-2">
            <PostCard post={post} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PostCarousel;
