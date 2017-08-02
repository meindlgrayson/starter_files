// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------


let formFields =  document.getElementById('fields');

let newInputs = document.createElement('input');


function createInputs() {
  formData.forEach((ele, index, arr) => {
    if(ele.type === 'text'){
      var newText = document.createElement('input');
      newText.id = ele.id;
      newText.placeholder = ele.label;
      formFields.appendChild(newText);
    } else if(ele.type === 'email'){
        var newEmail = document.createElement('input');
        newEmail.id = ele.id;
        newEmail.placeholder = ele.label;
        formFields.appendChild(newEmail);
    } else if(ele.type === 'select'){
        var newSelect = document.createElement('select');
        newSelect.id = ele.id;
        newSelect.name = ele.label;
        formFields.appendChild(newSelect);
        var selectLabel = document.createElement('option');
        selectLabel.value = '';
        selectLabel.textContent = ele.label;
        newSelect.appendChild(selectLabel);
        ele.options.forEach((e, i, a) => {
          var newOption = document.createElement('option');
          newOption.value = e.value;
          newOption.textContent = e.label;
          newSelect.appendChild(newOption);
        })
    } else if(ele.type === 'textarea'){
      var newTextArea = document.createElement('textarea');
      newTextArea.id = ele.id;
      newTextArea.placeholder = ele.label;
      formFields.appendChild(newTextArea);
    } else if(ele.type === 'tel'){
      var newTel = document.createElement('input');
      newTel.setAttribute('type', 'tel');
      newTel.id = ele.id;
      newTel.placeholder = ele.label;
      formFields.appendChild(newTel);
    }
  })
}

createInputs();