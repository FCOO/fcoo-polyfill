# fcoo-polyfill
>


## Description
Polyfill and css for backward compatibility with older browser (primary IE8 and IE9) for applications created by [FCOO](https://github.com/FCOO) 

## Installation
### bower
`bower install https://github.com/FCOO/fcoo-polyfill.git --save`

## Usage

The repository includes the following *polyfills*

### fcoo-polyfill.scss

`coo-polyfill.css` contains ....

### matchMedia.js

https://github.com/paulirish/matchMedia.js.git that test whether a CSS media type or media query applies

Both `matchMedia.js` and `matchMedia.addListener.js` are included by adjusting `"overrides"` in `bower.json`


### inexorabletash / polyfill

https://github.com/inexorabletash/polyfill contains many different polyfill

Since it don't have a complete `main` in `bower.json` the full packages has been downloaded into the directory

	/src/_inexorabletash-polyfill 

It contains both js-files, documentation, and demo

To include a file (`FILENAME.js`) from inexorabletash / polyfill:

1. **Copy** the file from `/src/_inexorabletash-polyfill/` to `/src/_dist_files`
2. **Add** the file with directory `dist `to `main` in `bower.json`: `main: [.. , .. , "dist/FILENAME.js"]`
3. **Build** the repository by running `>grunt github `

#### The following files/polyfills are included

#### typedarray.js
https://www.khronos.org/registry/typedarray/specs/latest/

#### FILE#2
Description

#### FILE#3
Description







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



