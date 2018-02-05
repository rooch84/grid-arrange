'use strict';

/**
 * For fitting n items in a grid, calculates the size of each grid item and the number of rows and colums to fit all n.
 * @param {number} w - width of area
 * @param {number} h - height of area
 * @param {number} n - number of items to fit
 * @param {number} ar - aspect ratio of each item
 * @param {object} opts - options - margins to include in the calculation, and number to decrease by (smaller numbers give more precise measurements, but the calculation will take longer) 
 * @return {object} - {w: item width, h: item height, col: number of colums, row: number of rows}
 */
module.exports = function(w, h, n, ar, opts = {}) {
	let defaultOpts = {
		m: {t: 0, b: 0, l: 0, r: 0}, 
		d:1
	};
	
	for (let key of Object.keys(defaultOpts)) {
    if (!(key in opts)) {
      opts[key] = defaultOpts[key];
    }
  }

	let numD = Math.floor(opts.d.valueOf()) === opts.d.valueOf() ? 0 : opts.d.toString().split(".")[1].length || 0;
	
  let tH = h ;
  let tW = tH*ar;

  if (tW > w) {
    tW = w;
    tH = tW / ar;
  }

  while (Math.floor(h / (tH + opts.m.t + opts.m.b)) * Math.floor(w / (tW + opts.m.l + opts.m.r)) < n ) {
    tW -= opts.d;
    tH = tW / ar;
  }

  return ( {w: +tW.toFixed(numD), h: +tH.toFixed(numD), col: Math.floor(w / tW), row: Math.floor(h / tH) } );
}
