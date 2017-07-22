import { TabNavigator } from 'react-navigation';
import MainScreen from 'main/containers/mainScreenContainer';
import SecondaryScreen from 'secondary/containers/secondaryScreenContainer';

const routeConfiguration = {
  main: { screen: MainScreen },
  secondary: { screen: SecondaryScreen },
};

const navConfiguration = {
  tabBarPosition: 'bottom',
  initialRouteName: 'main',
};

export default TabNavigator(routeConfiguration, navConfiguration);
