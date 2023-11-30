import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { coursesRef } from "../../firebase.js"; // Assurez-vous que cette référence est correcte

const CourseDetailView = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCourse = async () => {
      try {
        console.log("ID de la course: ", id);
        console.log("Référence de la collection: ", coursesRef);
        const docRef = doc(coursesRef, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCourse({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log("Aucune course trouvée avec cet ID !");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de la course: ", error);
      }
      setLoading(false);
    };

    getCourse();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>Chargement...</div>
      ) : (
        <div>
          <h1>
            Client : {course.name} {course.lastname}
          </h1>
          {/* Afficher d'autres détails de la course ici */}
        </div>
      )}
    </div>
  );
};

export default CourseDetailView;
