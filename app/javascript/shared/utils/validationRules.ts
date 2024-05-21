import {RegisterOptions} from "react-hook-form";

export const emailValidate = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])")
export const upperLetter = /^(?=.*[A-Z])/;
export const lowerLetter = /^(?=.*[a-z])/
export const passNumber =  /^(?=.*\d)/;
export const passUniqueSymbol = /^(?=.*[!@#$%^&*])/

export const nameValidator: RegisterOptions = {
    required: "Name is required! Please write your name!",
    maxLength: {
        value: 20,
        message: "The author's name is too long! Please enter valid name!"
    },
    minLength: {
        value: 3,
        message: "The author's name is too short! Please enter valid name!"
    },
    validate: {
        hasUpperCase: (value: string) => upperLetter.test(value) || "The author's name must contain one or more Uppercase letters!",
        hasLowerCase: (value: string) => lowerLetter.test(value) || "The author's name must contain one or more Lowercase letters!",
    }
}

export const messageValidator = {
    required: 'Message is required. Please write your text!',
    minLength: {
        value: 10,
        message: 'Message must be at least 10 characters long'
    },
    maxLength: {
        value: 500,
        message: 'Message must be at most 500 characters long'
    }
}

export const passwordValidator: RegisterOptions = {
    required: "You don't write password!",
    minLength: {
        value: 4,
        message: "Your password is too short! Please enter a password of more than 4 characters!"
    },
    validate: {
        hasNumber: (value) => passNumber.test(value) || "Password must contain one or more Numbers!",
        hasUpperCase: (value) => upperLetter.test(value) || "Password must contain one or more Uppercase letters!",
        hasLowerCase: (value) => lowerLetter.test(value) || "Password must contain one or more Lowercase letters!",
        hasSymbol: (value) => passUniqueSymbol.test(value) || "Password must contain one or more Special symbols!"
    }
}

export const emailValidator = {
    required: "Email is required! Please write your email!",
    pattern: {
        value: emailValidate,
        message: "Email is not valid! Please enter valid email!"
    }
}
