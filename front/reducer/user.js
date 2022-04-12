const initialState = {
  users: null,
  me: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  LogInLoading: false,
  LogInDone: false,
  LogInError: null,
  LogOutLoading: false,
  LogOutDone: false,
  LogOutError: null,
  loadMeLoading: false,
  loadMeDone: false,
  loadMeError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_ME_REQUEST = 'LOAD_ME_REQUEST';
export const LOAD_ME_SUCCESS = 'LOAD_ME_SUCCESS';
export const LOAD_ME_FAILURE = 'LOAD_ME_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
        users: action.data,
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      }
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInDone: false,
        logInError: null,
      }
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: action.data,
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      }
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      }
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      }
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      }
    case LOAD_ME_REQUEST:
      return {
        ...state,
        loadMeLoading: true,
        loadMeDone: false,
        loadMeError: null,
      }
    case LOAD_ME_SUCCESS:
      return {
        ...state,
        loadMeLoading: false,
        loadMeDone: true,
        me: action.data,
      }
    case LOAD_ME_FAILURE:
      return {
        ...state,
        loadMeLoading: false,
        loadMeError: action.error,
      }
    case LOAD_USER_REQUEST:
      return {
        ...state,
        loadUserLoading: true,
        loadUserDone: false,
        loadUserError: null,
      }
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loadUserLoading: false,
        loadUserDone: true,
        users: action.data,
      }
    case LOAD_USER_FAILURE:
      return {
        ...state,
        loadUserLoading: false,
        loadUserError: action.error,
      }
    case CHANGE_NICKNAME_REQUEST:
      return {
        ...state,
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null,
      }
    case CHANGE_NICKNAME_SUCCESS:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameDone: true,
        me: {
          ...state.me,
          nickname: action.data.nickname
        },
      }
    case CHANGE_NICKNAME_FAILURE:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameError: action.error,
      }
    default:
      return state;
  }
}

export default userReducer;