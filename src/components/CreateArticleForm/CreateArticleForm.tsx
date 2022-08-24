import React from "react";
import "./CreateArticleForm.scss";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import cn from "classnames";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import { IStateUser } from "../../types/StateRedux";
import { ICreateArticle } from "../../types/FormTypes";
import { fetchPostNewArticle, fetchEditArticle } from "../../services/Articles";

interface ILocation {
  title: string;
  description: string;
  body: string;
}

const CreateArticleForm = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const location = useLocation();
  const stateLoc = location.state as ILocation;
  // console.log(stateLoc.title);
  const NamePage =
    location.state === null
      ? "Create New Article"
      : `Edit Article "${stateLoc.title}"`;
  const defailtDescr = location.state === null ? "" : stateLoc.description;
  const defailtBody = location.state === null ? "" : stateLoc.body;
  const defaultTitle = location.state === null ? "" : stateLoc.title;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICreateArticle>({ mode: "onSubmit" });

  const token = useSelector((state: IStateUser) => state.user.user.token);

  const onSubmit = handleSubmit(async (data) => {
    const post = {
      article: {
        title: data.title,
        description: data.description,
        body: data.text,
        tagList: [data.tags],
      },
    };
    if (location.state === null) await fetchPostNewArticle(post, token);
    else {
      const slug1 = slug === undefined ? "" : slug;
      await fetchEditArticle(
        {
          article: {
            title: data.title,
            description: data.description,
            body: data.text,
          },
        },
        token,
        slug1
      );
    }
    reset();
    return navigate("/articles");
  });
  return (
    <div className="new-article">
      <div className="new-article__container">
        <h2>{NamePage}</h2>
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
              defaultValue={defaultTitle}
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
              defaultValue={defailtDescr}
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
              placeholder="Text"
              defaultValue={defailtBody}
              className={cn(
                { "error-input": errors?.text?.message },
                { "no-margin": errors?.text?.message }
              )}
              {...register("text", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 6,
                  message: "Your text to be at least 6 characters.",
                },
              })}
            />
          </label>
          <div>
            {errors?.text && <p>{`${errors?.text?.message}` || "Error!"}</p>}
          </div>
          {/* just one password */}
          {location.state === null && (
            <>
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
              <div>{errors?.tags && <p>{"need more tags"}</p>}</div>
            </>
          )}
          {/* button submit */}
          <input
            type="submit"
            className="new-article__submit"
            value={`Send`}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default CreateArticleForm;
