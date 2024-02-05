// 1) Подробно прочитать про метод запроса OPTIONS - и кратко его описать, когда вызывается, где используется, что передает и принимает. 

// Такой запрос отправляется для определения возможностей сервера или того,
// какое взаимодействие разрешено с конкретным ресурсом, без необходимости совершать определенное действие.
// используется для получения метаданных
// может также применяться для проверки работоспособности сервера
// содержит: 
// Host
// Accept
// Accept-Language
// Accept-Encoding
// Accept-Charset
// Connection
// Origin
// Access-Control-Request-Method
// Access-Control-Request-Headers

// 2) Прочитать и описать ключевые особенности "HTTP" Версии 3.0

// Ключевые особенности HTTP 3.0:
// делает HTTP совместимым с QUIC
// переходит от TCP к  UDP

// 3) Прочитать про способы отмены запроса, включая объект "AbortController"

// экземпляр AbortController позволяет получить эксземпляр экземпляр AbortSignal,
// который может быть использован для коммуникаций/остановки DOM запросов через AbortController.abort()

// 4) Написать по 2 примера создания примитивных значений (если есть несколько способов - использовать) (string, number, boolean, null, undefined, symbol, bigInt)

const string1 = "string"
const string2 = `string`
const string3 = 'string'
const string4 = String("string")

const number1 = 9
const number2 = Number(9)

const bool1 = true
const bool2 = Boolean(true)

const null1 = null

const und1 = undefined
let und2 // value is undefined

const symb1 = Symbol('a')
const symb2 = Symbol.for('a')

const bigInt1 = BigInt(9007199254740991)
const bigInt2 = 9007199254740991n

// 5) Почему, если обратиться к переменным созданным через let, const до их объявления - мы получаем ReferenceError?

// Объект ReferenceError представляет ошибку, возникающую при обращении к переменной, которая не существует (или не была инициализирована) в текущей области видимости.

// 6) Решить: 

// const res = "B" + "a" + (1 - "hello");
// console.log(res); // операция number c string дает NaN, с которым происходит конкатенация string "B" и "a" => BaNaN

// const res2 = (true && 3) + "d";
// console.log(res2); // так как все значения в операции конъюкции истиноподобны, возвращается последнее из них (3). При конкатенации с "d" => 3d

// const res3 = Boolean(true && 3) + "d";
// console.log(res3); // так как все значения в операции конъюкции истиноподобны, Boolean(3) преобразовывается в true => trued