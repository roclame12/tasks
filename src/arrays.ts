/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let bookEnd: number[] = [];

    if (numbers.length > 1) {
        bookEnd = [numbers[0], numbers[numbers.length - 1]];
    } else if (numbers.length > 0) {
        bookEnd = [numbers[0], numbers[0]];
    }

    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((element: number): number => element * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map(
        (element: string): number =>
            isNaN(+element) ? 0 : (element as unknown as number) // why do I need to do this?
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbers: string[] = amounts.map((element: string): string =>
        element.replace("$", "")
    );

    return stringsToIntegers(numbers);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions: string[] = messages.filter(
        (message: string): boolean => message[message.length - 1] === "?"
    );

    return noQuestions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const lowerColors = colors.map((color: string): string =>
        color.toLowerCase()
    );

    return lowerColors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (Number.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (runningTotal: number, current: number) => (runningTotal += current)
        );

        return (sum as unknown as number) + addends.join("+");
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negIndex = values.findIndex((value: number): boolean => value < 0);

    if (negIndex === -1) {
        const sum = values.reduce(
            (runningTotal: number, current: number) => (runningTotal += current)
        );
        return [...values, sum];
    } else {
        const posValues = values.splice(negIndex, values.length - negIndex);
        const sum = posValues.reduce(
            (runningTotal: number, current: number) => (runningTotal += current)
        );
        return values.splice(negIndex + 1, 0, sum);
    }
}
