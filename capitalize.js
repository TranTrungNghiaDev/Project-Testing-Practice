const capitalize = (string = "Nghia") => {
    string = string.toLowerCase();
    string = string.replace(string[0], string[0].toUpperCase());
    return string;
}

export {capitalize};