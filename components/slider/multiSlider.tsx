import React, { useState } from 'react';
import styles from './index.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import useModal from '../../hooks/useModal';
import Modal from '../modal';
interface MultiSliderProps {
    photos: any[]
}

const MultiSlider: React.FC<MultiSliderProps> = ({ photos }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: photos.length > 2 ? 1.2 : 1,
        slidesToScroll: 1
    };
    const { isOpen, openModal, closeModal } = useModal();

    const [index, setindex] = useState(0)
    function handleModal(index: number) {
        openModal();
        setindex(index)
    }
    return (
        <>
            {(isOpen) && (
                <Modal closeModal={closeModal} pathes={photos} index={index} />
            )}

            <Slider {...settings} arrows={false} className={styles.SliderMultiParent}>
                {
                    photos.map((item: any, index: number) => (
                        <div key={index} className={styles.multislider}>
                            <Image src={item.src}
                                onClick={() => handleModal(index)}
                                alt="Picture of the author"
                                className={styles.multiImage} width={274} height={200} />
                        </div>
                    ))
                }


            </Slider>
        </>
    );
};

export default MultiSlider;