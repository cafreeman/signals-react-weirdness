import { useEffect } from 'react';
import { createStopwatch } from './create-stopwatch';

function Stopwatch() {
  const { time, start, stop } = createStopwatch();

  useEffect(() => {
    start();

    return stop;
  }, [time]);

  // swapping these two lines will make the timer start ticking. for some reason, the react
  // component doesn't respond when you only use `time.value`
  return <div className="App">{time.value}</div>;
  // return <div className="App">{time}</div>;
}

export default Stopwatch;
