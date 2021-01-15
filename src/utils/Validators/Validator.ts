export const requiredField = (value:string) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLength = (length:number) => (value:string) => {
    if (value && value.length > length) return `Max length ${length} symbols`
    return undefined

}