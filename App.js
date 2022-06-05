import HomeStack from './navigations/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTabs';
import RootStack from './navigations/RootStack';
import { AuthContext, AuthContextProvider } from "./hooks/AuthContextProvider";
export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        {/* <HomeStack /> */}
        {/* <BottomTab /> */}
        <RootStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}