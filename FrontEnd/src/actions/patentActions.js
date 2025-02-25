import axios from 'axios';
import {
    ALL_PATENTS_FAIL,
    ALL_PATENTS_SUCCESS,
    ALL_PATENTS_REQUEST,
    ADMIN_PATENTS_REQUEST,
    ADMIN_PATENTS_SUCCESS,
    ADMIN_PATENTS_FAIL,
    NEW_PATENT_REQUEST,
    NEW_PATENT_SUCCESS,
    DELETE_PATENT_REQUEST,
    DELETE_PATENT_SUCCESS,
    DELETE_PATENT_FAIL,
    UPDATE_PATENT_REQUEST,
    UPDATE_PATENT_SUCCESS,
    UPDATE_PATENT_FAIL,
    NEW_PATENT_FAIL,
    PATENT_DETAILS_REQUEST,
    PATENT_DETAILS_SUCCESS,
    PATENT_DETAILS_FAIL,
    CLEAR_ERRORS
}
    from '../constants/patentConstants'

export const getPatents = (keyword = '', currentPage = 1, category) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PATENTS_REQUEST })

        let link = `/api/patents?keyword=${keyword}&page=${currentPage}`


        if (category) {
            link = `/api/patents?keyword=${keyword}&page=${currentPage}&category=${category}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PATENTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PATENTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// get patent details

export const getPatentDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PATENT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/patent/${id}`)

        dispatch({
            type: PATENT_DETAILS_SUCCESS,
            payload: data.patent
        })

    } catch (error) {
        dispatch({
            type: PATENT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//Get admin patents

export const getAdminPatents = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PATENTS_REQUEST })

        const { data } = await axios.get(`/api/admin/patents`)

        dispatch({
            type: ADMIN_PATENTS_SUCCESS,
            payload: data.patents
        })

    } catch (error) {
        dispatch({
            type: ADMIN_PATENTS_FAIL,
            payload: error.response.data.message
        })
    }
}

//New patent

export const newPatent = (patentData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PATENT_REQUEST })

        const config ={
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post(`/api/admin/patent/new`,patentData,config)

        dispatch({
            type: NEW_PATENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_PATENT_FAIL,
            payload: error.response.data.message
        })
    }
}

//Delete patent

export const deletePatent = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PATENT_REQUEST })

        const { data } = await axios.delete(`/api/admin/patent/${id}`)

        dispatch({
            type: DELETE_PATENT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_PATENT_FAIL,
            payload: error.response.data.message
        })
    }
}

//Update patent

export const updatePatent = (id,patentData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PATENT_REQUEST })

        const config ={
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.put(`/api/admin/patent/${id}`,patentData,config)

        dispatch({
            type: UPDATE_PATENT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PATENT_FAIL,
            payload: error.response.data.message
        })
    }
}

//Clear errors

export const clearErrors = () => async (disptach) => {
    disptach({
        type: CLEAR_ERRORS
    })
}