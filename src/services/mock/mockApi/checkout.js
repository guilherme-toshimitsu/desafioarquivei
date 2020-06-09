const checkoutConsults = () => {
  console.log("aqui");
  return {
    data: {
      bla: "bla",
      message: "ok",
    },
  };
};

const checkoutConsultsError = () => {
  return {
    data: {
      bla: "bla",
      message: "ok",
    },
  };
};

export default {
  checkoutConsults,
  checkoutConsultsError,
};
