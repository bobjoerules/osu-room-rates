import { usePathname } from 'expo-router';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import { useHapticFeedback } from '../../lib/SettingsContext';
import { useTheme } from '../../theme';

export default function TabLayout() {
    const pathname = usePathname();
    const triggerHaptic = useHapticFeedback();
    const theme = useTheme();
    const lastPathname = useRef(pathname);

    useEffect(() => {
        // Trigger haptic when pathname changes (tab switching)
        if (pathname !== lastPathname.current) {
            triggerHaptic();
            lastPathname.current = pathname;
        }
    }, [pathname, triggerHaptic]);

    return (
        <>
            {Platform.OS === 'web' && (
                <style>
                    {`
                    `}
                </style>
            )}
            <NativeTabs
                tintColor="#D73F09">
                <NativeTabs.Trigger name="submit">
                    <Label>Add Room</Label>
                    <Icon sf="plus.circle.fill" drawable="ic_input_add" />
                </NativeTabs.Trigger>
                <NativeTabs.Trigger name="index">
                    <Label>Rooms</Label>
                    <Icon sf="square.grid.2x2.fill" drawable="ic_menu_home" />
                </NativeTabs.Trigger>
                <NativeTabs.Trigger name="account">
                    <Label>Account</Label>
                    <Icon sf="person.fill" drawable="ic_menu_allfriends" />
                </NativeTabs.Trigger>
            </NativeTabs>
        </>
    );
}
