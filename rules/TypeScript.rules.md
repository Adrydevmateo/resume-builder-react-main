# TypeScript Rules

## General
`Don't use the + operator to concatenate data`
```TypeScript
const name: string = 'Dante'
const age: number = 31
const show: string = name + ' is ' + age = ' years old!' ❌
const show: string = `${name} is ${age} years old!` ✅
```

`All data structures have a type definition`
```TypeScript
const list: Array = []
const list: [] = []

const listOfUsers: Array<{name: string, age: number}> = [{name: 'Dante', age: 31}, {name: 'Vergil', age: 31}]
const listOfUsers: {name: string, age: number}[] = [{name: 'Dante', age: 31}, {name: 'Vergil', age: 31}]

type language = 'en' | 'es' | 'fr'
const collection: Array<Record<language, string>> = [{en: 'English', es: 'Español', fr: 'Français'}]
```

`Use 'interface' to define the model of an object`
```TypeScript
interface IUser {
    name: string
    age: number
}
```

`Use 'type' to define the data type of a variable/constant`
```TypeScript
type TUser = 'common' | 'admin' | 'guest'
```

## Variables
`Always have a data type`
```TypeScript
const age = 2 ❌
const age: number = 2 ✅
```

## Functions
`Functions always have a return type`
```TypeScript
function SayHello(): void {
    console.log('Hello')
}

const SayHello = (): void => console.log('Hello')
```

`{Object Params} if there's more than 3 needed`
```TypeScript
function SetCredentials({name: string, age: number, email: string, password: string}): void {}

const SetCredentials = ({name: string, age: number, email: string, password: string}): void => {}
```