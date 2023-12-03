import React from "react";

const DetalleItem = ({ selectedItem, onVolver }) => {
  return (
    <div className="flex-1 bg-gray-200 p-4">

      <img src={selectedItem.src} alt={`Detalle ${selectedItem.texto}`} />
      <p>{selectedItem.texto}</p>
      <div className="flex">
        <button onClick={onVolver} className="mr-2 bg-[#fece2f] hover:bg-[#c09000] text-black px-4 py-2 rounded">
          Volver al Listado
        </button>
        
        <button className="bg-[#4285f4] hover:bg-[#0058a3] text-white px-4 py-2 rounded">
          Editar
        </button>
      </div>

    </div>
    
  );
};

export default DetalleItem;
