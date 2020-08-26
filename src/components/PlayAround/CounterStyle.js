import { StyleSheet } from 'react-native';


const Styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        marginTop: 40,
        flexDirection: 'column',

    },
    resetButtonWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    resetButton: {
        borderColor: '#ac92ed',
        color: '#ac92ed',
        borderWidth: 1,
        borderRadius : 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop:10,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        margin: 20,
    },
    CounterStyleWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    CounterTextStyle: {
        borderColor: '#edd092',
        color: '#ac92ed',
        fontSize: 90,
        marginBottom: 90,
        padding: 20,
        
        borderRadius : 20,
        paddingLeft: 70,
        paddingRight: 70,
        marginLeft: 50,
        marginRight: 50,
    },
    increaceButtonWrapper: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    increaceButton: {
        fontSize: 70,
        marginBottom: 10,
        padding: 30,
        borderWidth: 3,
        borderRadius : 70,
        paddingLeft: 80,
        paddingRight: 80,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#9ced92',
        backgroundColor : '#fff',
        color: '#9ced92',
        
    },


});

export default Styles;