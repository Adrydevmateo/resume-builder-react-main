export const GetEnvVar = (key: string): string | void => {
    const keyVal = import.meta.env[key]
    if (keyVal) return keyVal
    else console.log(`You need to provide a value for the env key: ${key}`)
}