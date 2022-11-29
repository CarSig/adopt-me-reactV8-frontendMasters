export const formatNote = (nota, accidental) => {

    if (nota.length === 1) {
        return nota;
    } else if
        (accidental == "sharp") {
        return nota.slice(0, 2);
    } else {
        return nota.slice(3, 5);
    }
}