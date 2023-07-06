import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from '../styles/billdetails.style'
import { SIZES, COLORS } from '../constants'
import { Separator } from '../components'

const BillDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Important Billing Details</Text>
      <Separator color={COLORS.edisonLightGray} width='3'/>

      <Text>Your NEM bill has 2 parts:</Text>
      <View>
        <Text>1) Energy Delivery</Text>
        <TouchableOpacity>
          <Image 
            source={require('../assets/logos/sce-logo.png')}
            resizeMode='contain'
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
      </View>
      <View>

      </View>
    </View>
  )
}

export default BillDetails