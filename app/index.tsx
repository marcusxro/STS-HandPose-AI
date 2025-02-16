import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ColorList from '@/components/ColorList';
import Onboarding from '@/components/OnBoarding';
import AppIntroSlider from 'react-native-app-intro-slider';
import TabNavigator from './(tabs)/TabNavigator';


const introObject = [
    { key: '1', title: 'Welcome to Speechy!', text: 'Learn and translate hand signs!.' },
    { key: '2', title: 'Learn', text: 'Learn the hand signs and their meanings.' },
    { key: '3', title: 'Translate', text: 'Translate the hand signs to text.' },
    { key: '4', title: 'Get Started!', text: 'Start using the app!' }
];

const Index = () => {
    const [isOnboardingComplete, setOnboardingComplete] = useState(false);


    const buttonLabel = (label: string) => {
        return (
            <View style={{
                padding: 10,
                backgroundColor: "#191919",
                borderRadius: 5,
                paddingInline: 20,
            }}>
                <Text 
                    style={{
                        color: '#fff',
                        fontSize: 16,
                    }}
                >{label}</Text>
            </View>
        )
    }


    return (
        <View style={{ flex: 1, height: '100%', backgroundColor: '#c1c1c1' }}>
            {isOnboardingComplete ? (
                <TabNavigator />
            ) : (
                <AppIntroSlider
                    data={introObject}
                    onDone={() => setOnboardingComplete(true)}
                    renderItem={({ item }) => <Onboarding item={item} onDone={() => setOnboardingComplete(true)} />}
                    activeDotStyle={{ backgroundColor: '#000' }}
                    renderPrevButton={() => buttonLabel('Back')}
                    renderNextButton={() => buttonLabel('Next')}
                    showSkipButton
                    renderSkipButton={() => buttonLabel('Skip')}
                    renderDoneButton={() => buttonLabel('Get Started')}
                />
            )}
        </View>
    );
};

export default Index;
