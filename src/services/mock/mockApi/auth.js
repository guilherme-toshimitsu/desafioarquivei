const mockedValue = {
  "teste@gmail.com": {
    token: "blableblivalid",
    email: "teste@gmail.com",
    message: "ok",
  },
  default: {
    token: "validblabla",
    message: "ok",
  },
};

const returnLoginOk = (config) => {
  if (config.data) {
    if (config.data.username && !config.data.username.includes("@gmail.com")) {
      return { message: "falhou", status: "404", isError: true };
    }
  } else {
    return { message: "falhou", status: "404", isError: true };
  }

  if (config.data.username === "teste@gmail.com") {
    return {
      data: {
        ...mockedValue["teste@gmail.com"],
      },
    };
  }

  return {
    data: {
      ...mockedValue.default,
      email: config.data.username,
    },
  };
};

const returnLoginError = () => {
  return {
    message: "Falhou",
    status: "404",
  };
};

export default {
  returnLoginOk,
  returnLoginError,
};
