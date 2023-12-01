import React from "react";
import { useState } from "react";
import { addCourse } from "../../firebase";

const AddCourseForm = (props) => {
  const emptyCourse = {
    name: "",
    lastname: "",
    departure: "",
    type: "",
    departureDate: "",
    arrival: "",
    arrivalDate: "",
    done: false,
    tel: "",
    email: "",
    price: "",
  };
  const [course, setCourse] = useState(emptyCourse);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
    console.log(course);
  };

  const handleChangeCheckbox = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.checked });
    console.log(course);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course);
    addCourse(course);
    setCourse(emptyCourse);
  };
  return (
    <div>
      <div className="flex justify-center m-2">
        <div className="mb-20 w-10/12">
          <form>
            <div className="form-group">
              {props.client === "new" ? (
                <div>
                  <label className="label">
                    <span className="label-text">Nom</span>
                  </label>

                  <input
                    className="input input-info input-sm w-full"
                    type="text"
                    name="lastname"
                    value={course.lastname || ""}
                    placeholder="Dupont"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />

                  <label className="label">
                    <span className="label-text">Prénom</span>
                  </label>

                  <input
                    className="input input-info input-sm w-full"
                    type="text"
                    name="name"
                    value={course.name || ""}
                    placeholder="Jean"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />

                  <label className="label">
                    <span className="label-text">Tel</span>
                  </label>

                  <input
                    name="tel"
                    value={course.tel || ""}
                    className="input input-info input-sm w-full"
                    placeholder="+33"
                    type="tel"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />

                  <label className="label">
                    <span className="label-text">email</span>
                  </label>

                  <input
                    name="email"
                    value={course.email || ""}
                    className="input input-info input-sm w-full"
                    placeholder="jeandupont@gmail.com"
                    type="email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
              ) : (
                <div>
                  Client :
                  <select className="select select-bordered w-full" name="type">
                    <option value="1">Dupont Jean</option>
                    <option value="2">Dupont Jean</option>
                    <option value="3">Dupont Jean</option>
                  </select>
                </div>
              )}

              <br />
              <p>Type de course : </p>
              <select className="select select-bordered w-full" name="type">
                <option value="aller">Aller</option>
                <option value="retour">Retour</option>
                <option value="aller-retour">Aller-retour</option>
              </select>

              <br />
              <br />
              <p>Départ :</p>
              <label className="label">
                <span className="label-text">De</span>
              </label>

              <input
                type="text"
                className="input input-info input-sm w-full"
                name="departure"
                value={course.departure || ""}
                placeholder="Adresse de départ"
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <label className="label">
                <span className="label-text">À</span>
              </label>

              <input
                name="departureDate"
                className="input input-info input-sm w-full"
                type="datetime-local"
                value={course.departureDate || ""}
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <label className="label">
                <span className="label-text">Arrivé</span>
              </label>
              <label className="label">
                <span className="label-text">De</span>
              </label>

              <input
                type="text"
                name="arrival"
                value={course.arrival || ""}
                className="input input-info input-sm w-full"
                placeholder="Adresse d'arrivé"
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <label className="label">
                <span className="label-text">À</span>
              </label>

              <input
                name="arrivalDate"
                value={course.arrivalDate || ""}
                className="input input-info input-sm w-full"
                type="datetime-local"
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <label className="label">
                <span className="label-text">Prix</span>
              </label>

              <input
                name="price"
                value={course.price || ""}
                className="input input-info input-sm w-full"
                placeholder="25€"
                type="number"
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <button
                className="btn btn-info mt-2 mx-auto w-full"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
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
