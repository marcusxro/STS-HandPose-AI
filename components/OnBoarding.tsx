import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c1c1c1',
        height: '100%',
        display: 'flex',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

interface onboardingObj {
    title: string;
    text: string;
    key: string;
}

interface OnboardingProps {
    item: onboardingObj;
    onDone: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ item, onDone }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.text}</Text>


        </View>
    );
};

export default Onboarding;
