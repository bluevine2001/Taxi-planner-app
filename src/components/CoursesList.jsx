import React from "react";
import { useState, useEffect } from "react";
import { coursesRef } from "../../firebase";
import { getDocs } from "firebase/firestore";
import CourseItem from "./CourseItem";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getCourses = () => {
      getDocs(coursesRef).then((querySnapshot) => {
        const coursesList = [];
        querySnapshot.forEach((doc) => {
          const course = { ...doc.data(), id: doc.id };
          coursesList.push(course);
          console.log(course);
        });
        setCourses(coursesList);
        setLoading(false);
      });
    };
    getCourses();
  }, []);
  return (
    <div>
      {loading ? (
        <button className="btn btn-ghost btn-lg loading w-full"></button>
      ) : null}

      {courses && courses.length > 0
        ? courses.map((course) => {
            return <CourseItem key={course.id} course={course} />;
          })
        : "Aucune courses pour le moment."}
    </div>
  );
};

export default CoursesList;
