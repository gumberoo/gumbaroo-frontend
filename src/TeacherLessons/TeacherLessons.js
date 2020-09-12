import React, { useState } from 'react'
import './TeacherLessons.scss'
import LessonCard from './LessonCard/LessonCard'
import { connect } from "react-redux";
import { setLessons } from "../actions";
import { bindActionCreators } from "redux";

const TeacherLessons = (props) => {
  const [error, setError] = useState('')

  // const getTeachersLessons = async () => {
    // await props.getLessons(props.teacher.ID)
  // }

  // useEffect(() => {
    // try{
        // getTeachersLessons()
    // } catch {
      // setError(error)
    // }
  // }, [])

// Upon load of test Teacher:
// a GET will occur to grab the existing lessons saved for a teacher. 
// whenever a new lesson is created - it is saved to the store and will
// prompt a rerender on this page as we list out the lessons
// Lesson Title <- clickable for stats on the lesson
// Lesson Link

  // State of the lessons added from Redux? Or delete from store via redux
  // const deleteLesson = (e) => {
  //   //eslint-disable-next-line
  //   setLessons(lessons.filter(lesson => lesson.id != e.target.parentNode.id))
  // }

  const lessons = []

  return (
    <main className='teacher-lessons'>
      <h1>Lessons</h1>

      {lessons.length ? (
        <LessonCard /> ) : (
          <p className="no-lessons-message">Please click on the "Create a Lesson" Tab to create a lessson.</p>
        )
      }
      {/* <LessonCard deleteLesson={deleteLesson}/> */}
    </main>
  )
  
}
const mapStateToProps = ({ setStudents, setLessons }) => ({
 students: setStudents,
 lessons: setLessons
})


export default connect(mapStateToProps)(TeacherLessons)