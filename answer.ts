
const isValid = (s:string):Boolean => {
    // 括弧を記憶する配列
    const stack:string[] = [];
    // 括弧のペアを登録
    const pairs:{[key:string]:string} = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            // stackが空なら対応する括弧がない為falseを返す
            if (stack.length === 0) return false;
            
            // stack中の最後に追加した括弧を取り出す
            const top = stack.pop();
            // 対応する括弧と一致しなければfalseを返す
            if (top !== pairs[char]) return false;
        }
    }
    // stackに括弧が残ってなかった場合trueを返す
    return stack.length === 0;
};


let s = '()';
console.log(isValid(s)); // true
s = '({)}'
console.log(isValid(s)); // false