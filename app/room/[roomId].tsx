import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RatingDisplay from '../../components/RatingDisplay';
import StarRating from '../../components/StarRating';
import { Theme, useTheme } from '../../theme';

// Sample room data - replace with your actual data source
const ROOMS_DATA: Record<string, { name: string; image: any; description: string }> = {
  'owen-room-101': {
    name: 'Owen Hall - Room 101',
    image: require('../../assets/images/buildings/owenhall.jpg'),
    description: 'Study room on the first floor',
  },
};

export default function RoomDetail() {
  const { roomId } = useLocalSearchParams<{ roomId: string }>();
  const router = useRouter();
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  // Fallback if roomId is an array (sometimes happens with dynamic routes)
  const finalRoomId = Array.isArray(roomId) ? roomId[0] : roomId;

  const roomData = ROOMS_DATA[finalRoomId as string] || {
    name: 'Unknown Room',
    image: null,
    description: 'Room details not found',
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={28} color={theme.text} />
          </TouchableOpacity>
        </View>

        {roomData.image && (
          <Image source={roomData.image} style={styles.headerImage} />
        )}

        <View style={styles.content}>
          <Text style={[styles.title, { color: theme.text }]}>{roomData.name}</Text>

          <View style={styles.ratingSection}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Room Ratings</Text>
            <View style={styles.ratingContainer}>
              <RatingDisplay itemId={finalRoomId as string} />
            </View>
          </View>

          <View style={styles.ratingSection} collapsable={false}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Rate This Room</Text>
            <StarRating itemId={finalRoomId as string} />
          </View>

          <View style={styles.infoSection}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>About</Text>
            <Text style={[styles.description, { color: theme.text }]}>{roomData.description}</Text>
          </View>
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
    header: {
      paddingHorizontal: 16,
      paddingTop: 12,
      paddingBottom: 8,
    },
    backButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerImage: {
      width: '100%',
      height: 240,
      resizeMode: 'cover',
    },
    content: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 12,
    },
    ratingSection: {
      marginBottom: 28,
    },
    ratingContainer: {
      backgroundColor: theme.text === '#fff' ? '#1a1a1a' : '#f5f5f5',
      borderRadius: 12,
      padding: 16,
    },
    infoSection: {
      marginTop: 12,
    },
    description: {
      fontSize: 14,
      lineHeight: 20,
    },
  });
}