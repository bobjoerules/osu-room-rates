import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Accordion from '../../components/Accordion';
import RoomList from '../../components/RoomList';
import { Theme, useTheme } from '../../theme';

export default function Index() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  // Sample room data - replace with your actual data source
  const owenRooms = [
    {
      id: 'owen-room-101',
      name: 'Room 101',
      image: require('../../assets/images/placeholder.png'),
    },
  ];

  const accordionItems = [
    {
      id: '1',
      title: 'Owen Hall',
      content: (
        <RoomList rooms={owenRooms} />
      ),
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.content}>
          <Accordion items={accordionItems} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function createStyles(theme: Theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    content: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
  });
}
