import React from "react";

const AddCourseForm = () => {
  return (
    <div>
      <div className="card w-3/4 mx-auto shadow-xl mb-8 md:w-2/5">
        <div className="card-body p-2 text-center w-fit md:mx-auto">
          <h5 className="card-title">Ajouter une Course</h5>
          <form>
            <div className="form-group">
              <label className="label">
                <span className="label-text">Nom</span>
              </label>
              <input
                className="input input-info w-full"
                type="text"
                placeholder="Dupont"
              />
              <label className="label">
                <span className="label-text">Prénom</span>
              </label>
              <input
                className="input input-info w-full"
                type="text"
                placeholder="Jean"
              />
              <label className="label">
                <span className="label-text">Départ</span>
              </label>
              <input
                className="input input-info w-full"
                type="datetime-local"
              />

              <label className="label">
                <span className="label-text">Arrivé</span>
              </label>
              <input
                className="input input-info w-full"
                type="datetime-local"
              />

              <label className="label">
                <span className="label-text">Tel</span>
              </label>
              <input
                className="input input-info w-full"
                placeholder="+33"
                type="tel"
              />

              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input
                className="input input-info w-full"
                placeholder="jeandupont@gmail.com"
                type="email"
              />

              <label className="label">
                <span className="label-text">Prix</span>
              </label>
              <input
                className="input input-info w-full"
                placeholder="25€"
                type="number"
              />
              <br />
              <button className="btn btn-info mt-2 mx-auto">
                <span className="btn-text text-white">Ajouter</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourseForm;
