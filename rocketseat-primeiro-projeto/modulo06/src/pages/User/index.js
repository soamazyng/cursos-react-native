import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { ActivityIndicator } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  StarButton,
  StarButtonText,
} from './styles';

export default class User extends Component {
  // para pegar as informações que estão dentro do this é necessário converter o navigationOptions para uma função.
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
    loading: false,
    page: 1,
    refreshing: false,
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    this.setState({ loading: true });

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({
      stars: response.data,
      loading: false,
    });
  }

  loadMore = async () => {
    const { navigation } = this.props;

    const { page, stars } = this.state;

    const user = navigation.getParam('user');

    const nextPage = page + 1;

    const response = await api.get(
      `/users/${user.login}/starred?page=${nextPage}`
    );

    console.tron.debug(response.data);

    this.setState({
      stars: [...stars, ...response.data],
      page: nextPage,
    });
  };

  refreshList = async () => {
    const { navigation } = this.props;

    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    console.tron.debug(response.data);

    this.setState({
      stars: response.data,
      page: 1,
    });
  };

  handleNavigate = repo => {
    const { navigation } = this.props;

    console.tron.debug(repo);

    navigation.navigate('RepoStar', { repo });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing } = this.state;
    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <ActivityIndicator color="red" />
        ) : (
          <Stars
            data={stars}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            onRefresh={this.refreshList}
            refreshing={refreshing}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
                <StarButton onPress={() => this.handleNavigate(item)}>
                  <StarButtonText>Visualizar</StarButtonText>
                </StarButton>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
