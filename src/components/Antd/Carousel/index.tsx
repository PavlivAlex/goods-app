import React from 'react';

// helpers
import styled from 'styled-components';

// components
import { Carousel as AntdCarousel } from 'antd';

interface CarouselProps {
  content: any;
}

const Carousel = ({ content }: CarouselProps) => {
  return (
    <StyledCarousel autoplay>
      {content?.map((item: any) => (
        <img key={item} src={item} alt='photo' />
      ))}
    </StyledCarousel>
  );
};

const StyledCarousel = styled(AntdCarousel)`
  background: #f7f7f7;
  margin-top: 30px;
  height: 500px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  .slick-dots {
    li {
      button {
        background: black;
      }
    }
  }
`;

export default Carousel;
