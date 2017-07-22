import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { Screen } from './styles';

const SecondaryScreenComponent = props => (
  <Screen>
    <Text>{props.message}</Text>
  </Screen>
);

SecondaryScreenComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SecondaryScreenComponent;
