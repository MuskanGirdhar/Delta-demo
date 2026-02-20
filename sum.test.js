import sum from "./sum.js";


describe("test for sum fix" ,()=>{

    test("add 2+2 =4" ,()=>{
    expect(sum(2,2)).toBe(4);
    });

      test("add -5-5 =10" ,()=>{
    expect(sum(-5,-5)).toBe(-10);
    });
})
