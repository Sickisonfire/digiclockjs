import { Clock } from './Clock';
import './clockstyles.css';
import { Config } from './types';

const config: Config = {
  styles: {
    activeColor: 'red',
    inactiveColor: 'black',
    tileGap: '2px',
    containerColor: 'transparent',
    animation: 'shake 1s ease 0s 1 normal',
  },
};
const app = document.getElementById('app')!;
const clock = new Clock(config);

Clock.render(clock, app);

export default Clock;
