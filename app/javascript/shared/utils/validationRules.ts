import {RegisterOptions} from "react-hook-form";

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
