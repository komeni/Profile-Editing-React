import { connect } from 'react-redux';

import SimpleSlider from '../components/slider';

const mapStateToProps = state => {
  return {
    profile : state.profile
  };
}

const Slider = connect(
  mapStateToProps
)(SimpleSlider);

export default Slider;
