import { createNumberMask, createTextMask } from "redux-form-input-masks";

const CNPJmask = createTextMask({
  pattern: "999.999.999-99",
});

const CVVmask = createTextMask({
  pattern: "999",
});

const DateMask = createTextMask({
  pattern: "99/99/9999",
});

export { CNPJmask, CVVmask, DateMask };
