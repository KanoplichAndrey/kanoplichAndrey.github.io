import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
// import s from './MultipleItems.module.css'


// import { getArrayBase2 } from '../../../servis/servis';

const arrowSize = '56px';

function SampleNextArrow ({ className, onClick }) {
  // const { className, onClick } = props;

  return (
        <div
            className={className}
            style={{ display: 'block', width: arrowSize, height: arrowSize }}
            onClick={onClick}
        />
  );
}

function SamplePrevArrow (props) {
  const { className, onClick } = props;
  return (
        <div
            className={className}
            style={{ display: 'block', width: arrowSize, height: arrowSize }}
            onClick={onClick}
        />
  );
}

export const MultipleItems = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  // const [array, setArray] = useState([]);
  // useEffect(() => {
  //   const servisArray = getArrayBase2();
  //   setArray(servisArray);
  // }, []);
  return (
            <div className={"mySlider"}>
            <Slider {...settings}>
      
            <Card />
            <Card />
            <Card />
            <Card />
                

            </Slider>
           </div>

  );
};
 