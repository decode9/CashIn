import { formValidation } from "./formValidation";

export default (name: string, value: string, validation: any, form: any) => {

    let validationName = `${name}_validation`;
    let validate = formValidation(validation[validationName], value, form);

    for (let val in validation[validationName]) if (val === 'equal') validate = value === form[validation[validationName][val]];

    let newValidate: any = {};
    let formValidate = true;

    newValidate[name] = validate;

    for (let key in form) formValidate = formValidate && key === name ? validate : validation[key];

    newValidate[`validate`] = formValidate;

    let newValue: any = {};
    newValue[name] = value;

    return {
        form: { ...form, ...newValue },
        validation: { ...validation, ...newValidate },
    }
};