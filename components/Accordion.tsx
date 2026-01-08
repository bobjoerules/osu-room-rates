import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useTheme } from '../theme';
import { Ionicons } from '@expo/vector-icons';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onPress: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isExpanded, onPress }) => {
  const theme = useTheme();

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onPress();
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={[styles.header, { backgroundColor: theme.primary || '#007AFF' }]}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text style={[styles.title, { color: '#fff' }]}>{title}</Text>
        <Ionicons
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
      {isExpanded && (
        <View style={[styles.content, { backgroundColor: theme.background }]}>
          {children}
        </View>
      )}
    </View>
  );
};

interface AccordionProps {
  items: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
  }>;
}

export default function Accordion({ items }: AccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isExpanded={expandedId === item.id}
          onPress={() => toggleItem(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});
