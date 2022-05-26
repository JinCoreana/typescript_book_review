import { createActions, handleActions } from "redux-actions"

interface AuthState {
    token: string | null,
    loading: boolean,
    error: Error | null,
}

const initialState: AuthState = {
    token: null,
    loading: false,
    error: null
}

const prefix = "books-review/auth"

export const { pending, success, fail } = createActions('PENDING', 'SUCCESS', 'FAIL', { prefix })

const reducer = handleActions<AuthState, string>({
    PENDING: (state = initialState) => ({
        ...state,
        token: null,
        loading: true,
        error: null
    }),
    SUCCESS: (state = initialState, action) => ({
        ...state,
        token: action.payload,
        loading: false,
        error: null
    }),
    FAIL: (state = initialState, action: any) => ({
        ...state,
        token: null,
        loading: false,
        error: action.payload,
    })

}, initialState, { prefix })

export default reducer

//saga
export function* authSaga() {

}