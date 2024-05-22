import React, {useState} from 'react';
import Label from "../../shared/components/Label/Label";
import Input from "../../shared/components/Input/Input";
import Textarea from "../../shared/components/Textarea/Textarea";
import {useForm} from "react-hook-form";
import { CiImageOn } from "react-icons/ci";
import {fileValidator, textareaValidator} from "../../shared/utils/validationRules";
import Button from "../../shared/components/Button/Button";
import {useArticles} from "../../shared/context/ArticlesContext";

interface ArticleAdmitForm {
    image: FileList | null;
    title: string
    content: string
}

const ArticleAdminPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ArticleAdmitForm>({
        mode: "onChange"
    });
    const {addArticle} = useArticles()
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    return (
        <div className={'page article-admin-page'}>
            <div className="article-admin-page__container">
                <h1 className="home-page__title page-title">New Article</h1>
                <form onSubmit={handleSubmit(addArticle)} className="article-admin-page__form">
                    <div className={'article-admin-page__form-inner'}>
                        <div className={'article-admin-page__image'}>
                            <Label>
                                <div className="article-admin-page__uploader">
                                    {!imagePreview ? (
                                        <CiImageOn className="article-admin-page__uploader-icon" />
                                    ) : (
                                        <img
                                            src={imagePreview}
                                            alt="Selected"
                                        />
                                    )}
                                </div>
                                <Input<ArticleAdmitForm>
                                    type={'file'}
                                    name={'image'}
                                    onChange={handleFileChange}
                                    register={register}
                                    rules={fileValidator}
                                />
                            </Label>
                        </div>
                        <div className={'article-admin-page__block'}>
                            <Label>
                                <Input<ArticleAdmitForm>
                                    type={'text'}
                                    name={'title'}
                                    register={register}
                                    rules={{}}
                                    placeholder={'Write title...'}
                                />
                            </Label>
                            <Label errors={errors.content?.message}>
                                <Textarea<ArticleAdmitForm>
                                    name={'content'}
                                    register={register}
                                    rules={textareaValidator}
                                    placeholder={'Write content...'}
                                />
                            </Label>
                        </div>
                    </div>
                    <Button>Publish</Button>
                </form>
            </div>
        </div>
    );
};

export default ArticleAdminPage;
