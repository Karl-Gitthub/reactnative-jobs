import { useRouter } from 'expo-router';
import { Text, TextInput, View } from 'react-native';

import styles from './welcome.style';

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.username}>Welcome</Text>
        <Text style={styles.welcomeMessage}>Find your Job!</Text>

        <View style={styles.container}>
          <View style={styles.wrapper}>
            <TextInput
              style={styles.searchInput}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Welcome