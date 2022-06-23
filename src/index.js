module.exports = function toReadable(number) {
    let arr = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    switch (number) {
        case 0:
            return "zero";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 15:
            return "fifteen";
        case 18:
            return "eighteen";
        case 20:
            return "twenty";
        case 30:
            return "thirty";
        case 40:
            return "forty";
        case 50:
            return "fifty";
        case 80:
            return "eighty";
    }
    if (number < 10) {
        return `${arr[number - 1]}`;
    }
    if (number > 99) {
        switch (number % 100) {
            case 10:
                return `${arr[Math.floor(number / 100) - 1]} hundred ten`;
            case 11:
                return `${arr[Math.floor(number / 100) - 1]} hundred eleven`;
            case 12:
                return `${arr[Math.floor(number / 100) - 1]} hundred twelve`;
            case 13:
                return `${arr[Math.floor(number / 100) - 1]} hundred thirteen`;
            case 15:
                return `${arr[Math.floor(number / 100) - 1]} hundred fifteen`;
            case 18:
                return `${arr[Math.floor(number / 100) - 1]} hundred eighteen`;
        }
    }

    if (50 < number && number < 60) {
        return `fifty ${arr[(number % 10) - 1]}`;
    }
    if (20 < number && number < 30) {
        return `twenty ${arr[(number % 10) - 1]}`;
    }
    if (30 < number && number < 40) {
        return `thirty ${arr[(number % 10) - 1]}`;
    }
    if (40 < number && number < 50) {
        return `forty ${arr[(number % 10) - 1]}`;
    }
    if ((59 < number && number < 80) || (89 < number && number < 100)) {
        if (number % 10 !== 0) {
            return `${arr[Math.floor(number / 10) - 1]}ty ${
                arr[(number % 10) - 1]
            }`;
        } else {
            return `${arr[number / 10 - 1]}ty`;
        }
    }
    if (80 < number && number < 90) {
        return `eighty ${arr[(number % 10) - 1]}`;
    }
    if (99 < number && number % 100 > 13 && number % 100 < 20) {
        return `${arr[Math.floor(number / 100) - 1]} hundred ${
            arr[(number % 10) - 1]
        }teen`;
    }
    if (99 < number && number % 100 > 20 && number % 100 < 30) {
        return `${arr[Math.floor(number / 100) - 1]} hundred twenty ${
            arr[(number % 10) - 1]
        }`;
    }
    if (99 < number && number % 100 > 50 && number % 100 < 60) {
        return `${arr[Math.floor(number / 100) - 1]} hundred fifty ${
            arr[(number % 10) - 1]
        }`;
    }
    if (99 < number && number % 100 > 30 && number % 100 < 40) {
        return `${arr[Math.floor(number / 100) - 1]} hundred thirty ${
            arr[(number % 10) - 1]
        }`;
    }
    if (99 < number && number % 100 > 80 && number % 100 < 90) {
        return `${arr[Math.floor(number / 100) - 1]} hundred eighty ${
            arr[(number % 10) - 1]
        }`;
    }
    if (99 < number && number % 100 > 40 && number % 100 < 50) {
        return `${arr[Math.floor(number / 100) - 1]} hundred forty ${
            arr[(number % 10) - 1]
        }`;
    }
    if (number === 0) {
        return "zero";
    }
    if (number > 100) {
        if (number % 100 === 20) {
            return `${arr[Math.floor(number / 100) - 1]} hundred twenty`;
        } else if (number % 100 === 30) {
            return `${arr[Math.floor(number / 100) - 1]} hundred thirty`;
        } else if (number % 100 === 40) {
            return `${arr[Math.floor(number / 100) - 1]} hundred forty`;
        } else if (number % 100 === 50) {
            return `${arr[Math.floor(number / 100) - 1]} hundred fifty`;
        } else if (number % 100 === 80) {
            return `${arr[Math.floor(number / 100) - 1]} hundred eighty`;
        }
    }
    if (13 < number && number < 20) {
        return `${arr[(number % 10) - 1]}teen`;
    }
    if (
        number > 99 &&
        ((59 < number % 100 && number % 100 < 80) ||
            (89 < number % 100 && number % 100 < 100))
    ) {
        if (number % 10 !== 0) {
            return `${arr[Math.floor(number / 100) - 1]} hundred ${
                arr[Math.floor((number % 100) / 10) - 1]
            }ty ${arr[(number % 10) - 1]}`;
        } else {
            return `${arr[Math.floor(number / 100) - 1]} hundred ${
                arr[Math.floor((number % 100) / 10) - 1]
            }ty`;
        }
    }
    if (number % 100 === 0) {
        return `${arr[Math.floor(number / 100) - 1]} hundred`;
    }
    if (number % 100 < 10) {
        return `${arr[Math.floor(number / 100) - 1]} hundred ${
            arr[(number % 10) - 1]
        }`;
    }
};
