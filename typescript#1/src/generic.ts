function getValue(value: any): any {
	return value;
}

console.log(getValue("123").length); // 3
console.log(getValue(123).length); // undefined

function myData<T>(value: T) {
	return value;
}

console.log(myData("123").length);
console.log(myData(123));

const arrowFunction = <T>(value: T) => {
    return value;
};
