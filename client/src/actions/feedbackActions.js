// Import feedback types.
import {
  GET_FEEDBACK,
  GET_SINGLE_FEEDBACK,
  ADD_FEEDBACK,
  UPDATE_FEEDBACK,
  DELETE_FEEDBACK,
  DEL_ERROR,
  ENVIRONMENT
} from './types';

// Import axios.
import axios from 'axios';

// Import setAlert
import { setAlert } from './alertActions'

// Get all feedback.
export const getFeedback = () => async dispatch => {
  try {
    // Call the endpoint
    const res = await axios.get(`${ENVIRONMENT}/api/feedback`)
  
    // Dispatch the response to the reducer.
    dispatch({
      type: GET_FEEDBACK,
      payload: res.data
    })
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
  }
}

// Get a single feedback.
export const getSingleFeedback = (id) => async dispatch => {
  try {
    // Call the endpoint
    const res = await axios.get(`${ENVIRONMENT}/api/feedback/${id}`)
  
    // Dispatch the response to the reducer.
    dispatch({
      type: GET_SINGLE_FEEDBACK,
      payload: res.data
    })
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
  }
}

// Add feedback.
export const addFeedback = (feedback) => async dispatch => {
  try {
    // Call the endpoint
    const res = await axios.post(`${ENVIRONMENT}/api/feedback`, feedback)
  
    // Dispatch the response to the reducer.
    dispatch({
      type: ADD_FEEDBACK,
      payload: res.data
    })
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
  }
}

// Update feedback.
export const updateFeedback = (feedback) => async dispatch => {
  try {
    console.log('Update feedback action')
    console.log(feedback)
    // Call the endpoint
    const res = await axios.put(`${ENVIRONMENT}/api/feedback/${feedback.feedbackId}`, feedback)
  
    // Dispatch the response to the reducer.
    dispatch({
      type: UPDATE_FEEDBACK,
      payload: res.data
    })
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
  }
}

// Delete feedback.
export const deleteFeedback = (id) => async dispatch => {
  try {
    // Call the endpoint
    const res = await axios.delete(`${ENVIRONMENT}/api/feedback/${id}`)
  
    // Dispatch the response to the reducer.
    dispatch({
      type: DELETE_FEEDBACK,
      payload: id
    })
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
  }
}

