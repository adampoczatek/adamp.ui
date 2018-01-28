'use strict';

const path = require('path');
const mandelbrot = require('@frctl/mandelbrot');
const pkg = require('../package.json');

/*
* Require the Fractal module
*/
const fractal = module.exports = require('@frctl/fractal').create();

/*
* Give your project a title.
*/
fractal.set('project.title', 'Style Guide');

/*
* Tell Fractal where to look for components.
*/
fractal.components.set('path', path.join(__dirname, 'components'));

/*
* Tell Fractal where to look for documentation pages.
*/
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
* Tell the Fractal web preview plugin where to look for static assets.
*/
fractal.web.set('static.path', path.join(__dirname, '../dist'));

/**
 * Create a reference to the correct version of pattern library.
 */
fractal.set('project.uiVersion', pkg.version);

/**
 * Theme customisation.
 */
const theme = mandelbrot({
  skin: 'black',
  panels: ['html', 'info', 'notes'],
  nav: ['docs', 'components'],
});

fractal.web.theme(theme);