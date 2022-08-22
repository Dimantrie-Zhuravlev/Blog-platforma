const user = (
  username: string,
  email: string,
  password: string,
  image: string
) => {
  if (password !== "" && image !== "")
    return {
      user: {
        username,
        email,
        password,
        image,
      },
    };
  if (password !== "")
    return {
      user: {
        username,
        email,
        password,
      },
    };
  if (image !== "")
    return {
      user: {
        username,
        email,
        image,
      },
    };
  return { user: { username, email } };
};

export default user;
