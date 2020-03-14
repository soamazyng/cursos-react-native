// eslint-disable-next-line sort-imports
import React from 'react';

import { StatusBar } from 'react-native';

import Routes from './routes';

import './config/ReactotronConfig';

console.tron.log('Reactotron Configured');

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
