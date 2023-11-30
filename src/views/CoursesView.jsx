import React from "react";
import CoursesList from "../components/CoursesList";

const CoursesView = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <h1 className="text-4xl text-center">Courses</h1>
        <h2 className="ml-2">Listes des courses</h2>
        <CoursesList />
      </div>
    </div>
  );
};

export default CoursesView;
