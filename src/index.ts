import { Clock } from './Clock';
import './clockstyles.css';
//const config: Config = {
//  mode: 'timer',
//  styles: { color: { active: 'pink', inactive: 'brown' } },
//};
const app = document.getElementById('app')!;
const clock = new Clock();

Clock.render(clock, app);
