import { View } from 'react-native'

/** Separator is a horizontal page separator with color [color] and width [width] */
const Separator = ({ color, width }) => (
  <View
        style={{
          borderBottomColor: color,
          borderBottomWidth: width,
          paddingVertical: 6
        }}
      />
)

export default Separator