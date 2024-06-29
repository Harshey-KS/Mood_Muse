

// components/VideoCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const videos = [
    {
      key: "1",
      src: "https://www.youtube.com/embed/tqhxMUm7XXU?si=2GzCrPzBAUXOdlab",
    },
    {
      key: "2",
      src: "https://www.youtube.com/embed/vj0JDwQLof4?si=NzjSvD6QYJDOj3QM",
    },
    {
      key: "3",
      src: "https://www.youtube.com/embed/O-6f5wQXSu8?si=JYycJCfwifbXjSlB",
    },
    {
      key: "4",
      src: "https://www.youtube.com/embed/5zvnFM2BXqY?si=eCqdAubVkuVp0Exz",
    },
    {
      key: "5",
      src: "https://www.youtube.com/embed/9FBIaqr7TjQ?si=FX9AT_kaFF-hS6WA",
    }
  ];

  return (
    <div className='relative'>
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.key} className="p-2">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                src={video.src}
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
