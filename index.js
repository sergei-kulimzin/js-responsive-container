const options = {
  selector: '.container',
  padding: 10,
  breakpoints: [
    {
      max: 575,
    },
    {
      min: 576,
      max: 767,
      width: 540,
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

class ResponsiveContainer {
  constructor({
    selector = options.selector,
    padding = options.padding,
    breakpoints = options.breakpoints,
  } = options) {
    this.elements = this.getElements(selector);
    this.breakpoints = breakpoints;
    this.padding = padding;
    this.handleResize = this.handleResize.bind(this);
  }

  getElements(selector) {
    return Array.from(document.querySelectorAll(selector));
  }

  getWindowWith() {
    return document.documentElement.clientWidth;
  }

  createStyles(width) {
    return `margin: 0 auto; padding: 0 ${this.padding}px; width: ${
      width ? width + 'px' : '100%'
    }`;
  }

  handleResize() {
    const currentWindowWidth = this.getWindowWith();
    const currentBreakpoint = this.breakpoints.find((breakpoint) => {
      const min = breakpoint.min || 0;
      const max = breakpoint.max || Infinity;
      return currentWindowWidth >= min && currentWindowWidth <= max;
    });

    this.elements.forEach((element) => {
      if (currentBreakpoint) {
        element.style.cssText = this.createStyles(currentBreakpoint.width);
      } else {
        element.style.cssText = this.createStyles(undefined);
      }
    });
  }

  add() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
}

module.exports = module.exports.default = ResponsiveContainer;
