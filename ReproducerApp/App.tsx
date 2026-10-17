/**
 * iOS: text typed after an autocorrect loses a multiline TextInput's custom font face.
 *
 * The field's font is PlusJakartaSans-Bold, bundled in ios/ReproducerApp/Fonts with PlusJakartaSans-Regular.
 *
 * 1. Tap the field and type, without pausing: Anyone up for pickup basketball at the park this saturday morning
 * 2. iOS autocorrects "saturday" to "Saturday" when the space after it is typed.
 * 3. "morning", typed after the correction, is drawn in PlusJakartaSans-Regular instead of PlusJakartaSans-Bold.
 *
 * @format
 */

import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.page}>
      <Text style={styles.hint}>
        Type: Anyone up for pickup basketball at the park this saturday morning
      </Text>
      <View style={styles.card}>
        <TextInput
          multiline
          onChangeText={setText}
          placeholder="type here"
          style={styles.input}
          value={text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f5f3ee', paddingTop: 80 },
  hint: { marginHorizontal: 16, color: '#555' },
  card: {
    backgroundColor: '#f5e38a',
    borderRadius: 16,
    margin: 14,
    minHeight: 236,
    justifyContent: 'center',
    padding: 21,
  },
  input: {
    color: '#222',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 30,
    padding: 0,
  },
});
