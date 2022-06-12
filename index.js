// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
    }
saturdayFun("I want to bathe my dog")

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(result) {
    const innerFunction = function (part1) {
       return `You are ${result}${part1}${result}!`

    }

    return innerFunction;
}