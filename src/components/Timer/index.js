import React from 'react';
import {Text} from 'react-native';
import {formatTimer} from '../../utils/helperFunctions';


/* the Timer Takes Three Props : maxSeconds , descending , deadlineFunction
 Make sure you but them in app.js */
export function Timer(props) {
  const [seconds, setSeconds] = React.useState(
    props.descending ? props.maxSeconds : 0,
  );

  let interval;

    // seconds COunter :
  React.useEffect(() => {
    interval = setInterval(() => {
      setSeconds(prevSeconds =>
        props.descending ? prevSeconds - 1 : prevSeconds + 1,
      );
    }, 1000);

    // Clear tThe interval If Client Close Before Time Out
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

    // Stop Timer After Time Out
  React.useEffect(() => {
    const deadlineVal = props.descending ? 0 : props.maxSeconds;

    if (seconds === deadlineVal) {
      clearInterval(interval);

      // Make Action After Time Out
      props.deadlineFunction();
    }
  }, [seconds]);

  return <Text>{formatTimer(seconds)}</Text>;
}