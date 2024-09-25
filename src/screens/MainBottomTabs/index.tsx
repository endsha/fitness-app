import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Layout from '@constants/Layout';
import Themes from '@constants/Themes';
import Typo from '@constants/Typo';

import { NavigationScreenName } from '@customTypes/navigation';

import Home from '@screens/MainBottomTabs/Home';
import Settings from '@screens/MainBottomTabs/Settings';
import Map from '@screens/MainBottomTabs/Map';
import Activities from '@screens/MainBottomTabs/Activities';

const Tab = createBottomTabNavigator();

export default function MainBottomTabsNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName={NavigationScreenName.Home}
      tabBar={(props: BottomTabBarProps) => <MainBottomTabs {...props} />}>
      <Tab.Screen
        name={NavigationScreenName.Home}
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={NavigationScreenName.Map} component={Map} />
      <Tab.Screen
        name={NavigationScreenName.Activities}
        component={Activities}
      />
      <Tab.Screen name={NavigationScreenName.Settings} component={Settings} />
    </Tab.Navigator>
  );
}

function MainBottomTabs(props: BottomTabBarProps): JSX.Element {
  const { state, descriptors, navigation } = props;

  const getButtonContent = (
    isActive: boolean,
    route: NavigationScreenName,
  ): JSX.Element => {
    switch (route) {
      case NavigationScreenName.Home:
        return (
          <>
            <Ionicons
              name={isActive ? 'grid' : 'grid-outline'}
              size={24}
              color={
                isActive
                  ? Themes.light.text.primary
                  : Themes.light.text.secondary
              }
            />
            <Text
              style={[
                styles.tabButtonText,
                isActive && styles.activeTabButtonText,
              ]}>
              Home
            </Text>
          </>
        );
      case NavigationScreenName.Map:
        return (
          <>
            <Ionicons
              name={isActive ? 'map' : 'map-outline'}
              size={24}
              color={
                isActive
                  ? Themes.light.text.primary
                  : Themes.light.text.secondary
              }
            />
            <Text
              style={[
                styles.tabButtonText,
                isActive && styles.activeTabButtonText,
              ]}>
              Map
            </Text>
          </>
        );
      case NavigationScreenName.Activities:
        return (
          <>
            <>
              <Ionicons
                name={isActive ? 'analytics' : 'analytics-outline'}
                size={24}
                color={
                  isActive
                    ? Themes.light.text.primary
                    : Themes.light.text.secondary
                }
              />
              <Text
                style={[
                  styles.tabButtonText,
                  isActive && styles.activeTabButtonText,
                ]}>
                Activities
              </Text>
            </>
          </>
        );
      case NavigationScreenName.Settings:
        return (
          <>
            <Ionicons
              name={isActive ? 'settings' : 'settings-outline'}
              size={24}
              color={
                isActive
                  ? Themes.light.text.primary
                  : Themes.light.text.secondary
              }
            />
            <Text
              style={[
                styles.tabButtonText,
                isActive && styles.activeTabButtonText,
              ]}>
              Settings
            </Text>
          </>
        );
      default:
        return <></>;
    }
  };

  const renderTabs = () => {
    return state.routes.map((route, index) => {
      const { options } = descriptors[route.key];

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          navigation.navigate({
            name: route.name,
            merge: true,
            params: {},
          });
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacity
          key={route.key}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={styles.tabButton}>
          {/* {isFocused && <View style={styles.tabButtonActive} />} */}
          {getButtonContent(isFocused, route.name as NavigationScreenName)}
        </TouchableOpacity>
      );
    });
  };

  return <View style={styles.container}>{renderTabs()}</View>;
}

const styles = StyleSheet.create({
  container: {
    ...Layout.flexRow.justifyBetweenCenter,
    backgroundColor: Themes.light.backgroundColor,
    height: 96,
    paddingTop: 16,
    paddingBottom: 32,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tabButton: {
    ...Layout.flexCol.center,
    flex: 1,
  },
  tabButtonText: {
    ...Typo.textSmallRegular,
    marginTop: 4,
    color: Themes.light.text.secondary,
  },
  activeTabButtonText: {
    ...Typo.textSmallBold,
    color: Themes.light.text.primary,
  },
});
