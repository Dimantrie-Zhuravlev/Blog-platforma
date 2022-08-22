import React from "react";
import "./CreateArticleForm.scss";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import cn from "classnames";

import { ICreateArticle } from "../../types/FormTypes";
// import { fetchregisterUser } from "../../services/usersAuthentication";

const CreateArticleForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICreateArticle>({ mode: "onSubmit" });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // const user = {
    //   user: {
    //     username: data.username,
    //     email: data.email,
    //     password: data.password,
    //   },
    // };
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
              className={cn({ "error-input": errors?.title?.message })}
              type="text"
              placeholder="Title"
              {...register("title", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 1,
                  message: "Your user name needs to be at least 1 characters.",
                },
                maxLength: {
                  value: 20,
                  message: "Your user name must be no more than 20 characters.",
                },
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^[a-z]{1,20}$/i,
                  message: "invalid user name",
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
              className={cn({ "error-input": errors?.description?.message })}
              type="text"
              placeholder="Short Desription"
              {...register("description", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^[a-z]{1,20}$/i,
                  message: "invalid email address",
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
              className={cn({ "error-input": errors?.text?.message })}
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
              className={cn({ "error-input": errors?.tags?.message })}
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
