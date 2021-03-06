import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Gifs extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.getGifyData();
  }

  componentDidMount() {
    setInterval(() => {
      this.props.getGifyData()
    }, 10000)
  }

  render() {
    const {gifyObj} = this.props;

    let gifUrl = []
    if (gifyObj) {
      gifUrl = gifyObj.url
    }

    return (
      <div className="gif">
        <img src={gifUrl} alt="random gif"/>
      </div>
    )
  }
}

Gifs.propTypes = {
  gifyObj: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Gifs;
