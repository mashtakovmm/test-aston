// Задание 1 – Создать объект counter всеми возможными способами

const counter1 = {
    i: 0
}

const counter2 = Object.create({ i: 0 })
const counter3 = new Object({ i: 0 })

function Counter() {
    this.i = 0
}
const counter4 = new Counter()
const counter5 = Object.assign({}, {})

// Задание 2 – Скопировать объект counter всеми возможными способами;

const copy1 = Object.assign({}, counter1)
const copy2 = { ...counter1 }
const copy3 = JSON.parse(JSON.stringify(counter1))


// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

function makeCounter1() {
    return
}

const makeCounter2 = () => { return }
const makeCounter3 = function () { return }
const makeCounter4 = function makeCounter() { return }

// Задание 4 - прочитать и описать работу глобальной функции structuredClone()

// Глобальный метод structuredClone() создает глубокий клон, используя алгоритм структурированного клонирования
// Он клонирует, рекурсивно проходя через входной объект, сохраняя при этом карту ранее посещенных ссылок, чтобы избежать бесконечного прохождения циклов

// Написать функцию глубокого сравнения двух объектов:


const obj1 = {
    here: {
        is:
            "on", other: "3"
    }, object: "Y"
};

const obj2 = {
    here: {
        is:
            "on", other: "2"
    }, object: "Y"
};

function isObject(object) {
    return object != null && typeof object === 'object';
}

const deepEqual =
    (obj1, obj2) => {

        const objKeys1 = Object.keys(obj1)
        const objKeys2 = Object.keys(obj2)

        if (objKeys1.length !== objKeys2.length) {
            return false
        }

        for (const key of objKeys1) {
            const val1 = obj1[key]
            const val2 = obj2[key]
            const areObjects = isObject(val1) && isObject(val2);
            if (
                areObjects && !deepEqual(val1, val2) ||
                !areObjects && val1 !== val2
            ) {
                return false
            }
        }

        return true;
    };

// Бонус 
// Задание 2 –
// Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
    return str.split("").reverse().join("")
}



