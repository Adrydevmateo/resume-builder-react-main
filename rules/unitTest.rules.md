# Unit Testing Rules

`All functions must be able to be tested`
```TypeScript
const Sum = (): number => 2 + 2 ❌
 
test('The function Sum returns 4 when it receives x = 2 and y = 2', () => {
    // The function is not testable because you can't pass any data to it
    expect(Sum()).toBe(4) ❌
})


const Sum = (x: number, y: number): number => x + y ✅

test('The function Sum returns 4 when it receives x = 2 and y = 2', () => {
    expect(Sum(2, 2)).toBe(4) ✅
})
```

`Data must be cleaned after each test`
```TypeScript
'WRONG WAY' ❌
const user: {name: string, age: number} = {
    name: '',
    age: 1
}

const UpdateTheUserObject = (name: string, age: number): void => {
    user.name = name
    user.age = age
}

const GetUserNameFromObjectUser = (): string => user.name

test('UpdateTheUserObject updates the value of the object user', () => {
    const newName: string = 'Dante'
    const newAge: number = Math.floor(Math.random() * 50)
    
    UpdateTheUserObject(newName, newAge)

    expect(user.name).toBe(newName)
    expect(user.age).toBe(newAge)

    // The tests finished but the user object data was not cleared
})

test('GetUserNameFromObjectUser retrieves an empty string if the object remains in the initial state', () => {
    // The result here is 'Dante' which is wrong; The result must be '' - exactly an empty string
    const name = GetUserNameFromObjectUser()
    expect(name).not.toBeTruthy() 
})

'RIGHT WAY' ✅
interface IUser {
    name: string
    age: number
}

let user: IUser = {
    name: '',
    age: 1
}

const userBackup: IUser = user
Object.freeze(userBackup)

const UpdateTheUserObject = (name: string, age: number): void => {
    user.name = name
    user.age = age
}

const GetUserNameFromObjectUser = (): string => user.name

test('UpdateTheUserObject updates the value of the object user', () => {
    const newName: string = 'Dante'
    const newAge: number = Math.floor(Math.random() * 50)
    
    UpdateTheUserObject(newName, newAge)

    expect(user.name).toBe(newName)
    expect(user.age).toBe(newAge)
    
    user = userBackup ✅
})

test('GetUserNameFromObjectUser retrieves an empty string if the object remains in the initial state', () => {
    // The result here is ''
    const name = GetUserNameFromObjectUser() ✅
    expect(name).toBeTruthy() ✅

    user = userBackup ✅
})

test('GetUserNameFromObjectUser retrieves the current value of the property name from the object user', () => {
    const newName: string = 'Dante' ✅
    const newAge: number = Math.floor(Math.random() * 50) 
    
    UpdateTheUserObject(newName, newAge) ✅

    // The result here is 'Dante' as the state of the user object has changed
    const name = GetUserNameFromObjectUser() ✅

    expect(name).toBeTruthy(newName) ✅

    user = userBackup ✅
})
```