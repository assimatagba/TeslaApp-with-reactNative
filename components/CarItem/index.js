import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Styledbutton from '../shared/StyledButton'
import styles from './styles'

const CarItem = (props) => {
    const { name, tagLine, tagLineCTA, image } = props;

    return (
        
        <View style={styles.carContainer}>
            <ImageBackground 
                source={image} 
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagLine} 
                    <Text style={styles.subtitleCTA}>
                        {tagLineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttomContainer}>
                <Styledbutton type="primary" 
                    content={"Custom Order"} 
                    onPress={() => {
                        console.warn("Custom order was pressed")
                    }}
                />
                <Styledbutton type="secondary"
                    content={"Existing inventory"} 
                    onPress={() => {
                        console.warn("Existing inventory was pressed")
                    }}
                />
            </View>

        </View>
    )
}
export default CarItem
