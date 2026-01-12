import { useRouter } from 'expo-router';
import { Text, TextInput, View } from 'react-native';

import styles from './welcome.style';

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello User</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>

        <View style={styles.searchContainer}>
          <View style={styles.wrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search jobs"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
