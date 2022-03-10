import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import test from '../../static/images/offers/offer1.jpg';
import { useSelector } from "react-redux";

import './Carousel.css';

const CarouselContainer = () => {
  const bannerData = useSelector((data) => data.CarouselItems.items);
  return (
    <div className='carousel-container'>
      <Carousel showStatus={false} infiniteLoop={true}>
        {bannerData.map(({ bannerImageUrl, id, bannerImageAlt }) => {
          // const imgURL = React.lazy(() => import(`../../${bannerImageUrl}`));
          // console.log(imgURL);
          let imgURL = `../../${bannerImageUrl}`;
          imgURL = imgURL.replace(/([^:]\/)\/+/g, "$1");
          //console.log(`${imgURL}`);
          return (
            <img
              // src={require( `${imgURL}` )}
              src={test}
              key={id}
              alt={bannerImageAlt} />
          )
        })}

      </Carousel>
    </div>
  )
};

export default React.memo(CarouselContainer);