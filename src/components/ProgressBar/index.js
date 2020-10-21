import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Animated, {Easing} from 'react-native-reanimated';
//import ShinyEffect from '../ShinyEffect';

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
  concat,
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: value,
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 200,
    toValue: dest,
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      // If the clock isn't running we reset all the animation params and start the clock
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    // we run the step here that is going to update position
    timing(clock, state, config),

    debug('position', state.position),
    debug('destination', config.toValue),
    // if the animation is over we stop the clock
    cond(state.finished, debug('stop clock', stopClock(clock))),
    // we made the block return the updated position
    state.position,
  ]);
}

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: new Clock(),
      progress: new Value(0),
      animation: new Value(0),
      transX: runTiming(this.clock, new Value(0), this.animation),
    };
  }
  static propTypes = {
    progress: PropTypes.number.isRequired,
    height: PropTypes.number,
    color: PropTypes.string,
    borderRadius: PropTypes.number,
  };

  static defaultProps = {
    height: 35,
    color: '#ff4d4d',
    borderRadius: 50,
    width: 400,
    backgroundColor: 'transparent',
  };

  //   clock = new Clock();
  //   progress = new Value(0);
  //   animation = new Value(0);
  //   transX = runTiming(this.clock, new Value(0), this.animation);

  componentDidUpdate() {
    const progress = Math.max(Math.min(this.props.progress, 1), 0);
    this.animation.setValue(progress * 100);
  }

  render() {
    const progressStyle = {
      width: concat(this.transX, '%'),
      height: this.props.height,
      backgroundColor: this.props.color,
      borderRadius: this.props.borderRadius,
    };
    return (
      <View
        style={[
          {
            backgroundColor: this.props.backgroundColor,
            width: this.props.width,
            padding: 5,
            position: 'relative',
          },
          this.props.style,
        ]}>
        <Animated.View style={progressStyle}></Animated.View>
      </View>
    );
  }
}
