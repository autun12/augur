export const INFO_NOTIFICATION = 'INFO_NOTIFICATION'
export const ERROR_NOTIFICATION = 'ERROR_NOTIFICATION'
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export function addInfoNotification(message) {
  return {
    type: ADD_NOTIFICATION,
    data: { message, type: INFO_NOTIFICATION }
  }
}

export function addErrorNotification(message) {
  return {
    type: ADD_NOTIFICATION,
    data: { message, type: ERROR_NOTIFICATION }
  }
}

export function removeNotification(message) {
  return {
    type: REMOVE_NOTIFICATION,
    data: { message }
  }
}
