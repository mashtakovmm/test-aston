//　Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли): 
// 1)

let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});

promiseTwo
    .then((res) => {
        return res + "b";
    })
    .then((res) => {
        return res + "c";
    })
    .finally((res) => {
        return res + "!!!!!!!"; // не может менять результат прошлого промиса
    })
    .catch((res) => {
        return res + "d"; // не выполняется
    })
    .then((res) => {
        console.log(res);
    });

// abc

// 2)
function doSmth() {
    return Promise.resolve("123");
}

doSmth()
    .then(function (a) {
        console.log("1", a); // 1123
        return a;
    })
    .then(function (b) {
        console.log("2", b); // 2123
        return Promise.reject("321");
    })
    .catch(function (err) {
        console.log("3", err); // 3321
    })
    .then(function (c) {
        console.log("4", c); // 4 undefined
        return c;
    });

// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

function timedGetNumbers(arr, delay) {
    let index = 0;
    const l = arr.length
    const intervalID = setInterval(() => {
        if (index < l) {
            console.log(index);
            index++;
        } else {
            clearInterval(intervalID);
        }
    }, delay);
}

timedGetNumbers([10, 12, 15, 21], 3000);

// 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)

// Можно начиная с ES12

// БОНУС ЗАДАНИЕ
// /* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
// Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
// Promise с содержимым страницы или вызывает reject */
// fetchUrl('https://google/com&#39;)
// .then(...)
// .catch(...) // сatch должен сработать только после 5 неудачных попыток
// получить содержимое страницы внутри fetchUrl