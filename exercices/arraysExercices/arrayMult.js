const arr1 = [[1,2], 2, 3];

const copiaArray = (arr1) =>{
    const copia = [];
    arr1.forEach((elem) =>{
        if(Array.isArray(elem)){
          copia.push(copiaArray(elem));  
        }else
            copia.push(elem);
    })
    return copia;
}
const arr2 = copiaArray(arr1);

arr1[0][0] = 5;

console.log(arr1);
console.log(arr2);

//exemplo
const cpfs = ['123456789' , '34535353553', '12424356235', '12434242'];

const result = cpfs.map(cpf => typeof cpf === 'string' ? cpf : cpf.toString());

console.log(result);