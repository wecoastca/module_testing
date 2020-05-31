import findCrossPoint from './function';
import assert from 'chai';

describe("check float values", () => {
    let a = 3.0;
    let b = 2.5;
    let c = 1.8;
    let d = 7;
    it("floating values", () => {
        findCrossPoint(
            isFloat(a),
            isFloat(b),
            isFloat(c),
            isFloat(d)
        )
    });
});

describe("a koeff", () => {
    it("check that a = 0", () => {
        let a = 0;
        let b = 2.5;
        let c = 1.8;
        let d = 7;

        assert.isTrue(findCrossPoint(a, b, c, d), 'there are no errors with line');

    });

    it("check that a != 0", () => {
        let a = 6;
        let b = 2.5;
        let c = 1.8;
        let d = 7;

        assert.isObject(findCrossPoint(a, b, c, d), 'value is object with roots');
    });

    it("check a = 0.01", () => {
        let a = 0.01;
        let b = 2.5;
        let c = 1.8;
        let d = 7;

        assert.isObject(findCrossPoint(a, b, c, d), 'value is object with roots');
    });

    it("check a = -0.01", () => {
        let a = -0.01;
        let b = 2.5;
        let c = 1.8;
        let d = 7;

        assert.isObject(findCrossPoint(a, b, c, d), 'value is object with roots');
    });
});

describe("check discriminant", () => {
    it("D=0 has single result", () => {
        assert.include(findCrossPoint(3, 4, 1, 8), { x: 5, y: 3.74 });
    });

    it("D>0 has multiple results", () => {
        assert.include(findCrossPoint(5, 3, 8, 1),
            {
                x1: -0.3693980625181293,
                y1: 1.3693980625181292,
                x2: -0.7734590803390136,
                y2: 1.7734590803390136
            }
        );
    });

    it("D<0 there are no roots", ()=>{
        assert.isString(findCrossPoint(7,3,3,1), "proof that no roots");
    });

    it("D=0.01", ()=>{
        assert.isObject(findCrossPoint(4.95,3.01,3.943924,1), "roots exist");
    });

    it("D=-0.01", ()=>{
        assert.isObject(findCrossPoint(0.001,0.04,21,1), "roots exist");
    });

    it("D>0.01", ()=>{
        assert.isObject(findCrossPoint(32,4,2,1), "roots exist");
    });

    it("D>-0.01", ()=>{
        assert.isObject(findCrossPoint(32,4,2,1), "roots exist");
    });

    it("D<0.01", ()=>{
        assert.isString(findCrossPoint(32,4,2,1), "roots no exist");
    });

    it("D<-0.01", ()=>{
        assert.isString(findCrossPoint(32,4,2,1), "roots no exist");
    });

})