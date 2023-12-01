import React from "react";
import { useNavigate } from "react-router-dom";

const AddView = () => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    navigate(`/add/${type}`);
  };
  return (
    <div>
      <h1 className="text-2xl text-center m-2">
        {" "}
        Que souhaitez-vous ajouter ?{" "}
      </h1>

      <div
        className="client-item flex w-10/12 mx-auto my-2 justify-between items-center bg-white rounded shadow-xl py-1 px-4"
        onClick={() => {
          handleClick("course");
        }}
      >
        <div className="flex items-center">
          <i className="fas fa-car text-4xl text-cyan-500 my-2"></i>
          <p className="px-4">Course</p>
        </div>
        <div>
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>

      <div
        className="client-item flex w-10/12 mx-auto my-2 justify-between items-center bg-white rounded shadow-xl py-1 px-4"
        onClick={() => {
          handleClick("contact");
        }}
      >
        <div className="flex items-center">
          <i className="fas fa-user text-4xl text-cyan-500 my-2"></i>
          <p className="px-4">Contact</p>
        </div>
        <div>
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>

      <div
        className="client-item flex w-10/12 mx-auto my-2 justify-between items-center bg-white rounded shadow-xl py-1 px-4"
        onClick={() => {
          handleClick("document");
        }}
      >
        <div className="flex items-center">
          <i className="fas fa-file text-4xl text-cyan-500 my-2"></i>
          <p className="px-4">Document</p>
        </div>
        <div>
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddView;
