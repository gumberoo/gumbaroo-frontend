import { isLoading, hasErrored, setTeacher } from '../actions'

export const getStudents = (teacherId) => {
  const url =` https://gumberoo-backend.herokuapp.com/api/v1/teachers/${teacherId}/students`

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url) 
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(setTeacher( data.data ))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}