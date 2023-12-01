import React from "react";

const AddContactForm = () => {
  // ajouter fonction pour ajouter un contact à collection firebase
  return (
    <div>
      <h1 className="text-2xl text-center m-2">Ajouter un contact</h1>
      <div className="flex justify-center m-2">
        <div className="mb-20 w-10/12">
          <form>
            <div className="form-group">
              <label className="label">
                <span className="label-text">Nom</span>
              </label>
              <input
                className="input input-info input-sm w-full"
                type="text"
                name="lastname"
                placeholder="Dupont"
              />
            </div>
            <div className="form-group">
              <label className="label">
                <span className="label-text">Prénom</span>
              </label>
              <input
                className="input input-info input-sm w-full"
                type="text"
                name="name"
                placeholder="Jean"
              />
            </div>
            <div className="form-group">
              <label className="label">
                <span className="label-text">Téléphone</span>
              </label>
              <input
                className="input input-info input-sm w-full"
                type="text"
                name="tel"
                placeholder="0606060606"
              />
            </div>
            <div className="form-group">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-info input-sm w-full"
                type="text"
                name="email"
                placeholder=" "
              ></input>
            </div>
            <div className="form-group">
              <label className="label">
                <span className="label-text">Adresse</span>
              </label>
              <input
                className="input input-info input-sm w-full"
                type="text"
                name="address"
                placeholder=" "
              ></input>
            </div>
            <div className="form-group">
              <label className="label">
                <span className="label-text">Type de contact</span>
              </label>
              <input
                className="input input-info input-sm w-full"
                type="text"
                name="type"
                placeholder=" "
              ></input>
            </div>
            <div className="flex justify-center my-4">
              <button className="btn btn-info ">Ajouter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContactForm;
