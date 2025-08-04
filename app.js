let input= document.getElementById("input")
let button= document.getElementById("submit")
let errorMessage = document.getElementById("error");
let Output =document.getElementById("output");
const romanObject={
    M: 1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    XXX:30,
    XX:20,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1,
};

button.addEventListener("click",()=>{
    inputTORoman(input.value);
    input.value=""
});
function inputTORoman(num){
    let number = parseInt(num);

    if(num.trim().lenght == 0){
        errorMessage.innerHTML = "Invalide Input"
            Output.innerHTML = "";

            return false;

    }
    if(number >4999 || number < 1){
        errorMessage.innerHTML = "input Out Of Range";
                    Output.innerHTML = "";

        return false;
    }
    errorMessage.innerHTML="";
    Output.innerHTML="";

    let result = "";
    let remanValues= Object.keys(romanObject);
    remanValues.forEach((key)=>{
        while(romanObject[key] <= number){
            number -=romanObject[key];
            result +=key;
        }
    }
    );
    Output.innerHTML = result;
}