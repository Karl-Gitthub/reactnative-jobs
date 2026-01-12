import { Text, View } from 'react-native'

import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <View styles={styles.container}>
        <Text style={styles.userName}>Hello Usesr</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
    </View>
  )
}

export default Welcome