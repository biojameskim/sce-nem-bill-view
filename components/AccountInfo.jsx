import { View, Text, Image } from 'react-native'

import styles from '../styles/accountinfo.style'
import { icons } from '../constants'

const AccountInfo = ({ address, accountNumber }) => {
  return (
    <View style={styles.container}>
      <View style={styles.accountInfo}>
        <View style={styles.icon}>
          <Image 
            source={icons.address}
            resizeMode="contain"
            style={styles.addressIcon}
          />
          <Text style={{ fontSize: 15 }}>Address</Text>
        </View>
        <View style={styles.address}>
          <Text style={styles.addressText}>{address}
          <Text style={{ fontWeight: 'bold' }}>{accountNumber}</Text></Text>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  )
}

export default AccountInfo