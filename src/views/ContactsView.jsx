import React, { useState } from "react";

const categories = ["Tous", "Patients", "Clients", "Chauffeurs"]; // Les catégories comme dans votre image

const DocumentsView = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [clients, setClients] = useState([
    // ...ici vous mettriez les données des clients
    { id: 1, nom: "Caroline DUPOND", categorie: "Patients" },
    { id: 2, nom: "Tristan SANCHEZ", categorie: "Clients" },
    { id: 3, nom: "Lisa BOUVIER", categorie: "Chauffeurs" },
  ]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Ici, vous pourriez filtrer les clients en fonction de la catégorie sélectionnée
  };

  return (
    <div className="client-view-container">
      <div className="flex justify-end p-2">
        <button className="search-button btn btn-ghost">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="category-slider w-10/12 mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button badge badge-ghost m-2 px-2 rounded-xl ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="clients-list">
        {clients.map(
          (client) =>
            (selectedCategory === "Tous" ||
              client.categorie === selectedCategory) && (
              <div
                key={client.id}
                className="client-item flex w-10/12 mx-auto my-2 justify-between items-center bg-white rounded shadow-xl py-1 px-4"
              >
                <div className="avatar">
                  <div className="w-16 rounded">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="client-name">{client.nom}</div>
                <button className="details-button btn btn-info">Détails</button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default DocumentsView;
