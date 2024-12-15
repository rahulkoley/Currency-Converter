


//Currency Converter App using API
// let baseURL='https://api.frankfurter.app/latest?base=USD&symbols=INR';
let dropdowns= document.querySelectorAll('.drop-down select');

// for(let code in countryList){
//     console.log(`${code} : ${countryList[code]}`);
// }
const curBtn=document.querySelector('#convert');

for(let select of dropdowns){
    
    for(let currcode in countryList){
            // console.log(`${currcode} : ${countryList[currcode]}`);
            let newOption= document.createElement('option');
            newOption.innerText=currcode;
            newOption.value=currcode;
            if(select.name==='from' && currcode==='USD'){
                newOption.selected='selected';
            }
            if(select.name==='to' && currcode==='INR'){
                newOption.selected='selected';
            }
            select.appendChild(newOption);
            // console.log(newOption);
        }
      
        select.addEventListener('change', (evt)=>{
            updateflag(evt.target);
            
        });
}



const updateflag=(element)=>{
    
    let flagCode= countryList[element.value];
    
    if(element.name==='to'){//OR let imgSel= element.parentElement.querySelecror('img); then imgSel.src="url". through we can change src of image
        let newSrc=`https://flagsapi.com/${flagCode}/flat/64.png`
        document.querySelector('.to .select-container img').src=newSrc;
    }
    else if(element.name==='from'){
        let newSrc=`https://flagsapi.com/${flagCode}/flat/64.png`
        document.querySelector('.from .select-container img').src=newSrc;
    }
    else{
        console.log('Nothing change')
    }
}




curBtn.addEventListener('click', async (evtt)=>{
    evtt.preventDefault();
let amountValue=document.querySelector('.amount input').value;
console.log(amountValue);
let fromCurr=document.querySelector('.from  select').value.toLowerCase();
let toCurr=document.querySelector('.to  select').value.toLowerCase();
if(amountValue==='' || amountValue<1){
    amountValue=1;
    
}

let baseURL=`https://api.frankfurter.app/latest?base=${fromCurr}&symbols=${toCurr}`;

try{
    let getResponse=await fetch(baseURL);//here not used async function because eventlistener function declared as async
    if(!getResponse.ok){
        throw new Error(`Error: ${getResponse.status}`);
    }
    console.log(getResponse);
    let jsnData=await getResponse.json();
    console.log(jsnData);
    console.log(jsnData.rates);
    let exchRate=jsnData.rates[toCurr.toUpperCase()];//
    let exchVal=amountValue*exchRate;
    console.log(exchVal);
    document.querySelector('#showRate').innerText=`${amountValue} ${fromCurr.toUpperCase()} = ${exchVal} ${toCurr.toUpperCase()}`;
    
}
    catch(errr){
        console.log('failed to fetch error', errr);
    }


})

//Example
const promiseOne= new Promise(function(resolve, reject){
//Do an async task
//DB calls Cryptography, network
setTimeout(() => {
    console.log('Async task is complete');
    resolve({username: 'Rahul', email:'rahul@example.com'});
    // reject();//here it will print only above "Async task is complete" but not the below text "Promise consumed". Because it is rejecting to print.
}, 1000);
})

promiseOne.then((user)=>{//promise without .then() will not work
    console.log('Promise consumed');
    console.log(user);
})

const promise2= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({user:'nexus',pass:'123'});
        }
        else{
            reject('something error occured');
        }
    }, 2000)
})

promise2.then((user)=>{
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('promise is either resolve or reject');
})

const promise3= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({user:'javascript',pass:'456'});
        }
        else{
            reject('something error occured in JS code');
        }
    }, 2000)
})

async function consme(){
    try {
        let respons= await promise3;
    console.log(respons);
    } catch (error) {
        console.log(error)
    }
    
}

consme();


