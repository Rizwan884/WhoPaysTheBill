/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

import { GameProvider } from './src/context';
import Toast from 'react-native-toast-message';

const Root = () => (
  <GameProvider>
    <App />
    <Toast />
  </GameProvider>
);


AppRegistry.registerComponent(appName, () => Root);
