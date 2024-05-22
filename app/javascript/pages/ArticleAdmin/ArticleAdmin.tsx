import React, {useState} from 'react';
import Label from "../../shared/components/Label/Label";
import Input from "../../shared/components/Input/Input";
import Textarea from "../../shared/components/Textarea/Textarea";
import {useForm} from "react-hook-form";
import { CiImageOn } from "react-icons/ci";
import {fileValidator, textareaValidator} from "../../shared/utils/validationRules";
import Button from "../../shared/components/Button/Button";

interface ArticleAdmitForm {
    file: FileList | null;
    text: string
    content: string
}

const ArticleAdmin = () => {
    const {register, formState: {errors}} = useForm<ArticleAdmitForm>({
        mode: "onChange"
    });
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
          <form className="article-admin-page__form">
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
                  name={'file'}
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
                  name={'text'}
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
          </form>
          <Button>Publish</Button>
        </div>
      </div>
    );
};

export default ArticleAdmin;
