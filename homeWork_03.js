// TO DO: 
// 1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.apply(obj)
logger.call(obj)

let newLogger = logger.bind(obj)
newLogger()

// 3.1 Массивы:

// - Создайте массив чисел и найдите его сумму.

const numArray = [2, 1, 5, 4, 3]
const sum = numArray.reduce((accum, currentNum) => accum + currentNum)

// - Создайте массив строк и объедините их в одну строку.

const stringArray = ['hello', 'world', '!']
const concatString = stringArray.join(" ")

// - Найдите максимальный и минимальный элементы в массиве чисел.

const maxNum = Math.max(...numArray)
const minNum = Math.min(...numArray)

// 3.2 Stack (стек):

// - Реализуйте стек с использованием массива.
// Использую методы stack из C#: 
// Clear: очищает стек
// Contains: проверяет наличие в стеке элемента и возвращает true при его наличии
// Push: добавляет элемент в стек в верхушку стека
// Pop: извлекает и возвращает первый элемент из стека
// Peek: просто возвращает первый элемент из стека без его удаления

class CustomStack {
    constructor() {
        this.stackArray = []
    }

    get stack() {
        return this.stackArray
    }

    clear() {
        this.stackArray = []
    }

    contains(value) {
        return this.stackArray.includes(value)
    }

    push(value) {
        this.stackArray.push(...value)
    }

    pop() {
        return this.stackArray.pop()
    }

    peek() {
        return this.stackArray[this.stackArray.length-1]
    }
}

// 3.3 Queue (очередь):

// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе.


// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()
