# fcoo-polyfill
>


## Description
Polyfill and css for backward compatibility with older browser (primary IE8 and IE9) for applications created by [FCOO](https://github.com/FCOO) 

## Installation
### bower
`bower install https://github.com/FCOO/fcoo-polyfill.git --save`

## Usage

### fcoo-polyfill.scss

`fcoo-polyfill.css` contains ....

### 3th part packages
Since many of the included packages don't have a complete `main` in `bower.json` the full packages (`PACKAGE`) has been downloaded into the directories in `/src/_PACKAGENAME`

To include a file (`FILENAME.js`) from one of the packages:

1. **Copy** the file from `/src/_PACKAGENAME/` to `/src/_dist_files`
2. **Add** the file with directory `dist `to `main` in `bower.json`: `main: [.. , .. , "dist/FILENAME.js"]`
3. **Build** the repository by running `>grunt github `


The repository includes the following *polyfills*


## Included packages and files
### matchMedia.js

https://github.com/paulirish/matchMedia.js.git that test whether a CSS media type or media query applies

#### Including
`matchMedia.js` and `matchMedia.addListener.js`


### inexorabletash / polyfill

https://github.com/inexorabletash/polyfill contains many different polyfill
It contains both js-files, documentation, and demo

#### Including

`typedarray.js` https://www.khronos.org/registry/typedarray/specs/latest/









## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/fcoo-polyfill/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk


## Credits and acknowledgements
[Scott Jehl, Paul Irish, Nicholas Zakas](https://github.com/paulirish/matchMedia.js.git)
[Joshua Bell](https://github.com/inexorabletash/polyfill)

## Known bugs

## Troubleshooting

## Changelog



