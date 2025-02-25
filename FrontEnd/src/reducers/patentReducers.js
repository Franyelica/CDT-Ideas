import {
    ALL_PATENTS_FAIL,
    ALL_PATENTS_SUCCESS,
    ALL_PATENTS_REQUEST,
    ADMIN_PATENTS_REQUEST,
    ADMIN_PATENTS_SUCCESS,
    ADMIN_PATENTS_FAIL,
    NEW_PATENT_REQUEST,
    NEW_PATENT_SUCCESS,
    NEW_PATENT_RESET,
    NEW_PATENT_FAIL,
    DELETE_PATENT_REQUEST,
    DELETE_PATENT_SUCCESS,
    DELETE_PATENT_RESET,
    DELETE_PATENT_FAIL,
    UPDATE_PATENT_REQUEST,
    UPDATE_PATENT_SUCCESS,
    UPDATE_PATENT_RESET,
    UPDATE_PATENT_FAIL,
    PATENT_DETAILS_REQUEST,
    PATENT_DETAILS_SUCCESS,
    PATENT_DETAILS_FAIL,
    CLEAR_ERRORS
}
    from '../constants/patentConstants'
export const patentsReducer = (state = { patents: [] }, action) => {
    switch (action.type) {
        case ALL_PATENTS_REQUEST:
        case ADMIN_PATENTS_REQUEST:
            return {
                loading: true,
                patents: []
            }
        case ALL_PATENTS_SUCCESS:
            return {
                loading: false,
                patents: action.payload.patents,
                patentsCount: action.payload.patentsCount,
                resPerPage: action.payload.resPerPage,
                filteredPatentsCount: action.payload.filteredPatentsCount
            }


        case ADMIN_PATENTS_SUCCESS:
            return {
                loading: false,
                patents: action.payload
            }


        case ALL_PATENTS_FAIL:
        case ADMIN_PATENTS_FAIL:

            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;

    }
}

export const patentDetailsReducer = (state = { patent: {} }, action) => {
    switch (action.type) {

        case PATENT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case PATENT_DETAILS_SUCCESS:
            return {
                loading: false,
                patent: action.payload
            }
        case PATENT_DETAILS_FAIL:
            return {
                ...state,
                error: null
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const newPatentReducer = (state = { patent: {} }, action) => {
    switch (action.type) {

        case NEW_PATENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_PATENT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                patent: action.payload.patent
            }
        case NEW_PATENT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_PATENT_RESET:
            return {
                ...state,
                success: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const patentReducer = (state = { patent: {} }, action) => {
    switch (action.type) {

        case DELETE_PATENT_REQUEST:
        case UPDATE_PATENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_PATENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_PATENT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_PATENT_FAIL:
        case UPDATE_PATENT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_PATENT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_PATENT_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

