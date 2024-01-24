# Formatting Rules

`DO NOT USE PRETTIER` ❌

`DO NOT USE ESLINT` ❌

`Don't use semicolons`
```TypeScript
const name: string = 'Hello'; ❌
const name: string = 'Hello' ✅
```

`Strings in Single Quotes or Backticks unless double quotes are needed`
```TypeScript
import Component from '@components/Component.tsx'
const name: string = 'Hello'
const uri: string = `Age: ${21}`
```

`Interfaces are prefixed with I and named in PascalCase`
```TypeScript
interface IUser {
    name: string
    age: number
}
```

`Types are prefixed with T and named in PascalCase`
```TypeScript
type TUser = 'common' | 'admin' | 'guest'
```

```Make use of '#region' if your code editor supports it```
```TypeScript
// #region Variables
let name: string = ''
let age: number = 1
// #endregion Variables

// #region Constants
const name: string = 'Dante'
const age: number = 31
// #endregion Constants
```

`Use the pattern '// Begin Variables' if your code editor doesn't support '#region'`
```TypeScript
// Begin Variables
let name: string = ''
let age: number = 1
// End Variables

// Begin Constants
const name: string = 'Dante'
const age: number = 31
// End Constants
```

`Use conditionals the common way`
```TypeScript
if (true) { 
    // logic ✅
} else {
    // logic ✅
}

if (true) // do something ❌
else // do something ❌

if (true)
    // do something ❌
else 
    // do something ❌
```

`Ternary operators must hold simple statements`
```TypeScript
const msg: string = (50 > 31) ? `I'm Dante and I'm ${31} years old` : `I'm Vergil and I'm ${31} years old` ✅

const msg: string (2 > 1) ? (4 > 1) ? (1 > 4) ? 'bruh' : 'stop' : 'wou' : (10 < 2) ? 'no' : 'omg' ❌
```

`Variables/Constants are named in snake_case`
```TypeScript
const userName: string = 'Dante' ❌
const UserName: string = 'Dante' ❌

const user_name: string = 'Dante' ✅
```

`Functions are named in PascalCase`
```TypeScript
function sayHello(): void { ❌
    console.log('Hello')
}

const sayHello = (): void => console.log('Hello') ❌

function say_hello(): void { ❌
    console.log('Hello')
}

const say_hello = (): void => console.log('Hello') ❌

function SayHello(): void { ✅
    console.log('Hello')
}

const SayHello = (): void => console.log('Hello') ✅
```


`CSS classes and id's must be explicit`
```CSS
.p-p { ❌
    width: 4em;
    height: 2em;
}

.profile-picture { ✅
    width: 4em;
    height: 2em;
}

.h-p { ❌
    background-color: red;
}

.home-page { ✅
    background-color: red;
}
```

`CSS classes and id's must be separated by -`
```CSS
.profile_picture { ❌
    width: 4em;
    height: 2em;
}

.profile-picture { ✅
    width: 4em;
    height: 2em;
}
```