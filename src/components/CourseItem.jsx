import React from "react";
import { useNavigate } from "react-router-dom";
const CourseItem = (props) => {
  //console.log(props.course);
  const heure = props.course.departureDate.substring(11, 16);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/course/${id}`);
    console.log(id);
  };
  return (
    <div
      className="mb-4"
      onClick={() => {
        handleClick(props.course.id);
      }}
    >
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-4">
          <div className="flex">
            <div className="hourbox bg-slate-600 w-1/5 h-20 text-center pt-6 mr-2">
              <div className="hourbox-content">
                <div className="hourbox-title text-white">
                  {heure ? heure : ""}
                </div>
              </div>
            </div>
            <div className="w-4/5">
              <h5 className="card-title">
                {props.course.name} {props.course.lastname}
              </h5>
              <p className="card-text text-ellipsis">
                {props.course.departure}
              </p>
              <p className="card-text truncate ...">{props.course.arrival}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
