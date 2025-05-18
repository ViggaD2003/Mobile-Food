import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

// Giữ splash screen hiển thị cho đến khi chúng ta sẵn sàng render
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    // contentStyle dung cho Stack navigation
    // contentStyle: { backgroundColor: "#3f2f25" }

    // sceneStyle dung cho Draw navigation
    sceneStyle: { backgroundColor: "#3f2f25" },
    drawerStyle: { backgroundColor: "#351401" },
    drawerInactiveTintColor: "white",
    drawerActiveTintColor: "#351401",
    drawerActiveBackgroundColor: "#e4baa1"
  }}>
    <Drawer.Screen options={{ title: "All categories", drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} /> }} name='Categories' component={CategoriesScreen} />
    <Drawer.Screen options={{ drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} /> }} name="Favorites" component={FavoritesScreen} />
  </Drawer.Navigator>
}

export default function App() {
  const onLayoutRootView = useCallback(async () => {
    // Ẩn splash screen sau khi app đã sẵn sàng
    await SplashScreen.hideAsync();
  }, []);

  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}  
      <Provider store={store}>
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            // contentStyle dung cho Stack navigation
            contentStyle: { backgroundColor: "#3f2f25" }
          }}>
            <Stack.Screen name='Draw'
              options={{
                headerShown: false
              }}
              component={DrawerNavigator} />

            <Stack.Screen name='MealsOverview' component={MealOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return { title: catId };
            // }}
            />
            <Stack.Screen name='MealDetail' component={MealDetailScreen}
              options={{
                title: "About the Meal"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
