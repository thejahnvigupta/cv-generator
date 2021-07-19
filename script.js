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
