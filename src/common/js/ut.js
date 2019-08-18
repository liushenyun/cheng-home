import { TOKEN_NAME } from '../../config/index'

const setToken = (token) => {
    localStorage.setItem(TOKEN_NAME, token)
}

const getToken = (token) => {
    return localStorage.getItem(TOKEN_NAME)
}

export {
    setToken,
    getToken
}
