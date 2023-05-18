import { Carousel } from '@mantine/carousel';
import React from 'react';

function MyCarousel({ imageUrls }) {
    return (
        <Carousel maw={"100%"} mx="auto" withIndicators height={"100%"}>
            {imageUrls.map((imageUrl, index) => (
                <Carousel.Slide key={index}>
                    <img src={imageUrl} />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
}

export default MyCarousel;