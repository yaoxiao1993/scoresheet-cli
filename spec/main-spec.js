let sinon = require("sinon");
let main = require("../lib/main");

describe('main()', () => {

//     it('should display main menu once started', () => {
//         sinon.spy(console, 'log');
//         main();
//         expect(console.log.args.join()).toBe(`
// 1. 添加学生
// 2. 生成成绩单
// 3. 退出
// 请输入你的选择（1～3）：
// `);
//     })

    it('choose 1 and input formate is right, should display student is added', () => {
        let input =  'yaoxiao, 001, 汉, 1, 语文：90, 数学：100'
        display = main(input);
        expect(display).toBe('学生yaoxiao的成绩被添加')
    })

//     it('choose 1 and input formate is wrong, should display tips', () => {
//         let input =  'yaoxiao, 001, 汉, 1'
//         display = main(input);
//         expect(display).toBe('学生yaoxiao的成绩被添加')
//     })

//     it('choose 1 and input formate is wrong, should display tips', () => {
//         let input =  'yaoxiao 001 汉 1 语文：90 数学：100'
//         display = main(input);
//         expect(display).toBe('学生yaoxiao的成绩被添加')
//     })
    
    it('choose 2 and input format is right, should display score sheet', () => {
        let input =  '001, 001'
        display = main(input);
        expect(display).toBe(`
成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
========================
总分平均数：0
全班总分中位数：0`)
})

//     it('choose 1-2-1-2 and input format is right, should display score sheet', () => {
//         let input =  '001, 001'
//         display = main(input);
//         expect(display).toBe(`
// 成绩单
// 姓名|数学|语文|英语|编程|平均分|总分 
// ========================
// yaoxiao|100|90|0|0|95|190
// yaoxiao|100|90|0|0|95|190
// ========================
// 总分平均数：190
// 全班总分中位数：190`)
// })

//     it('choose 1-1-2-2 and input format is right, should display score sheet', () => {
//         let input =  '001, 001'
//         display = main(input);
//         expect(display).toBe(`
// 成绩单
// 姓名|数学|语文|英语|编程|平均分|总分 
// ========================
// yaoxiao|100|90|0|0|95|190
// yaoxiao|100|90|0|0|95|190
// ========================
// 总分平均数：190
// 全班总分中位数：190`)
// })

})
