
export const limitText = (text, limit = -1) => {
    if (limit === -1) {
        limit = text.length * 0.3;
    }
    if (text.length > limit) {
        return text.substring(0, limit) + "...";
    }
    return text;
}

