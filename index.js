/**
 * @format
 */

import {AppRegistry} from 'react-native';
import StackNavigation from './js/App';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const GhHoc = gestureHandlerRootHOC(StackNavigation);
AppRegistry.registerComponent(appName, () => GhHoc);
