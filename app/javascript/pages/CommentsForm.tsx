import React from 'react';
import Label from "../shared/components/Label/Label";
import Input from "../shared/components/Input/Input";

const CommentsForm = () => {
    return (
        <form className={"comments-form"} noValidate action="">
            <Label>
                <Input placeholder={"Write your name"}/>
            </Label>
            <textarea placeholder={"Comment...."} className={"textarea"}></textarea>
            <button className={"submit-button"}>Submit</button>
        </form>
    );
};

export default CommentsForm;