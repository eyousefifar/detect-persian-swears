# Detect Persian Swears

detects swears in Persian or finglish.

** This library is WIP



### Install

npm:

```bash
npm install --save detect-persian-swears
```

yarn:

```bash
yarn add detect-persian-swears
```



### How to use:

```typescript
import { detectPersianSwears } from "detect-persian-swears";
// pas your data here
const result = detectPersianSwears("your impolite sentence");

const { 
    isMatch, // if sentence is impolite, isMatch is true
    score, // fuse.js score 
    swear, // the swear that was found in the data,
    sentence // your impolite sentence
} = result;

```



### How does it work

The library uses fuse.js fuzzy search lib and Persian swears data set to detect if there is any swears in the data.