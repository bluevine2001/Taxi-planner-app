import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddCourseForm from "../components/AddCourseForm";
import AddContactForm from "../components/AddContactForm";

const AddObjectView = () => {
  const { type } = useParams();
  const [formToUse, setFormToUse] = useState("");
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("type: ", type);
    // si course alors afficher le formulaire pour ajouter une course
    if (type === "course") {
      console.log("Ajouter une course");
      setFormToUse("course");
    } else if (type === "contact") {
      console.log("Ajouter un contact");
      setFormToUse("contact");
    } else {
      console.log("Ajouter un document");
      setFormToUse("document");
    }
    // si contact alors afficher le formulaire pour ajouter un contact
    // si document alors afficher le formulaire pour ajouter un document
  }, []);
  return (
    <div>
      {formToUse === "course" && step == 1 ? (
        <div>
          <div className="step1 h-screen items-center flex">
            <div className="card bg-white w-10/12 mx-auto p-4">
              <h1 className="card-title text-black my-1 mx-2">
                Créer une course pour un :
              </h1>
              <button
                className="btn btn-info m-2"
                onClick={() => {
                  setStep(21);
                }}
              >
                Client existant
              </button>
              <button
                className="btn btn-warning m-2"
                onClick={() => {
                  setStep(22);
                }}
              >
                Nouveau client
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {formToUse === "course" && step == 21 && (
        <div>
          <AddCourseForm client="exist" />
        </div>
      )}

      {formToUse === "course" && step == 22 && (
        <div>
          <AddCourseForm client="new" />
        </div>
      )}
      {formToUse === "contact" && (
        <div>
          <AddContactForm />
        </div>
      )}
      {formToUse === "document" && (
        <div>Formulaire pour ajouter un document</div>
      )}
    </div>
  );
};

export default AddObjectView;
