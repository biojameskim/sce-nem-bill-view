import { TouchableOpacity, Text } from 'react-native'

import styles from "../styles/headerbutton.style"

const HeaderButton = ({ text, fontSize, fontStyle, width, height, handlePress, selected }) => {
  return (
    <TouchableOpacity 
      style={[{width: width, height: height}, styles.headerBtn(selected)]}
      onPress={handlePress}
    >
      <Text style={[{fontSize: fontSize, fontStyle: fontStyle}, styles.headerBtnText(selected)]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default HeaderButton