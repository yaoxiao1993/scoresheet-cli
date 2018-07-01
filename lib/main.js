module.exports = (input) => {
    function defaultPage(){
        console.log( `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`)
    }
    function outputOfInvalid1(){
        return '请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：'
    }
    function outputOfInvalid2(){
        return '请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：'
    }
    function formatInput(input){
        let inputSplit = input.split(", ")
        let infoList = [];
        let scoreSplit =[];
        let inputList = [];
        for(i = 0; i < 4; i ++){ 
            infoList.push(inputSplit[i]);
        }
        inputList = infoList;
        let scoreSet = {}
        for(i = 0; i < inputSplit.length-4; i ++){
            scoreSplit.push(inputSplit[i+4].split("："))
            scoreSet[scoreSplit[i][0]] = scoreSplit[i][1]    
        }
        inputList.push(scoreSet)
        return inputList;
    }

    let allInputList = [];
    function action1(input){
        //let input1 =   require('readline-sync').question('请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：')
        //当逗号个数大于等于4个时，认为输入了标准格式的前5项，那么格式正确；当找不到逗号，即分割符错误，或者分隔符个数不足4个，即填写内容不全，都属于格式错误
        //这只是一个粗略的判断，详细判断设计会较复杂，暂时不考虑
        let count = 0;
        for(let i in input){
            if(input[i] === ','){
                count ++;
            }
        }
        if(count >=4){
            allInputList.push(formatInput(input));
            let inputList = input.split(", ")
            return `学生${inputList[0]}的成绩被添加`
        } else{
            return outputOfInvalid1();
        }   
    }

    function action2(input){
        //let input2 = require('readline-sync').question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：')
        //当只填写一个学号时，输入长度为3，那么格式正确；当填写不止一个学号时，检查分隔符是否为“, ”，若是则格式正确。
        //这只是一个粗略的判断，详细判断设计会较复杂，暂时不考虑
        let scoreSheet = `
成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
`
        if(input.length > 3){
            for(let i in input){
                if(input[i] === ','){
                    break;
                }
            }
            let scoreTotolList = [];
            let scoreTotolTol = 0;
            let scoreTotolAvg = 0;
            let scoreTotolMid = 0;
            if(allInputList.length !== 0){
                //获取姓名和各科成绩
                for(let i in allInputList){
                    scoreSheet = scoreSheet+allInputList[i][0];
                    let courseList = ['数学','语文','英语','编程']
                    let courseCount = Object.getOwnPropertyNames(allInputList[i][4]).length;
                    //求每个人的总分
                    let scoreTotol = 0;
                    let scoreAvg = 0;
                    let k = 0;
                    for(let j in courseList){
                        if(allInputList[i][4][courseList[j]]){
                            scoreSheet = scoreSheet+'|'+allInputList[i][4][courseList[j]];
                            scoreTotol = scoreTotol + Number(allInputList[i][4][courseList[j]]);
                        }else{
                            scoreSheet = scoreSheet+'|0';
                        }
                    }
                    //console.log(allInputList[i][j]['语文'])
                    //求每个人的平均分
                    console.log(scoreTotol)
                    console.log(courseCount)
                    scoreAvg = scoreTotol/courseCount;
                    scoreSheet = scoreSheet + '|'+ scoreAvg+'|'+ scoreTotol+'\n';
                    scoreTotolList.push(scoreTotol) 
                }

                //求总分平均值
                for(let i in scoreTotolList){
                    scoreTotolTol = scoreTotolTol + scoreTotolList[i];
                }
                scoreTotolAvg = scoreTotolTol/scoreTotolList.length

                //求总分中位数
                scoreTotolList.sort(function(a,b){return a-b});
                let lowMiddle = Math.floor( (scoreTotolList.length - 1) / 2);
                let highMiddle = Math.ceil( (scoreTotolList.length - 1) / 2);
                scoreTotolMid = ((scoreTotolList[lowMiddle] + scoreTotolList[highMiddle]) / 2);
            }

            scoreSheet = scoreSheet + '========================\n总分平均数：'+scoreTotolAvg+'\n全班总分中位数：'+ scoreTotolMid
            return scoreSheet;
        } else if(input.length === 3){
            return scoreSheet;
        }else{
            return outputOfInvalid2();
        }  
    }

    //每当输入1或者2时，输出期望内容后，都会再次提示输入数字，直到输入3，程序结束
    do{
        defaultPage();
        var readlineSync = require('readline-sync');
        var answer = readlineSync.question();
        if(answer == 1){
            return action1(input);
        }else if(answer == 2){
            return action2(input);
        }else if(answer == 3){
            return '已退出';
        }else{
            return 'Bad choice, please choose again!'
        }
    }while(answer === 1 || answer === 2)   

    // require('readline-sync').promptCLLoop({
    //     1: function(input){
    //         action1(input);
            
    //     },
    //     2: function(input){
    //         action2(input);
    //     },
    //     3: function(){
    //         return true;
    //     }
    // });
}

