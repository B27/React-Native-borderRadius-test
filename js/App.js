import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

const StackNavigation = createStackNavigator({
  first: {
    screen: FirstScreen,
    navigationOptions: {
      title: 'First screen',
    },
  },
  second: {
    screen: SecondScreen,
    navigationOptions: {
      title: 'Second screen',
    },
  },
});

export default createAppContainer(StackNavigation);
