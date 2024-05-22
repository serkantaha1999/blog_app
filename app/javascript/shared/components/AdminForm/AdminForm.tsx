import React, {FC, useState} from 'react';
import Label from '../Label/Label';
import {CiImageOn} from 'react-icons/ci';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';
import {useForm} from 'react-hook-form';
import {Articles} from '../../../app/api/api-types';

export interface AdminFormType {
  image: FileList | null;
  title: string;
  content: string;
}

interface Props {
  buttonText: string;
  articleCard?: Articles;
  onSubmit: (data: AdminFormType) => void;
}

const AdminForm: FC<Props> = ({buttonText, onSubmit, articleCard = null}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<AdminFormType>({
    mode: 'onChange',
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
  React.useEffect(() => {
    if (articleCard) {
      setValue('title', articleCard.title);
      setValue('content', articleCard.content);
      setImagePreview(articleCard.image?.url || null);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit((data: AdminFormType) => onSubmit(data))}
      className="article-admin-page__form"
    >
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
            <Input<AdminFormType>
              type={'file'}
              name={'image'}
              onChange={handleFileChange}
              register={register}
              rules={{}}
            />
          </Label>
        </div>
        <div className={'article-admin-page__block'}>
          <Label>
            <Input<AdminFormType>
              type={'text'}
              name={'title'}
              register={register}
              placeholder={'Write title...'}
            />
          </Label>
          <Label errors={errors.content?.message}>
            <Textarea<AdminFormType>
              name={'content'}
              register={register}
              placeholder={'Write content...'}
            />
          </Label>
        </div>
      </div>
      <Button>{buttonText}</Button>
    </form>
  );
};

export default AdminForm;
