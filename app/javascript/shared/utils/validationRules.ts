import {RegisterOptions} from "react-hook-form";

export const emailValidate = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])")
export const upperLetter = /^(?=.*[A-Z])/;
export const lowerLetter = /^(?=.*[a-z])/

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

export const fileValidator = {
    required: "The field is required! Please download file!"
}

export const textareaValidator = {
    required: 'The field is required. Please write your text!',
    minLength: {
        value: 10,
        message: 'The field must be at least 10 characters long'
    },
    maxLength: {
        value: 500,
        message: 'The field must be at most 500 characters long'
    }
}

export const passwordValidator: RegisterOptions = {
    required: "You don't write password!",
    minLength: {
        value: 7,
        message: "Your password is too short! Please enter a password of more than 7 characters!"
    }
}

export const emailValidator = {
    required: "Email is required! Please write your email!",
    pattern: {
        value: emailValidate,
        message: "Email is not valid! Please enter valid email!"
    }
}
