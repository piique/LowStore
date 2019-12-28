import { createAppContainer, createSwitchNavigator } from 'react-navigation';
 
import Login from './pages/login';

const NavigationSwitch = createSwitchNavigator({
    loginScreen: { 
        screen: Login,
    },
});

const Container = createAppContainer(NavigationSwitch);

export default Container; 