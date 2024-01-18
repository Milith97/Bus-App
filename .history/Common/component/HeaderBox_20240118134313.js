import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderBox = ({ boxes }) => {
    return (
        <View style={styles.container}>
            {boxes.map((box, index) => (
                <View key={index} style={[styles.box, { backgroundColor: box.color }]}>
                    <Text>{box.text}</Text>
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
    box: {
        alignItems: 'center',
        width: 20,
        height: 20,
        marginBottom: 5,
    },
});
