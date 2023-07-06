import { useState } from 'react'
import { View, Text } from 'react-native'

import styles from '../styles/billinfo.style'
import { SIZES, COLORS } from '../constants'
import { HeaderButton, Separator } from '../components'

const BillInfo = ({ dueDate, balance, autoPay, billCycle, nemMonth }) => {
  const [selected, setSelected] = useState('1')

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Current Bill Information</Text>
      <Separator color={COLORS.edisonLightGray} width='3'/>

      <View style={styles.btnContainer}>
        <HeaderButton 
          text="Your Bill" fontSize={SIZES.medium} width={'40%'} height={30} handlePress={() => {setSelected('1')}} selected={selected === '1'}
        />
        <HeaderButton 
          text="History" fontSize={SIZES.medium} width={'40%'} height={30} handlePress={() => {setSelected('2')}} selected={selected === '2' }
        />
      </View>

      <View>
        <Text style={styles.balanceText}>Balance Due {dueDate}</Text>
        <Text style={styles.billText}>Bill Cycle: {billCycle}</Text>
        <Text style={styles.billText}>Month {nemMonth} of 12</Text>
        
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceAmt}>${balance}</Text>
          <View style={styles.payContainer}>
            <HeaderButton 
              text="Pay Now" fontSize={SIZES.large} width={150} height={70} handlePress={() => {}} selected={true}
            />
            {autoPay ? <Text style={{ fontStyle: 'italic', marginTop: 5 }}>Enrolled in Auto Pay</Text> : ""}
          </View>
        </View>
        
      </View>
    </View>
  )
}

export default BillInfo