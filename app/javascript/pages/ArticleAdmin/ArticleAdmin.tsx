import React from 'react';
import Label from "../../shared/components/Label/Label";
import Input from "../../shared/components/Input/Input";
import Textarea from "../../shared/components/Textarea/Textarea";
import {useForm} from "react-hook-form";
import {fileValidator, textareaValidator} from "../../shared/utils/validationRules";

interface ArticleAdmitForm {
    file: string
    text: string
    content: string
}

const ArticleAdmin = () => {
    const {register, formState: {errors}} = useForm<ArticleAdmitForm>();
    return (
        <div className={"page article-admin-page"}>
            <div className="article-admin-page__container">
                <form className="article-admin-page__form">
                   <Label>
                       <input type="file"/>
                       <Input<ArticleAdmitForm> type={"file"} name={"file"} register={register} rules={fileValidator}/>
                   </Label>
                    <div className={"article-admin-page__block"}>
                        <Label>
                            <input type="text" className={"input"}/>
                            <Input<ArticleAdmitForm> type={"text"} name={"text"} register={register} rules={{}}/>
                        </Label>
                        <Label errors={errors.content?.message}>
                            <textarea className={"textarea"}/>
                            <Textarea<ArticleAdmitForm> name={"content"} register={register} rules={textareaValidator}/>
                        </Label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArticleAdmin;