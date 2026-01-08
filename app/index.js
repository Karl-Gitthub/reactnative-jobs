import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn } from '../components';
import { COLORS, icons, images } from '../constants';
const Home = () => {
    const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: "",
            }}
        />
        <Popularjobs />
        <Nearbyjobs />  
    </SafeAreaView>
  )
}

export default Home;