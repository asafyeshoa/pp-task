export const unicodeToChar = (text: string) => {
    if (text === "NaN") {
        return "כתובת לא זמינה כרגע"
    }
    return text.replace(/\\u[\dA-F]{4}/gi,
        function (match) {
            return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
        });
}
