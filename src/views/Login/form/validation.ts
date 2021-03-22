export default {
    username: false,
    password: false,
    validate: false,
    username_validation: {
        minLength: 4,
        maxLength: 15,
        required: true,
        regex: /[A-Za-z0-9]+/,
    },
    password_validation: {
        minLength: 4,
        maxLength: 20,
        required: true,
        regex: /[A-Za-z0-9]+/,
    }
}