# vue3-library-test
Testing repository for Vue3 component library

After run script `npm run build` two files are created:
`dist/Test.js`
`dist/style.css`

File `dist/Test.js` contains unncessary copy of `dist/style.css` content:

```JavaScript
var Test=function(e){"use strict";var p=(()=>`h1{color:red}`)(),....
```


Variable contains this content is never used but takes bytes in result file
