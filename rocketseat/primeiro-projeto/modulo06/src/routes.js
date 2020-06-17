// eslint-disable-next-line sort-imports
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

import Main from './pages/Main';
import RepoStar from './pages/RepoStart';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      RepoStar,
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerBackTitleVisible: false, // retira o título da página anterior
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
