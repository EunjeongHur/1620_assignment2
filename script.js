function cleanUpIndex() {
    const indexcards = document.querySelectorAll('.contact')
    for (const elem of indexcards) {
        elem.remove();
    }
}
