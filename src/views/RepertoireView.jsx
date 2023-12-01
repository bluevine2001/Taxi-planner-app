import React from "react";

const RepertoireView = () => {
  return (
    <div>
      <div className="headerSection">
        <h1>Répertoire</h1>
      </div>
      <div className="tableContainer overflow-hidden">
        <table className="table table-pin-rows mx-auto">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Mars 2023</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-slate-300 text-black">BT-Ramoni-12-04-2023</td>
              <td className="bg-slate-300 text-black">
                <div className="btn btn-info">Voir</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepertoireView;
