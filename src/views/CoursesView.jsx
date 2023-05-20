import React from "react";
import AddCourseForm from "../components/AddCourseForm";
import CoursesList from "../components/CoursesList";

const CoursesView = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Courses</h1>
      <AddCourseForm />
      <h2 className="ml-2">Listes des courses</h2>
      <CoursesList />
    </div>
  );
};

export default CoursesView;
