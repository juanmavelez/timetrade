export const translateGender = (gender: string): string => {
    if(gender === "female"){
        return "Mujer";
    }
    if(gender === "male"){
        return "Hombre";
    }
    return gender
}
