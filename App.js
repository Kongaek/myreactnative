import HomeStack from './navigations/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTabs';
import RootStack from './navigations/RootStack';
export default function App() {
  return (
    <NavigationContainer>
            {/* <HomeStack /> */}
            {/* <BottomTab /> */}
            <RootStack />
        </NavigationContainer>
  );
}