import '@brainhubeu/react-carousel/lib/style.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const { default: Carousel, Dots }: any = dynamic(
    () => require('@brainhubeu/react-carousel'),
    { ssr: false },
);

const MyCarousel = () => (
    <Carousel>
        <Image src={"/images/complogos/ddslogo.png"} layout="fill" />
        <Image src={"/images/complogos/ddslogo.png"} layout="fill" />
        <Image src={"/images/complogos/ddslogo.png"} layout="fill" />
    </Carousel>
);

export default MyCarousel;