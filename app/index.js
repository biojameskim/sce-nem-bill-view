import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { AccountInfo, BillInfo, BillDetails, Separator } from '../components'
import { COLORS, SIZES, logos } from '../constants';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: () => 
            <Image 
              source={logos.sceLogo} 
              resizeMode='contain' 
              style={{ width: 120, height: 40 }}
            />,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1}}>
          <Separator color='lightgray' width='2'/> 
          <AccountInfo />
          <Separator color='black' width='2'/>
          <BillInfo />
          <Separator color='black' width='2'/>
          <BillDetails />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

export default Home;