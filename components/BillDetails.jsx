import { useState } from 'react'
import { View, Text, TouchableOpacity, Image, Linking, Modal, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from '../styles/billdetails.style'
import { SIZES, COLORS, icons, images } from '../constants'
import { Separator } from '../components'

const BillDetails = ({ dueDate, balance, nemDueDate, nemMonth, startDate, endDate }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)

  return (
    <View style={styles.container}>

      {/* First Tooltip */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(!modalVisible) }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.modalClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Ionicons name="close" size={40} color="black" />
            </Pressable>
            <Text style={styles.modalText}>Your monthly delivery charges</Text>
            <Text style={styles.modalText2}>Billing Period: {startDate} to {endDate}</Text>
            <Text style={styles.modalText3}>The cost of delivering electricity to you is charged monthly</Text>
          </View>
        </View>
      </Modal>

      {/* Second Tooltip */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => { setModalVisible2(!modalVisible2) }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.modalClose}
              onPress={() => setModalVisible2(!modalVisible2)}>
              <Ionicons name="close" size={40} color="black" />
            </Pressable>
            <Text style={styles.modalText}>TODO</Text>
          </View>
        </View>
      </Modal>

      <Text style={styles.headerText}>Important Billing Details</Text>
      <Separator color={COLORS.edisonLightGray} width='3'/>

      <Text style={styles.header2Text}>Your NEM bill has 2 parts:</Text>

      <View style={styles.box}>
        <View style={styles.headerContainer}>
          <View style={styles.flex}>
            <Text style={styles.nemHeader}>1) Energy Delivery</Text>
            <TouchableOpacity 
              style={styles.tooltip}
              onPress={() => setModalVisible(true)}
            >
              <Image 
                source={icons.tooltip}
                resizeMode='contain'
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Due: <Text style={{ fontWeight: '700' }}>{dueDate}</Text></Text>
        </View>
        <Text style={styles.balance}>${balance}</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.headerContainer}>
          <View style={styles.flex}>
            <Text style={styles.nemHeader}>2) Energy Consumption</Text>
            <TouchableOpacity 
              style={styles.tooltip}
              onPress={() => setModalVisible2(true)}
            >
              <Image 
                source={icons.tooltip}
                resizeMode='contain'
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Due: <Text style={{ fontWeight: '700' }}>{nemDueDate}</Text></Text>
          <Text style={[{marginTop: 5}, styles.text]}>Month {nemMonth} of 12</Text>
        </View>
        <TouchableOpacity>
          <Image 
            source={images.projection_bg}
            resizeMode='contain'
            style={styles.projection}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.monthlyMessage}>
        <Text style={styles.monthly}>Would you prefer to pay monthly rather than have an annual bill?</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.sce.com')}>
          <Text style={styles.link}>Learn More</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default BillDetails