import { TOKEN_NAME } from '../../config/index'
import Vue from 'vue'

const setToken = (token) => {
    // Vue.prototype.$eventQueue.toDoEvent()
    localStorage.setItem(TOKEN_NAME, token)
}

const getToken = (token) => {
    return localStorage.getItem(TOKEN_NAME)
}

export {
    setToken,
    getToken
}
