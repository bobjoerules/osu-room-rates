import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme';
import RatingDisplay from './RatingDisplay';

interface Room {
  id: string;
  name: string;
  image: any;
}

interface RoomListProps {
  rooms: Room[];
}

export default function RoomList({ rooms }: RoomListProps) {
  const theme = useTheme();
  const router = useRouter();

  const handleRoomPress = (roomId: string) => {
    router.push(`/room/${roomId}`);
  };

  const renderRoomItem = ({ item }: { item: Room }) => (
    <TouchableOpacity
      style={[styles.roomCard, { backgroundColor: theme.background, borderColor: theme.text }]}
      onPress={() => handleRoomPress(item.id)}
      activeOpacity={0.7}
    >
      {item.image && (
        <Image source={item.image} style={styles.roomImage} />
      )}
      <View style={styles.roomContent}>
        <Text style={[styles.roomName, { color: theme.text }]}>{item.name}</Text>
        <RatingDisplay itemId={item.id} />
      </View>
      <Ionicons name="chevron-forward" size={20} color={theme.text} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={rooms}
      renderItem={renderRoomItem}
      keyExtractor={(item) => item.id}
      scrollEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  roomCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  roomImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  roomContent: {
    flex: 1,
  },
  roomName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
});
