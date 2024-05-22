import React from 'react';
import Label from "../../shared/components/Label/Label";
import Input from "../../shared/components/Input/Input";
import Textarea from "../../shared/components/Textarea/Textarea";
import {useForm} from "react-hook-form";
import { CiImageOn } from "react-icons/ci";
import {fileValidator, textareaValidator} from "../../shared/utils/validationRules";
import Button from "../../shared/components/Button/Button";

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
                <h1 className="home-page__title page-title">New Article</h1>
                <form className="article-admin-page__form">
                    <div className={"article-admin-page__image"}>
                        <Label>
                            <div className={"article-admin-page__uploader"}>
                                <CiImageOn className={"article-admin-page__uploader-icon"} />
                                {/*<img src={''} alt="Uploaded image" />*/}
                            </div>
                            <Input<ArticleAdmitForm> type={"file"} name={"file"} register={register} rules={fileValidator}/>
                       </Label>
                    </div>
                    <div className={"article-admin-page__block"}>
                        <Label>
                            <Input<ArticleAdmitForm>
                                type={"text"}
                                name={"text"}
                                register={register}
                                rules={{}}
                                placeholder={'Write title...'}
                            />
                        </Label>
                        <Label errors={errors.content?.message}>
                            <Textarea<ArticleAdmitForm>
                                name={"content"}
                                register={register}
                                rules={textareaValidator}
                                placeholder={'Write content...'}
                            />
                        </Label>
                    </div>
                </form>
                <Button>Publish</Button>
            </div>
        </div>
    );
};

export default ArticleAdmin;
