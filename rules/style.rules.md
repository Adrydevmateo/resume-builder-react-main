# Style Rules

`Use Mobile First Design`
```CSS
/* Base Rules - Mobile */
...

/* Tablet Rules */
@media screen and (min-width: 700) {}

/* Desktop Rules */
@media screen and (min-width: 1200) {}
```

`Use the :root selector to create custom properties`
```CSS
#root {
    --primary-color: #eee;
    --primary-background-color: #eee;
}
```

`User custom properties if a value is repeated more than once`
```CSS
:root {
    --primary-color: #eee;
    
    --primary-blue: #69c0d9;

    --color-sea: #3a9e9b;

    --font-size-1: 1em;

    --primary-box-shadow: 0 0 var(--font-size-1) var(--color-sea)
}
```

`Use em for media queries related to width and height`
```CSS
@media screen and (min-width: 1020px) {} ❌
@media screen and (min-width: 63.75rem) {} ❌

@media screen and (min-width: 63.75em) {} ✅
```

`Don't use px unless it is really necessary`
```CSS
button {
    width: 20px; ❌

    width: 1em; ✅
    width: 1rem; ✅
    width: 1vw; ✅
    width: 10%; ✅
}

@media screen and (min-width: 1020px) {} ❌

@media screen and (min-width: 63.75em) {} ✅

/* Here's a px to em converter */
(px converter)[https://nekocalc.com/px-to-em-converter]
/* NOTE: Remember that rem and em are the same converted from px.
Example:
px    | em
700px | 43.75em
-----------------
px    | rem
700px | 43.75rem
*/
```