import React from 'react';
import { Button, Image, View } from 'react-native';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Take Photo"
          onPress={this.props.takePhoto}
        />
        {this.props.image &&
          <Image source={{ uri: this.props.image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }
}
