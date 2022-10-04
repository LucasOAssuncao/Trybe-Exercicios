type callback<T> = (item: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callback<T>): Array<T> {
    const otherArray: Array<T> = [];

    array.forEach((e) => {
        if(callback(e)) otherArray.push(e)
    })

    return otherArray;
};


console.log(myFilter([1, 2, 3], (item) => item < 3 ));