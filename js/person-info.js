var listOfInfos = [];

// taking html elements 
var elInfoForm = $_('.js-form-info');
var elNameInput = $_('.js-fname-input', elInfoForm);
var elSurnameInput = $_('.js-surname-input', elInfoForm);
var elNumInput = $_('.js-num-input', elInfoForm);
var elContactInput = $_('.js-contact-input', elInfoForm);
var elSendButton = $_('.js-send-btn', elInfoForm);
var elResult = document.querySelector('.js-result')

var createContactObject = function(name, surname, phone, contact) {
    return {
        // ES 5
        // name: name,   
        // surname: surname,
        // phone: phone,
        // contact: contact
        // ES 6
        name, 
        surname,
        phone,
        contact
    }
}

var renderContactsList = function () {
    elResult.innerHTML = '';

    //for each contact creating new element and adding to the list of html
    // for(var i = 0; i < listOfInfos.length; i++) {
        listOfInfos.forEach(function(listInfo){

        // var Listli = document.createElement('li');
        // Listli.classList.add('js-results__item', 'list-group-item');

        var Listli = createElementFunc('li', 'js-results__item list-group-item');

        // var elContactsFullName = document.createElement('div')
        // elContactsFullName.classList.add('js-results__fullname')
        // elContactsFullName.textContent = `${listInfo.name} ${listInfo.surname}`; in for loop we used to write listInfos[i] but with for each jus listInfo which stands for every contact of that array!!!

        var elContactsFullName = createElementFunc('div', 'js-results__fullname', `${listInfo.name} ${listInfo.surname}`);
        
        // var elContactsRelationship = document.createElement('div')
        // elContactsRelationship.classList.add('js-results__relationship', 'small')
        // elContactsRelationship.textContent = listInfo.contact;

        var elContactsRelationship = createElementFunc('div', 'js-results__relationship small', listInfo.contact)
        
        // var elContactsPhone = document.createElement('a')
        // elContactsPhone.classList.add('js-results__phone-number')
        // elContactsPhone.textContent = listInfo.phone;
        
        var elContactsPhone = createElementFunc('a', 'js-results__phone-number', listInfo.phone)
        elContactsPhone.href = `tel: ${listInfo.phone}`;
        
        Listli.appendChild(elContactsFullName);
        Listli.appendChild(elContactsRelationship);
        Listli.appendChild(elContactsPhone);
        
        elResult.appendChild(Listli);
    })   
}

// var isInputEmpty = function(input) {
//     if(input === ''){
//         return true;
//     } else {
//         return false;
//     }
// }

var clearInputValues = function() {
    elNameInput.value = '';
    elSurnameInput.value = '';
    elNumInput.value = '';
    elContactInput.value = '';
}


elInfoForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    // var newList = {}; on the top we created function which returns array so that's way we dont need this

    var name = elNameInput.value.trim();
    var surname = elSurnameInput.value.trim();
    var phone = elNumInput.value.trim();
    var contact = elContactInput.value.trim();
    
    // on the top we gave values to the name,surname,phone,contact of array

    // newList.name = name;
    // newList.surname = surname;
    // newList.phone = phone;
    // newList.contact = contact;
    
    //additional function

    // if (isInputEmpty(name)){
    //     return;
    // }

    listOfInfos.push(createContactObject(name, surname, phone, contact));

    renderContactsList();
    clearInputValues();
         
    // }

})
