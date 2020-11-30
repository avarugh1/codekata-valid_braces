function validBraces(braces){
    if((braces.length < 2) || ((braces.length % 2) !== 0)){
        return false;
    }

    let stack = [];
    let pushTo = ["(", "[", "{"];
    let popTo = [")", "]", "}"];
    for(let i = 0; i < braces.length;i++){
        let curChar = braces.charAt(i);

        if(pushTo.includes(curChar)){
            stack.push(curChar);
        }else if(popTo.includes(curChar)){
            let top = stack.pop();
            if((top === undefined) || ((curChar.charCodeAt(0) - top.charCodeAt(0)) > 3)){
                return false;
            }
        }else{
            return false // not a valid char
        }
    }

    return (stack.length === 0);
}

let trueArr = ["(){}[]", "([{}])"];
for(let i = 0; i < trueArr.length;i++){
    console.log(validBraces(trueArr[i]));
}

let falseArr = ["(}", "[(])", "[({})](]"]
for(let i = 0; i < falseArr.length;i++){
    console.log(validBraces(falseArr[i]));
}