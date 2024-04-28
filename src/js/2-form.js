const LOCAL_STORAGE_KEY = 'feedback-form-state';
const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
}
refs.userEmail = refs.feedbackForm.elements.email;
refs.userMessage = refs.feedbackForm.elements.message;
const formData = {
    email: '',
    message: '',
}


refs.feedbackForm.addEventListener('submit', submitHandler)
refs.feedbackForm.addEventListener('input', inputHandler)

function inputHandler(event) {
    const changedInputName = event.target.name;
    const newValue = event.target.value;

    formData[changedInputName] = newValue;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData))
}

function submitHandler(event) {
    event.preventDefault();

    formData.email = formData.email?.trim();
    formData.message = formData.message?.trim();

    if (!formData.email || !formData.message) {
        return alert('Fill please all fields');
    }
    console.log(formData);

    localStorage.removeItem(LOCAL_STORAGE_KEY);

    formData.email = '';
    formData.message = '';

    refs.feedbackForm.reset();
}

if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
    const parsedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    refs.userEmail.value = parsedData.email;
    refs.userMessage.value = parsedData.message;

    formData.email = parsedData.email;
    formData.message = parsedData.message;
}