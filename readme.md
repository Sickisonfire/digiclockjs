# Digiclock
Vanilla JS digital clock.

## WIP
Project very much work in progress. 

* not npm-ready
* missing functionalities

## Usage

```
// WIP
// import { Clock } from '?'

const config = {
  styles: {
    // colors
    activeColor: 'red',
    inactiveColor: 'black',
    tileGap: '2px',
    containerColor: 'transparent',

    // custom animations
    animation: 'shake 1s ease 0s 1 normal',
  },
};

const container = document.getElementById('clock-container');
const clock = new Clock(config);

Clock.render(clock, container);
```

## Customization

Add an object with custom values. If no object is provided defaults are used.

### Styles
All provided values have to be valid CSS values.
</br>
Available options:

* `activeColor` color of active tiles (and dots) 
* `inactiveColor` color of inactive tiles 
* `tileGap` gap between individual tiles (grid-gap)
* `containerColor` background color 
* `animation` provide a custom animation

