import React from 'react';
import Label from "../shared/components/Label/Label";
import Input from "../shared/components/Input/Input";
import {useForm} from "react-hook-form";
import {nameValidator} from "../shared/utils/validationRules";
import Button from "../shared/components/Button/Button";
import Textarea from "../shared/components/Textarea/Textarea";

interface FormComments {
    author: string
    content: string
}

const CommentsForm = () => {
    const {register, handleSubmit,  formState:{errors}} = useForm<FormComments>({
        mode: "onChange"
    });

    const onSubmit = (data: FormComments) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"article-card__form comments-form"} noValidate action="">
            <Label errors={errors.author?.message}>
                <Input<FormComments> name={"author"} rules={nameValidator} register={register} placeholder={"Write your name"}/>
            </Label>
            <Label errors={errors.content?.message}>
                <Textarea placeholder={"Comment...."}/>
            </Label>
            <Button>Submit</Button>
        </form>
    );
};

export default CommentsForm;