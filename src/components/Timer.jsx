import React, {useState} from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import useSound from 'use-sound';

import dingSfx from '../sounds/Ding.mp3';

function Timer(props) {
    const [finished, setFinished] = useState(false);
    const [playNotification] = useSound(dingSfx);

    function timeFormat(time) {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60

        return `${(("0" + minutes).slice(-2))}:${("0" + seconds).slice(-2)}`
    }

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path stroke="green" fill="none" strokeWidth="5" d="m7.49255,27.74515l11.16172,11.31893l26.25363,-26.41084" id="svg_1"/></svg>
        }
      
        return (
          <div>
            {timeFormat(remainingTime)}
          </div>
        );
      };

  return (
    <div onClick={() => props.switchTimer(props.id)}
    >
        <CountdownCircleTimer
            isPlaying={props.active}
            size={75}
            strokeWidth={8}
            trailColor={(finished) ? "green" : "#d9d9d9"}
            duration={props.time}
            colors={['#f8c300', '#3BB44A']}
            colorsTime={[props.time, 0]}
            onComplete={() => {
                playNotification();
                setFinished(prevState => !prevState);
                props.switchTimer(props.id+1);
                return { shouldRepeat: false, delay: 1.5 }
            }}
        >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default Timer