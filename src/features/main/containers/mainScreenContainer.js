import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { ImagePicker } from 'expo';

import { setImage } from 'raft/mainDuck';
import MainScreen from '../components/MainScreen';

class MainScreenContainer extends Component {
  pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      const uploadResponse = await this.uploadImageAsync(result.uri);
      const uploadResult = await uploadResponse.json();
      this.props.setImage(uploadResult.location);
    }
  };
  uploadImageAsync = async (uri) => {
    const apiUrl = 'https://api.graph.cool/file/v1/cj5g06rzlufw40122ynylkvry';
    const uriParts = uri.split('.');
    const fileType = uriParts[uriParts.length - 1];

    const formData = new FormData();
    formData.append('data', {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });

    const options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
    return fetch(apiUrl, options);
  }

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
