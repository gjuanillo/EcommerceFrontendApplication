const truncateText = (text: string, charLimit: number = 90) => {
    if (text?.length > charLimit) {
        return text.slice(0, charLimit) + "...";
    }
    return text;
}

export default truncateText;
