import React from 'react';
import {Text} from 'react-native';
import {formatTimer} from '../../utils/helperFunctions';



export class Timer extends React.Component {
    constructor(props) {
        super(props);

        /* if Timer CountDown start From Max Seconds
         if not start From 0 */
        this.state = {
            seconds: props.descending ? props.maxSeconds : 0,
        };
    }

    //make action when  the page load :

    componentDidMount() {

        //making Timer 

        this.interval = setInterval(() =>{

            

            

            //make Timer Count Seconds:

            this.setState(pervstate => {
                return {
                    seconds: this.props.descending
                    ? pervstate.seconds - 1
                    : pervstate.seconds + 1,
                };
            })
        },1000)
    };


    //make Timer stop After TimeOut:

    componentDidUpdate(prevProps, prevState){

        const DeadLine = this.props.descending ? 0
        : this.props.maxSeconds

        if (this.state.seconds === DeadLine){
            clearInterval(this.interval);

            // mace Action Whin Time out
            this.props.deadLineFunction();
            
        };

    };

    // clear Timer (If the User colse the App Before Time Out)
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return <Text>{formatTimer(this.state.seconds)}</Text>
    };
    
};