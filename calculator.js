function calculator(op1,op2,func,op){
    var result = func(op1,op2,op);
    return result;
}
function operator(op1,op2,op){
    if(op2=='+')
    return op1+op2;
    else if (op=='-')
    return op1-op2;
    else if (op=='*')
    return op1*op2;
    else if (op=='/')
    return op1/op2;
    else
    return 0;
}
console.log(calculator(5,0,operator,"+s"));
