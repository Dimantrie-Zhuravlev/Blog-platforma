import React from "react";
import "./CreateArticleForm.scss";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import cn from "classnames";

import { IStateUser } from "../../types/StateRedux";
import { ICreateArticle } from "../../types/FormTypes";
import { fetchPostNewArticle } from "../../services/Articles";

const CreateArticleForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICreateArticle>({ mode: "onSubmit" });

  const token = useSelector((state: IStateUser) => state.user.user.token);

  const onSubmit = handleSubmit((data) => {
    const post = {
      article: {
        title: data.title,
        description: data.description,
        body: data.text,
        tagList: [data.tags],
      },
    };
    console.log(post, token);
    fetchPostNewArticle(post, token);
    reset();
  });
  return (
    <div className="new-article">
      <div className="new-article__container">
        <h2>Create New Article</h2>
        <form onSubmit={onSubmit}>
          {/* title */}
          <label>
            Title
            <input
              className={cn(
                { "error-input": errors?.title?.message },
                { "no-margin": errors?.title?.message }
              )}
              type="text"
              placeholder="Title"
              {...register("title", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 1,
                  message: "Your user name needs to be at least 1 characters.",
                },
                maxLength: {
                  value: 40,
                  message: "Your user name must be no more than 40 characters.",
                },
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^[a-z, а-я]{1,40}$/i,
                  message: "invalid type pattern",
                },
              })}
            />
          </label>
          <div>
            {errors?.title && <p>{`${errors?.title?.message}` || "Error!"}</p>}
          </div>
          {/* Description */}
          <label>
            Short Desription
            <input
              className={cn(
                { "error-input": errors?.description?.message },
                { "no-margin": errors?.description?.message }
              )}
              type="text"
              placeholder="Short Desription"
              {...register("description", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^[a-z, а-я]{1,40}$/i,
                  message: "invalid type pattern",
                },
                minLength: {
                  value: 1,
                  message:
                    "Your description needs to be at least 1 characters.",
                },
              })}
            />
          </label>
          <div>
            {errors?.description && (
              <p>{`${errors?.description?.message}` || "Error!"}</p>
            )}
          </div>
          {/* Text */}
          <label>
            Text
            <textarea
              placeholder="Password"
              className={cn(
                { "error-input": errors?.text?.message },
                { "no-margin": errors?.text?.message }
              )}
              {...register("text", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 6,
                  message: "Your password needs to be at least 6 characters.",
                },
                maxLength: {
                  value: 40,
                  message: "Your user name must be no more than 40 characters.",
                },
              })}
            />
          </label>
          <div>
            {errors?.text && <p>{`${errors?.text?.message}` || "Error!"}</p>}
          </div>
          {/* just one password */}
          <label>
            Tags
            <input
              type="text"
              placeholder="Tags"
              className={cn(
                { "error-input": errors?.tags?.message },
                { "no-margin": errors?.tags?.message }
              )}
              {...register("tags", {
                required: "Поле обязательно к заполнению",
              })}
            />
          </label>
          <div>{errors?.tags && <p>{"Passwords do not match!"}</p>}</div>
          {/* button submit */}
          <input
            type="submit"
            className="new-article__submit"
            value={`Send`}
            // disabled={!isValid}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default CreateArticleForm;
