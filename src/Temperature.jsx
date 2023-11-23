
import React, { useState } from "react";
// Nao esquecer de dar o comando no terminal create react router
//para criar a rota 
// REQUISITOS: ADICIONAR, EXLCUIR 

const Temperature = () => {
// gerenciar as temperaturas em um array 
const [todas, setTodas] = useState([]);
const [newToda, setNewToda] = useState("");
// armazernar bonitnho as temperaturas 

const handleAddToda = () => {
    //clicou no botao função adiciona 
    if (newToda.trim() !== "") {

      setTodas([...todas, { text: newToda.trim()}]);

      setNewToda("");
    
    }
};

const handleDeleteTodas = (index) => {

    const newTodas = [...todas];

    newTodas.splice(index, 1);
    // splice remover 
    setTodas(newTodas);
  };

  return (
    <div className="toda-app">
      {}
      <h1>Temperaturas</h1>
      {}
      <input
        type="text"
        value={newToda}
        onChange={(e) => setNewToda(e.target.value)}
      />
      {}
      <button onClick={handleAddToda}>Adicionar</button>
      {}
      <ul>
        {todas.map((toda, index) => (
        
          <li key={index} style={{ display: "flex" }}>
            {/* Para permitir a visualização deixar como lista  */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {}
              <input
                type="checkbox"
                checked={toda.checked}
                onChange={() => handleToggleToda(index)}
              />
              {}
            </div>
            <button style={{ marginTop: "5px", marginBottom: "5px" }} onClick={() => handleDeleteToda(index)}>
              Excluir
            </button>
            {}
          </li>
        ))}
      </ul>
      {}
    </div>
  
  );
};
export default Temperature;
