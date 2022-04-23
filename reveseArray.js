function reverse(string) {
    let newString = '';
    for (p = 0; p < string.length; p++) {
        let q = string.length - (p + 1);
        newString += string[q];
    }
    return newString;
}
reverse('micheal opeyemi');
