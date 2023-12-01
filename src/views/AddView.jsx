import React from "react";
import { useNavigate } from "react-router-dom";
import { File } from "lucide-react";
import { CarTaxiFront } from "lucide-react";
import { UserPlus } from "lucide-react";

const AddView = () => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    navigate(`/add/${type}`);
  };
  return (
    <div>
      <h1 className="text-2xl text-center m-2">Que souhaitez-vous ajouter ?</h1>

      <div
        className="client-item flex w-10/12 mx-auto my-2 justify-between items-center bg-slate-800 rounded text-white py-1 px-4"
        onClick={() => {
          handleClick("course");
        }}
      >
        <div className="flex items-center">
          <CarTaxiFront className="text-info my-2" size={37} />
          <p className="px-4">Course</p>
        </div>
        <div>
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>

      <div
        className="client-item flex w-10/12 mx-auto my-2 justify-between items-center bg-slate-800 rounded text-white py-1 px-4"
        onClick={() => {
          handleClick("contact");
        }}
      >
        <div className="flex items-center">
          <UserPlus className="text-info my-2" size={37} />
          <p className="px-4">Contact</p>
        </div>
        <div>
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>

      <div
        className="client-item flex w-10/12 mx-auto my-2 justify-between items-center bg-slate-800 rounded text-white py-1 px-4"
        onClick={() => {
          handleClick("document");
        }}
      >
        <div className="flex items-center">
          <File className="text-info my-2" size={37} />
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
