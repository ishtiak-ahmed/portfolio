import React from 'react';
import { useSpring, animated } from 'react-spring'

const Spring = () => {
    const props = useSpring({ to: { opacity: 1, marginLeft: '0px' }, from: { opacity: 0, marginLeft: '-300px' } })
    return <animated.div style={props}>I will fade in</animated.div>
};

export default Spring;