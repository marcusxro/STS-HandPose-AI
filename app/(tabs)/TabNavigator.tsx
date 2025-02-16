import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tutorial from './tutorial';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tutorial" component={tutorial} />
            {/* <Tab.Screen name="Tutorial" component={TutorialScreen} /> */}
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})