import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Signup from './Signup';

const MainNavigator = createStackNavigator({
  Home: Signup
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
