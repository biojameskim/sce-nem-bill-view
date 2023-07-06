import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { AccountInfo, BillInfo, BillDetails, Separator } from '../components'
import { COLORS, SIZES, logos } from '../constants';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

      {/* Header Declarations */}
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
      
      {/* Account Information */}
      <Separator color='lightgray' width='2'/> 
      <AccountInfo 
        address="231 E Harrison Ave, Pomona, CA, 93238,"
        accountNumber="123456789123"
      />

      {/* Bill Information */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1}}>
          <BillInfo 
            dueDate='Jul 15' 
            balance='12.03' 
            autoPay={true} 
            billCycle='Jun 14 - Jul 15' 
            nemMonth='10'
          />
          <Separator 
            color={COLORS.edisonGray}
            width='2'
          />
          <BillDetails 
            dueDate='Jul 15, 2023'
            balance='12.03'
            nemDueDate='Sep 15, 2023'
            nemMonth='10'
            startDate='Jun 14'
            endDate='Jul 15'
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

export default Home;