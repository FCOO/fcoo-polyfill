# fcoo-polyfill
>


## Description
Polyfill and css for backward compatibility with older browser (primary IE9) for applications created by [FCOO](https://github.com/FCOO) 

## Installation
### bower
`bower install https://github.com/FCOO/fcoo-polyfill.git --save`

## Usage

### 3th part packages
Since many of the included packages don't have a complete `main` in `bower.json` the full packages (`PACKAGE`) has been downloaded into the directories in `/src/_PACKAGENAME`

To include a file from one of the packages (named `PACKAGENAME`):

1. **Copy** the file from `/src/_PACKAGENAME/` to `/src/`
3. **Build** the repository by running `>grunt build` or `>grunt push`

NOTE: Since `fcoo-polyfill` directly includes source files from others packages the `.eslintrc` has been modified to allow the included fiels to pass the eslint check

## Included packages and files

The repository includes the following *polyfills*

### [matchMedia.js](https://github.com/paulirish/matchMedia.js.git)
Test whether a CSS media type or media query applies

#### Included file(s): `matchMedia.js` and `matchMedia.addListener.js`

### [inexorabletash / polyfill](https://github.com/inexorabletash/polyfill)
Contains many different polyfill. It contains both js-files, documentation, and demo

#### Included file(s): [`typedarray.js`](https://www.khronos.org/registry/typedarray/specs/latest/)

### [jQuery-ajaxTransport-XDomainRequest](https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest.git) 
jQuery ajaxTransport extension that uses XDomainRequest for IE8 and IE9

#### Included file(s): `jQuery.XDomainRequest.js`

## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/fcoo-polyfill/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk


## Credits and acknowledgements
[Scott Jehl, Paul Irish, Nicholas Zakas](https://github.com/paulirish/matchMedia.js.git)
[Joshua Bell](https://github.com/inexorabletash/polyfill)

