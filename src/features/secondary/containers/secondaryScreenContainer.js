import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';

import { secondMount } from 'raft/secondDuck';

import SecondaryScreen from '../components/SecondaryScreen';

class SecondaryScreenContainer extends Component {
  componentWillMount() {
    this.props.secondMount();
  }
  render() {
    return (
      <SecondaryScreen message={this.props.message} />
    );
  }
}

SecondaryScreenContainer.propTypes = {
  message: string.isRequired,
  secondMount: func.isRequired,
};

const mapStateToProps = state => ({ message: state.getIn(['secondary', 'message']) });

export default connect(mapStateToProps, { secondMount })(SecondaryScreenContainer);
