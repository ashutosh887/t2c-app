import { StyleSheet, View } from "react-native"
import { SliderBox } from "react-native-image-slider-box"

import caone from '../assets/caone.png'
import catwo from '../assets/catwo.png'
import cathree from '../assets/cathree.png'

const images = [
  caone,
  catwo,
  cathree
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