import React, { Component } from 'react';

import { WebView } from 'react-native-webview';

import PropTypes from 'prop-types';

export default class RepoStar extends Component {
  // para pegar as informações que estão dentro do this é necessário converter o navigationOptions para uma função.
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repo').name,
  });

  render() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repo').html_url;
    return <WebView source={{ uri: repository }} style={{ flex: 1 }} />;
  }
}

RepoStar.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
