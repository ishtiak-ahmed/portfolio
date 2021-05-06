import React from 'react';
import { useSpring, animated } from 'react-spring'

const Spring = () => {
    const props = useSpring({ to: { opacity: 1, marginLeft: '0px', transform: 'scale(0.8)' }, from: { opacity: 0, marginLeft: '-300px', transform: 'scale(1.8)' } })
    return <animated.div style={props}>I will fade in</animated.div>
};

export default Spring;