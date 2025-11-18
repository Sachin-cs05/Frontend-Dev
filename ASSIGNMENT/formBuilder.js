class FormBuilder {
  constructor(containerId) {
    this.containerId = containerId;
    this.fields = [];
  }

  addField(field) {
    this.fields.push(field);
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`Container with ID '${this.containerId}' not found.`);
      return;
    }

    let formHTML = '<form id="dynamicForm">';
    
    this.fields.forEach(field => {
      formHTML += '<div>';
      
      if (field.label) {
        formHTML += `<label for="${field.name || field.type}">${field.label}</label>`;
      }
      
      switch (field.type) {
        case 'text':
        case 'email':
        case 'password':
        case 'number':
          formHTML += `<input type="${field.type}" id="${field.name || field.type}" name="${field.name || field.type}"`;
          if (field.placeholder) {
            formHTML += ` placeholder="${field.placeholder}"`;
          }
          if (field.required) {
            formHTML += ' required';
          }
          formHTML += '>';
          break;
          
        case 'textarea':
          formHTML += `<textarea id="${field.name || field.type}" name="${field.name || field.type}"`;
          if (field.placeholder) {
            formHTML += ` placeholder="${field.placeholder}"`;
          }
          if (field.required) {
            formHTML += ' required';
          }
          if (field.rows) {
            formHTML += ` rows="${field.rows}"`;
          }
          if (field.cols) {
            formHTML += ` cols="${field.cols}"`;
          }
          formHTML += '></textarea>';
          break;
          
        case 'select':
          formHTML += `<select id="${field.name || field.type}" name="${field.name || field.type}"`;
          if (field.required) {
            formHTML += ' required';
          }
          formHTML += '>';
          
          if (field.options) {
            field.options.forEach(option => {
              if (typeof option === 'string') {
                formHTML += `<option value="${option}">${option}</option>`;
              } else {
                formHTML += `<option value="${option.value}"`;
                if (option.selected) {
                  formHTML += ' selected';
                }
                formHTML += `>${option.text}</option>`;
              }
            });
          }
          
          formHTML += '</select>';
          break;
          
        case 'checkbox':
        case 'radio':
          if (field.options) {
            field.options.forEach((option, index) => {
              const id = `${field.name || field.type}_${index}`;
              formHTML += `<input type="${field.type}" id="${id}" name="${field.name || field.type}" value="${option.value || option}"`;
              if (option.checked) {
                formHTML += ' checked';
              }
              formHTML += '>';
              formHTML += `<label for="${id}">${option.text || option}</label>`;
            });
          }
          break;
          
        default:
          formHTML += `<input type="text" id="${field.name || field.type}" name="${field.name || field.type}"`;
          if (field.placeholder) {
            formHTML += ` placeholder="${field.placeholder}"`;
          }
          if (field.required) {
            formHTML += ' required';
          }
          formHTML += '>';
      }
      
      formHTML += '</div>';
    });
    
    formHTML += '<button type="submit">Submit</button>';
    formHTML += '</form>';
    
    container.innerHTML = formHTML;
    
    const form = document.getElementById('dynamicForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = this.getFormData();
        console.log('Form Data:', formData);
      });
    }
  }

  getFormData() {
    const form = document.getElementById('dynamicForm');
    if (!form) return {};
    
    const formData = {};
    const elements = form.elements;
    
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      
      if (element.tagName === 'BUTTON' || !element.name) {
        continue;
      }
      
      if (element.type === 'checkbox' || element.type === 'radio') {
        if (element.checked) {
          if (element.type === 'checkbox') {
            if (!formData[element.name]) {
              formData[element.name] = [];
            }
            formData[element.name].push(element.value);
          } else {
            formData[element.name] = element.value;
          }
        }
      } else {
        formData[element.name] = element.value;
      }
    }
    
    return formData;
  }
}

/*
const formBuilder = new FormBuilder('formContainer');

formBuilder.addField({
  type: 'text',
  label: 'Username',
  name: 'username',
  placeholder: 'Enter your username',
  required: true
});

formBuilder.addField({
  type: 'email',
  label: 'Email',
  name: 'email',
  placeholder: 'Enter your email',
  required: true
});

formBuilder.addField({
  type: 'select',
  label: 'Country',
  name: 'country',
  options: [
    { value: 'us', text: 'United States' },
    { value: 'ca', text: 'Canada' },
    { value: 'uk', text: 'United Kingdom' }
  ]
});

formBuilder.render();
*/