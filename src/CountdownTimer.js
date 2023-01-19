import React from 'react';
import { useCountdown } from './hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';
import video from './birthday.mp4';


const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Happy Birthday!!!</span>
            <p>Thank you for being a part of my life.</p>
            <p>
                <video width="500" height="400" controls loop>
                    <source src={video} type="video/mp4" />
                </video>
            </p>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <a
                href="https://www.instagram.com/p/CmWumMvI4lJZIdbhfXpVudv12dZnj-d33gxw0o0/"
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </a>
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};
export default CountdownTimer;
