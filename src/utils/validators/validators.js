export const required = value => {
    if (value)
        return undefined;
    return "Field is required!";
}

export const maxLength = (limit) => {
    return value => {
        if (value.length <= limit)
            return undefined;
        return `Max length is ${limit}!`
    }
} 