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

// var isInputEmpty = function(input) {
//     if(input === ''){
//         return true;
//     } else {
//         return false;
//     }
// }

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

    elResult.innerHTML = '';

    for(var i = 0; i < listOfInfos.length; i++) {
        var Listli = document.createElement('li');
        Listli.classList.add('js-results__item', 'list-group-item');

        var elContactsFullName = document.createElement('div')
        elContactsFullName.classList.add('js-results__fullname')
        elContactsFullName.textContent = `${listOfInfos[i].name} ${listOfInfos[i].surname}`;
        
        var elContactsRelationship = document.createElement('div')
        elContactsRelationship.classList.add('js-results__relationship', 'small')
        elContactsRelationship.textContent = listOfInfos[i].contact;
        
        var elContactsPhone = document.createElement('a')
        elContactsPhone.classList.add('js-results__phone-number')
        elContactsPhone.textContent = listOfInfos[i].phone;
        elContactsPhone.href = `tel: ${listOfInfos[i].phone}`;
        
        Listli.appendChild(elContactsFullName);
        Listli.appendChild(elContactsRelationship);
        Listli.appendChild(elContactsPhone);
        
        elResult.appendChild(Listli);        
    }

})
