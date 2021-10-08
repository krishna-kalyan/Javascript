let textareaE1= document.querySelector("#text");
let text = null;

let data = {
    words:0,
    sentences:0,
    uppercase:0,
    lowercase:0,
    spaces:0,
    digits:0,
    vowels:0,
    consonants:0,
};
const setText = () => {
    text=textareaE1.value;
    //upper case text.match(/[A-Z]/g).length
    //lower case text.match(/[a-z]/g).length
    //spaces text.match(/\s/g).length
    //digits text.match(/\d/g).length
    //vowels text.match(/[aeiou]/gi).length #gi (in case sensitive)
    //consonants text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length
    //sentences text.match(/\056/g).length  #056 octal value of .
    //words text.match(/[a-zA-Z]+/g).length #to count every words
   // console.log(text.match(/[A-Z]/g.length));
   const findLength =item => item===null? 0: item.length;

    if(text!=0){
        data.sentences = findLength(text.match(/\056/gi));
        data.words=findLength(text.match(/[a-zA-Z]+/g));
        data.spaces=findLength(text.match(/\s/g));
        data.uppercase=findLength(text.match(/[A-Z]/g));
        data.lowercase=findLength(text.match(/[a-z]/g));
        data.digits=findLength(text.match(/\d/g));
        data.vowels=findLength(text.match(/[aeiou]/gi));
        data.consonants=findLength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
    }

    localStorage.setItem("data",JSON.stringify(data));
    window.location="info.html";
};

const getData =  () => {
    return JSON.parse(localStorage.getItem("data"));
};

const showData=() => {
    let data = getData();
    let htmlContent="";

    for(item in data){
        htmlContent +=`<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}
        </div>`;
    }
    document.querySelector(".info-wrapper").innerHTML=htmlContent;
};

