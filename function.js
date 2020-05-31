//Пересечение параболы ax2+bx+c с функцией | |x|-d|, где d –
//вещественное число.
//

const findCrossPoint = (a,b,c,d)=>{
//раскрытие дискриминантов в зависимости от знаков модулей
//|x| +, outside +
let discr1 = Math.pow(b - 1, 2) - 4 * a * (c + d);
//|x| -, outside +
let discr2 = Math.pow(b + 1, 2) - 4 * a * (c + d);
//|x| +, outside -
let discr3 = Math.pow(b + 1, 2) - 4 * a * (c - d);
//|x| -, outside -
let discr4 = Math.pow(b - 1, 2) - 4 * a * (c - d);

const countRoots = (signOne, discr) => {
    switch (true) {
        case discr > 0:
            let x1 = (signOne * 1 - b + Math.sqrt(discr)) / (2 * a);
            let x2 = (signOne * 1 - b - Math.sqrt(discr)) / (2 * a);
            return {
                x1,
                y1: a * Math.pow(x1, 2) + b * x1 + c,
                x2,
                y2: a * Math.pow(x2, 2) + b * x2 + c
            }
        case discr == 0:
            let x = (signOne * 1 - b) / (2 * a);
            return {
                x,
                y: a * Math.pow(x, 2) + b * x + c
            }
        default:
            return 'there are no roots';
    }
};

//Результаты вычислений всех возможных вариантов
let result1 = countRoots(1, discr1);
console.log(result1);
let result2 = countRoots(-1, discr2);
console.log(result2);
let result3 = countRoots(-1, discr3);
console.log(result3);
let result4 = countRoots(1, discr3);
console.log(result4);
}

let a = 3;
let b = 7;
let c = 3;
let d = 1;

findCrossPoint(a,b,c,d);
findCrossPoint(7,3,3,1);

//export default findCrossPoint;

