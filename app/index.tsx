import { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, Theme } from '../theme';
import StarRating from '../components/StarRating';
import RatingDisplay from '../components/RatingDisplay';

export default function Index() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>How good Brendan is as a singer</Text>
      <View style={{ height: 12 }} />
      <RatingDisplay itemId="test"/>
      <StarRating itemId="test"/>
    </View>
  );
}

function createStyles(theme: Theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    text: {
      color: theme.text,
      fontSize: 18,
    },
  });
}