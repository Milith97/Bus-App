import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderBox = ({ color1, color2, color3, color4, text1, text2, text3, text4 }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.boxContainer, { backgroundColor: color1 }]}>
                <Text style={styles.box}></Text>
                <Text style={styles.text}>{text1}</Text>
            </View>
            <View style={[styles.boxContainer, { backgroundColor: color2 }]}>
                <Text style={styles.box}></Text>
                <Text style={styles.text}>{text2}</Text>
            </View>
            <View style={[styles.boxContainer, { backgroundColor: color3 }]}>
                <Text style={styles.box}></Text>
                <Text style={styles.text}>{text3}</Text>
            </View>
            <View style={[styles.boxContainer, { backgroundColor: color4 }]}>
                <Text style={styles.box}></Text>
                <Text style={styles.text}>{text4}</Text>
            </View>
        </View>
    );
};

export default HeaderBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
    },
    boxContainer: {
        alignItems: 'center',
    },
    box: {
        width: 20,
        height: 20,
        backgroundColor: 'white', // Default color for the box
        marginBottom: 5,
    },
    text: {
        fontSize: 12,
    },
});
