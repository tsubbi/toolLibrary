export const utilities = () => {
    const checkType = {
        NUMBER: "number",
        STRING: "string"
    }

    function handleError(type) {
        let msg = ""
        switch (type) {
            case checkType.NUMBER:
                msg = "Unable to process because the dataset is not number";
                break;
            case checkType.STRING:
                msg = "Unable to process because the dataset is not string"
                break;
            default:
                break;
        }
        alert(msg);
    }

    function isNumber(arr) {
        return !arr.some(element => isNaN(element));
    }

    function checkNumber(arr) {
        if (!isNumber(arr)) {
            handleError(checkType.NUMBER);
            return false;
        }
        return true;
    }
}