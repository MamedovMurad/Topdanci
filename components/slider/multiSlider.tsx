import React from 'react';
import styles from './index.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
interface MultiSliderProps {
    photos: any[]
}

const MultiSlider: React.FC<MultiSliderProps> = ({ photos }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.4,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {
                photos.map((item:any, index:number)=>(
                    <div key={index} className={styles.multislider}>
                    <Image src={item.src}
                        alt="Picture of the author"
                        fill />
                </div>
                ))
            }
         
    
        </Slider>
    );
};

export default MultiSlider;