import React from "react";
import AddCourseForm from "../components/AddCourseForm";

const CoursesView = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">Courses</h1>
      <p className="text-center">Here is a list of courses</p>
      <AddCourseForm />
    </div>
  );
};

export default CoursesView;
