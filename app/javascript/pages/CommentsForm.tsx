import React, {FC} from 'react';
import Label from "../shared/components/Label/Label";
import Input from "../shared/components/Input/Input";
import {useForm} from "react-hook-form";
import {nameValidator} from "../shared/utils/validationRules";
import Button from "../shared/components/Button/Button";
import Textarea from "../shared/components/Textarea/Textarea";
import {articlesAPI} from "../app/api/api";

interface FormComments {
    author: string
    content: string
}

interface Props {
    articleId: number
}

const CommentsForm: FC<Props> = ({articleId}) => {
    const {register, handleSubmit,  formState:{errors}} = useForm<FormComments>({
        mode: "onChange"
    });

    const onSubmit = async (data: FormComments) => {
        let comment = {article_id: articleId, ...data}
        try {
            let response = await articlesAPI.setComments(comment)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"article-card__form comments-form"} noValidate action="">
            <Label errors={errors.author?.message}>
                <Input<FormComments> name={"author"} rules={nameValidator} register={register} placeholder={"Write your name"}/>
            </Label>
            <Label errors={errors.content?.message}>
                <Textarea<FormComments> name={"content"} rules={nameValidator} register={register} placeholder={"Comment..."}/>
            </Label>
            <Button>Submit</Button>
        </form>
    );
};

export default CommentsForm;