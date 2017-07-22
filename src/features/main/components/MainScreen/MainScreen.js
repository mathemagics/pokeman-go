import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { Screen } from './styles';

const MainComponent = props => (
  <Screen>
    <Text>{props.message}</Text>
  </Screen>
);

MainComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MainComponent;
