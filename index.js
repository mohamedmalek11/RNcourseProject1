import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {configurAxios} from './src/utils/helperFunctions'

configurAxios();
AppRegistry.registerComponent(appName, () => App);
