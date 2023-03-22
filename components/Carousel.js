import { StyleSheet, View } from "react-native"
import { SliderBox } from "react-native-image-slider-box"

const images = [
    'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
]

const Carousel = () => {
  return (
    <View>
        <SliderBox images={images} 
            circleLoop 
            autoPlay
            dotColor="#13274f" 
            inactiveDotColor="#90A4A3"
            ImageComponentStyle={{
            borderRadius: 6,
            width: '94%'        
        }} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Carousel