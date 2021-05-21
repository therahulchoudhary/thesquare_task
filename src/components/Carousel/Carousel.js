import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@material-ui/core/Card';
import httpsWithQuality from '../../utils/httpsWithQuality';

const Div = styled.div`
  padding: 0px 10px;
`;
const Div70 = styled.div`
  width: 70%;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Text = styled.div`
  padding: 20px 10px;
`;

export default class Carousel extends Component {
  state = {
    show: false,
  };
  sliderRef = undefined;
  componentDidUpdate(prevProps) {
    if (prevProps.selectedIdx != this.props.selectedIdx) {
      this.sliderRef.slickGoTo(this.props.selectedIdx);
    }
  }
  render() {
    const settings = {
      dots: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
      useCSS: true,
      afterChange: (num) => this.props.onSlide(num),
      centerMode: false,
    };
    return (
      <>
        <Div70>
          <Slider
            {...settings}
            className="relative"
            ref={(e) => (this.sliderRef = e)}
            onClick={this.handleSlide}
          >
            {this.props.images.map((image, id) => (
              <Div key={'slide#' + id}>
                <Card
                  style={{
                    border: this.props.selectedIdx == id ? '1px solid red' : 0,
                  }}
                >
                  <img
                    src={httpsWithQuality(image.image_url, 450)}
                    alt={image.filename}
                    className="img-responsive"
                    style={{ width: '100%' }}
                  />
                  <Text>
                    {id + '--'}
                    {image.filename}
                  </Text>
                </Card>
              </Div>
            ))}
          </Slider>
        </Div70>
      </>
    );
  }
}
