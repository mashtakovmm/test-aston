// 1) Какие бывают алгоритмы сортировок ? 
// К основным алгоритмам можно отнести:
// - Shaker sort
// - Comb sort
// - Bubble sort
// - Comb sort
// - Shellsort
// Однако алгоритмов существует огромное множество

// 2) Прочитать про "Операторы и выражения, циклы в JS"
// DONE

// 3) Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person.
// Добавить метод logInfo чтоб он был доступен всем объектам.

// const Person = {
//     firstName: "John",
//     age: 30,
//     height: 175,
//     getFullName: function() {
//         console.log(this.firstName);
//     }
// }

// const Person_2 = new Object()
// Person_2.firstName = "John"
// Person_2.age = 30
// Person_2.height = 175

class Person {
    #age
    #firstName
    #height

    constructor(age, firstName, height) {
        this.#age = age
        this.#firstName = firstName
        this.#height = height
    }

    getAge() {
        return this.#age;
    }
}

const newPerson = new Person(32, "A", 176)
const Person2 = new Person(23, "B", 142)

Person.prototype.logInfo = function () {
    console.log(`Age: ${this.getAge()}`);
}

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class PersonThree extends Person {
    #firstName

    constructor(age, height) {
        super(age, firstName, height)
    }

    set firstName(value) {
        this.#firstName = value
    }

    get firstName() {
        return this.#firstName
    }
}

// БОНУС:
// 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
    for (let num of arr) {
        const currentPair = total - num
        if (arr.includes(currentPair)) {
            console.log([num, currentPair])
            break
        }
    }
}

firstSum(arr,total)

// 2) Какая сложность у вашего алгоритма ?
// O(n^2), однако есть споосб сократить её до линейной О(n)