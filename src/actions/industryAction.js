export const FETCH_INDUSTRY = 'FETCH_INDUSTRY';

export function loadCoursesSuccess(industry){
  return { type: types.FETCH_INDUSTRY, industry};
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(industry=>{
      dispatch(loadCoursesSuccess(industry));
    }).catch(error =>{
      throw(error);
    });
  };
}
