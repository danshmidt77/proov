import * as types from './actionTypes';
// import courseApi from '../api/mockCourseApi';

// export function createCourse(course){
//   return {type: types.CREATE_COURSE, course};
// }

export function loadCoursesSuccess(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}
