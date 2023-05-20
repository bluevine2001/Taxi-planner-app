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
          console.log(doc.data());
          coursesList.push({ ...doc.data(), id: doc.id });
          //console.log(coursesList);
        });
        //console.log(coursesList);
        setCourses(coursesList);
        setLoading(false);
      });
    };
    getCourses();
  }, []);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}

      {courses.length > 0
        ? courses.map((course) => {
            const heure = course.departureDate.substring(11, 16);
            return (
              <CourseItem
                key={course.id}
                departure={course.departure}
                name={course.name}
                lastname={course.lastname}
                arrival={course.arrival}
                departureDate={heure}
              />
            );
          })
        : "Aucune courses pour le moment."}
    </div>
  );
};

export default CoursesList;
