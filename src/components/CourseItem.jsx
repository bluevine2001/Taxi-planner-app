import React from "react";

const CourseItem = (props) => {
  return (
    <div className="mb-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body p-4">
          <div className="flex">
            <div className="hourbox bg-slate-600 w-1/5 h-20 text-center pt-6 mr-2">
              <div className="hourbox-content">
                <div className="hourbox-title text-white">
                  {props.departureDate}
                </div>
              </div>
            </div>
            <div className="w-4/5">
              <h5 className="card-title">
                {props.name} {props.lastname}
              </h5>
              <p className="card-text">{props.departure}</p>
              <p className="card-text">{props.arrival}</p>
            </div>
            <div>
              <input type="checkbox" className="checkbox checkbox-info" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
