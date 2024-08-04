// Library Imports
import { Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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

export default function CircleButton({ onPress }) {
    const padding = useSharedValue(3);
    const tap = Gesture.Tap()
        .onTouchesDown(() => {
            padding.value = 6;
        })
        .onTouchesUp(() => {
            padding.value = 3;
        })
        .onTouchesMove(() => {
            padding.value = 6;
        })
        .onTouchesCancelled(() => {
            padding.value = 3;
        });
    const animatedPaddingStyle = useAnimatedStyle(() => {
        return {
            padding: withTiming(padding.value, {
                duration: 150,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                reduceMotion: ReduceMotion.System
            })
        };
    });

    return (
        <GestureDetector gesture={tap}>
            <Animated.View
                style={[
                    styles.circleButtonContainer,
                    animatedPaddingStyle
                ]}>
                <Pressable
                    style={styles.circleButton}
                    onPress={onPress}
                >
                    <MaterialIcons
                        name='add'
                        size={38}
                        color='#25292e'
                    />
                </Pressable>
            </Animated.View>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: theme.colors.lightBrand,
        borderRadius: 42
    },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: theme.colors.primaryText
    },
});
