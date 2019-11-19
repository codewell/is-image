# @codewell/is-image
Determine if an object is an image

## Installation
```
npm install @codewell/is-image
```

## Basic usage
```JavaScript
import isImage from '@codewell/isImage';

const img = new Image();
isImage(img); // => true
isImage({}); // => false
```

