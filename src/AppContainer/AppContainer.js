import { 
  createAppContainer, 
  createStackNavigator, 
  createSwitchNavigator, 
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomePage from '../screens/HomePage';
import SettingsPage from '../screens/SettingsPage';
import LoginPage from '../screens/LoginPage';

const LoginStack = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const HomeStack = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: () => ({
      title: 'Home',
    })
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsPage,
    navigationOptions: () => ({
      title: 'Settings'
    })
  },
});

const MainApp = createMaterialBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
}, {
  labeled: true,
  barStyle: {
    backgroundColor: '#3060af',
  },
});

const appContainer = createSwitchNavigator({
  Login: LoginStack,
  App: MainApp,
}, {
  initialRouteName: 'Login',
})

export default createAppContainer(appContainer);