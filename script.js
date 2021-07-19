function addNewWEField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute('placeholder', "Add more work experience");
    newNode.setAttribute('rows',3);

    let weOb=document.getElementById('we');
    let weAddButonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButonOb);
}

function addNewAQField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.setAttribute('placeholder', "Add more academic qualifications");
    newNode.setAttribute('rows',3);

    let weOb=document.getElementById('aq');
    let weAddButonOb=document.getElementById('aqAddButton');

    weOb.insertBefore(newNode, weAddButonOb);
}
//generating CV
function generateCV()
{
    //console.log("generating CV");

    let nameField = document.getElementById("nameField").value;

    let nameT1= document.getElementById('nameT1')

    nameT1.innerHTML = nameField;

    //direct
    document.getElementById("nameT2").innerHTML = nameField;
    //contact
    document.getElementById("contactT").innerHTML=document.getElementById(
        "contactField"
    ).value;
    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    //fb
    document.getElementById("fbT").innerHTML=document.getElementById(
        "fbField"
    ).value;
    //insta
    document.getElementById("instaT").innerHTML=document.getElementById(
        "igField"
    ).value;
    //linked
    document.getElementById("LinkedT").innerHTML=document.getElementById(
        "linkedinField"
    ).value;

    //objective

    document.getElementById("objectiveT").innerHTML = document.getElementById(
        "objectiveField"
    ).value;

    // work exp
    // as there can be more than 1 work exp, therefore 
    //storing those objects in an array 
    let wes= document.getElementsByClassName('weField'); 

    let str= '';                 //to create li
    for(let e of wes)
    {
        str= str+ `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //Academic Qualification 
    let aqs= document.getElementsByClassName("eqField");

    let str1= "";

    for(let e of aqs)
    {
        str1= str1 + `<li> ${e.value}</li>`;
    }

    document.getElementById("aqT").innerHTML=str1;


    document.getElementById("cv-form").style.display="none"
    document.getElementById("cv-template").style.display = "block";
}

//print CV
function printCV(){
    window.print();
}
