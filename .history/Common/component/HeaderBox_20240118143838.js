import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderBox = ({ boxes }) => {
    return (
        <View style={styles.container}>
            {boxes.map((box, index) => (
                <View key={index} style={styles.boxContainer}>
                    <View style={[styles.box, { backgroundColor: box.color }]}>
                    
                    </View>
                    <Text style={styles.text}>{box.text}</Text>
                </View>
            ))}
        </View>
    );
};

export default HeaderBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    boxContainer: {
        alignItems: 'center',
        
    },
    box: {
        width: 20,
        height: 20,
        marginBottom: 5,
    },
    text:{
        marginTop: 15,
    }
});
