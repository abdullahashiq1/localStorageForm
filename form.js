const saveToLocalStorage = (key, value)=>{
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(value);
    console.log(existingData);
    localStorage.setItem(key, JSON.stringify(existingData))

}
// form name 

const nameSend = () =>{
    const name = document.getElementById('name-field').value;
    // localStorage.setItem('Name', JSON.stringify(name));
    saveToLocalStorage('name', name);

}
const deleteName = () =>{
    localStorage.removeItem('name');
}

const emailSend = () =>{
    const email = document.getElementById('email-field').value;
    saveToLocalStorage('emails', email)
}
const deleteEmail = ()=>{
    localStorage.removeItem('emails')
}

const messageSend = () =>{
    const message = document.getElementById('message-field').value;
    saveToLocalStorage('messages', message)
}
const deleteMessage = ()=>{
    localStorage.removeItem('messages')
}

const resetBtn = ()=>{
    localStorage.clear()
}