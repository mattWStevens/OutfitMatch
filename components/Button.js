// Library Imports
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated,
{
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
    ReduceMotion
} from 'react-native-reanimated';

// Utility Imports
import { theme } from '../utilities/theme';

export default function Button({
    label,
    buttonStyles,
    labelStyles,
    disabled,
    onPress
}) {
    const opacity = useSharedValue(1);
    const tap = Gesture.Tap()
        .onTouchesDown(() => {
            opacity.value = .2;
        })
        .onTouchesUp(() => {
            opacity.value = 1;
        })
        .onTouchesMove(() => {
            opacity.value = .2;
        })
        .onTouchesCancelled(() => {
            opacity.value = 1;
        });
    const animatedOpacityStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacity.value, {
                duration: 150,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                reduceMotion: ReduceMotion.System
            })
        };
    });

    return (
        <>
            {!disabled &&
                <GestureDetector gesture={tap}>
                    <Animated.View
                        style={[
                            styles.buttonContainer,
                            animatedOpacityStyle,
                            { ...buttonStyles }
                        ]}>
                        <Pressable
                            style={styles.button}
                            onPress={onPress}
                        >
                            <Text
                                style={[
                                    styles.buttonLabel,
                                    { ...labelStyles }
                                ]}>
                                {label}
                            </Text>
                        </Pressable>
                    </Animated.View>
                </GestureDetector>}
            {disabled &&
                <View style={[styles.buttonContainer, { backgroundColor: theme.colors.disabledButton, opacity: .3 }]}>
                    <Pressable
                        disabled={true}
                        style={styles.button}
                        onPress={onPress}
                    >
                        <Text
                            style={[
                                styles.buttonLabel,
                                { ...labelStyles }
                            ]}>
                            {label}
                        </Text>
                    </Pressable>
                </View>}
        </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: theme.colors.primaryBrand,
        padding: 16,
        borderRadius: 8
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonLabel: {
        color: theme.colors.primaryText,
        fontSize: 16
    }
});