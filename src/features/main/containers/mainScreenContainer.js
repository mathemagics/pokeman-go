import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';

import { uploadImageAsync } from 'services/uploadService';

import { setImage } from 'raft/mainDuck';
import MainScreen from '../components/MainScreen';


class MainScreenContainer extends Component {
  pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      const uploadResponse = await uploadImageAsync(result.uri);
      this.props.setImage(uploadResponse.data.url);
    }
  };


  render() {
    const { image } = this.props;
    return (
      <MainScreen image={image} takePhoto={this.pickImage} />
    );
  }
}

MainScreenContainer.defaultProps = {
  image: null,
};

MainScreenContainer.propTypes = {
  setImage: func.isRequired,
};

const mapStateToProps = state => ({ image: state.getIn(['main', 'image']) });

export default connect(mapStateToProps, { setImage })(MainScreenContainer);
