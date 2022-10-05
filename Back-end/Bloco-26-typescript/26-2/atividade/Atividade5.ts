type callback<T> = (item: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callback<T>): Array<T> {
    const otherArray: Array<T> = [];

    array.forEach((item) => {
        if(callback(item)) otherArray.push(item);
    })

    return otherArray;
};


console.log(myFilter<number>([1, 2, 3, 4], (item) => item < 3 ));