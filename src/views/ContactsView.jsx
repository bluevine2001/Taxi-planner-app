import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircleUserRound } from "lucide-react";

const categories = ["Tous", "Patients", "Clients", "Chauffeurs"]; // Les catégories comme dans votre image

const DocumentsView = () => {
  // variables

  const testclients = [
    { id: 1, nom: "Caroline DUPOND", categorie: "Patients" },
    { id: 2, nom: "Tristan SANCHEZ", categorie: "Clients" },
    { id: 3, nom: "Lisa BOUVIER", categorie: "Chauffeurs" },
  ];
  const searchBarVariants = {
    open: { width: "100%", opacity: 1, x: 0, display: "block" },
    closed: {
      width: "0%",
      opacity: 0,
      x: "-100%",
      transitionEnd: { display: "none" },
    },
  };

  // useState
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [clients, setClients] = useState(testclients);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchHidden, setIsSearchHidden] = useState(true);

  // méthodes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Ici, vous pourriez filtrer les clients en fonction de la catégorie sélectionnée
    if (category != "Tous") {
      const filteredClients = testclients.filter(
        (client) => client.categorie === category
      );
      setClients(filteredClients);
    } else {
      setClients(testclients);
    }
  };

  const toggleDisplaySearchBar = () => {
    setIsSearchHidden(!isSearchHidden);
  };

  const handleSearch = () => {
    console.log("searchValue: ", searchValue);
    if (searchValue != "") {
      const filteredClients = testclients.filter((client) =>
        client.nom.toLowerCase().includes(searchValue.toLowerCase())
      );
      setClients(filteredClients);
    } else {
      setClients(testclients);
    }
  };

  return (
    <div className="client-view-container">
      <div className="flex p-2 w-10/12 mx-auto space-x-2 justify-end">
        <motion.div
          initial="closed"
          animate={isSearchHidden ? "closed" : "open"}
          variants={searchBarVariants}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
            onChange={(e) => {
              setSearchValue(e.target.value);
              handleSearch();
            }}
          />
        </motion.div>

        <button
          className="search-button btn btn-ghost"
          onClick={toggleDisplaySearchBar}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="category-slider w-10/12 mx-auto overflow-x-auto no-scrollbar whitespace-nowrap">
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
        {clients.map((client) => (
          <div
            key={client.id}
            className="client-item flex w-10/12 mx-auto my-2 justify-between items-center bg-slate-800 text-white rounded-lg shadow-xl py-2 px-4"
          >
            <div className="avatar">
              <div className="rounded-xl">
                <CircleUserRound size={30} />
              </div>
            </div>
            <div className="client-name px-2">{client.nom}</div>
            <button className="details-button btn btn-info">Détails</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsView;
