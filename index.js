/**
 * @format
 */

import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {enableLegendStateReact} from '@legendapp/state/react';

enableLegendStateReact();

AppRegistry.registerComponent(appName, () => App);
