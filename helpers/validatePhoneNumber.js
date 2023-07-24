import validator from "validator";


export function isMessageEmpty(msg) {
    if(!msg || validator.isEmpty(msg) || msg.length < 2)
       return true;
    return false;
}


export function isInputValidDate(dateInput) {
    const _dateInput = new Date(dateInput)
    if(!_dateInput || !validator.isDate(_dateInput))
       return false;
    return true;
}
export function isInputBoolean(dataInput) {
    if(!dataInput || !validator.isBoolean(dataInput))
       return false;
    return true;
}
export function isInputNumber(dataInput) {
    if(!dataInput ||  !validator.isNumeric(dataInput.toString()))
       return false;
    return true;
}

export function isValidPhoneNumber(phoneNumber){
 
    if(validator.isEmpty(phoneNumber))
        return false
    if(!validator.isNumeric(phoneNumber))
        return false;
    if(phoneNumber.startsWith('09') && phoneNumber.length === 10){
        // eslint-disable-next-line no-unused-vars
        return true;
    }else if(phoneNumber.startsWith('2519') && phoneNumber.length === 12){
        return true;
    }else if(phoneNumber.startsWith('25109') && phoneNumber.length === 13){
            return true;
    }else if(phoneNumber.startsWith('+2519') && phoneNumber.length === 13){
        return true
    }else if(phoneNumber.startsWith('+25109') && phoneNumber.length === 14){
       return true
    }else if(phoneNumber.startsWith('9') && phoneNumber.length === 9){
        return true;
    }
    return false;
}

export function getCorrectPhoneNumber(phoneNumber){
 
    if(phoneNumber.startsWith('2519') && phoneNumber.length === 12){
        return "0" + phoneNumber.slice(3, phoneNumber.length)
    }else if(phoneNumber.startsWith('+2519') && phoneNumber.length === 13){
        return "0" + phoneNumber.slice(4, phoneNumber.length)
    }else if(phoneNumber.startsWith('+25109') && phoneNumber.length === 14){
        return "0" + phoneNumber.slice(5, phoneNumber.length)
    }else if(phoneNumber.startsWith('25109') && phoneNumber.length === 13){
        return "0" + phoneNumber.slice(4, phoneNumber.length)
    }else if(phoneNumber.startsWith('9') && phoneNumber.length === 9){
       return "0" + phoneNumber
    }
    
    return phoneNumber;
}