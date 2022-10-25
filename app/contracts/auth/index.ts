export interface RegisterFormValuesInterface {
    name: string,
    email: string,
    password: string
}

export interface RegisterWithCodeFormValuesInterface {
    name: string,
    phone: string
}

export interface LoginFormValuesInterface {
    email: string,
    password: string,
}

export interface LoginWithCodeFormValuesInterface {
    phone: string
}

export interface ConfirmationCodeFormValuesInterface {
    code: string,
    token: string
}


