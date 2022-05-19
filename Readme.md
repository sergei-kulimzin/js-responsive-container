### Simple responsive container with javascript

![example](https://i.postimg.cc/RFxbSZSn/ezgif-com-gif-maker-5.gif)

## Install

```js
// install with npm
npm install responsive-container
```

## Usage

```html
<div class="container">
  <p>Some content</p>
  <p></p>
</div>
```

```js
import ResponsiveContainer from 'responsive-container';

const container = new ResponsiveContainer();

container.add();
```

## Options:

#### **new ResponsiveContainer(options)**

```js
const options = {
  selector: '.container', // any valid css selector, default: '.container'
  padding: 10, // integer, default: 10
  breakpoints: [
    // array of objects, default: bootstrap 5 breakpoints
    {
      max: 575,
    },
    {
      min: 576, // integer. If not specified, min = 0
      max: 767, // integer. If not specified, max = Infinity
      width: 540, // integer. If not specified, width = 100%
    },
    {
      min: 768,
      max: 991,
      width: 720,
    },
    {
      min: 992,
      max: 1199,
      width: 960,
    },
    {
      min: 1200,
      max: 1399,
      width: 1140,
    },
    {
      min: 1400,
      width: 1320,
    },
  ],
};
```
