
Grid Arrangement
=========

Resizes items such that they fit efficiently into a grid, maintaining their aspect ratio. 

## Installation

  `npm install grid-arrange`

## Usage

    ```
    var gridArranger = require('grid-arrange');

    var output = gridArranger(100, 100, 10, 2.5, options); 
    ```

    Output should be `{w: 50, h: 20, row: 5, col: 2}` 
    
    There are options to include margins, and set the default decrement to something other than 1 (bigger for bigger grids, smaller for smaller grids).

    ```
    options = {
      m: {t: 0, b: 0, l: 0, r: 0},
      d:1
    };
    ```  

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
