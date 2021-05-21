import Carousel from '@components/Carousel/Carousel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSliderIdx } from 'src/store/actions/sliderActions';
import styled from '@emotion/styled';

const Select = styled.select`
  padding: 10px;
  border-radius: 50px;
  border: 1px solid lightgrey;
  color: grey;
  outline: 0;
  margin: 20px;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

class HomeComponent extends Component {
  componentDidMount() {}
  componentDidUpdate() {}

  _onChange(value) {
    this.props.changeIdx(value);
  }

  render() {
    return (
      <>
        <Carousel
          images={this.props.images}
          onSlide={(val) => this._onChange(val)}
          selectedIdx={this.props.selectedIdx}
        />
        <Select
          onChange={(e) => this._onChange(parseInt(e.target.value))}
          value={this.props.selectedIdx}
        >
          {this.props.images.map((image, id) => (
            <option
              key={'option#' + id}
              value={id}
              // selected={this.selectedIdx != undefined && this.selectedIdx == id}
            >
              {id + '--' + image.filename}
            </option>
          ))}
        </Select>
        {/* {this.props.selectedIdx != undefined && <p>{this.props.selectedIdx + "--" + this.props.images[this.props.selectedIdx].filename}</p>} */}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  const { slider } = state;
  return { selectedIdx: slider.selectedIdx };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeIdx: (idx) => dispatch(changeSliderIdx(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
