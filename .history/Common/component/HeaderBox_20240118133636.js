import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Box from './Box'; // Import the Box component

const HeaderBox = ({ boxes }) => {
    return (
        <View style={styles.container}>
            {boxes.map((box, index) => (
                <View key={index} style={styles.boxContainer}>
                    <Box color={box.color} />
                    <Text style={styles.boxText}>{box.text}</Text>
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
    boxText: {
        marginTop: 5,
        fontSize: 12,
    },
});
