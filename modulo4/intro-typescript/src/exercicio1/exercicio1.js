function checaTriangulo(a, b, c) {
    if (a !== b && b !== c && c !== a) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isósceles";
    }
}


console.log(checaTriangulo(1, 1, 1))