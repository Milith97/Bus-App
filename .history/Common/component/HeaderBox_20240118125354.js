import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';

const HeaderBox = ({ color }) => {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Icon2 name="arrow-back-circle" size={50} color="#fff" />
            {/* Add any additional header content here */}
            <Text style={styles.headerText}>Your Header Content</Text>
            {/* ... (add any other components or content as needed) */}
        </View>
    );
};

export default HeaderBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    // Add any additional styles as needed
});
