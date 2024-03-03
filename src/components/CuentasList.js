import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CuentasList = ({ onCreateUserClick, onEditUserClick }) => {
  const [accounts, setAccounts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountResponse = await axios.get("/api/v1/accounts");
        setAccounts(accountResponse.data);

      

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);




  const filteredAccounts = accounts.filter(
    (account) =>
    account.accountname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    account.accountcode.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="container mx-auto  bg-white shadow-lg">
      <div className="flex mb-4  ">
        <input
          type="text"
          className="border rounded py-2 px-1 w-3/5 mr-2"
          placeholder="Buscar cuenta ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex-grow"></div>

        <Link to="/crearusuario" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded">
          Crear usuario
        </Link>
      </div>

      <table className="min-w-full bg-white ">
      <thead className="text-black">
  <tr>

    <th className="border py-2 px-1">Account ID</th>
    <th className="border py-2 px-1">Account Code</th>
    <th className="border py-2 px-1">Account Name</th>
    <th className="border py-2 px-1">Status ID</th>
    <th className="border py-2 px-1">Activation Date</th>
    <th className="border py-2 px-1">End Date</th>
    <th className="border py-2 px-1">Parent ID</th>
    <th className="border py-2 px-1">Account Type ID</th>
    <th className="border py-2 px-1">DB Directory</th>

    <th className="border py-2 px-1">Acciones</th>
  </tr>
</thead>
<tbody>
  {filteredAccounts.map((account) => (
    <tr key={account.accountid}>

      <td className="border px-1 py-2">{(account.accountid)}</td>
      <td className="border px-1 py-2">{account.accountcode}</td>
      <td className="border px-1 py-2">{account.accountname}</td>
      <td className="border px-1 py-2">{(account.statusid)}</td>
      <td className="border px-1 py-2">{account.activationdate}</td>
      <td className="border px-1 py-2">{account.enddate}</td>
      <td className="border px-1 py-2">{account.parentid}</td>
      <td className="border px-1 py-2">{account.accounttypeid}</td>
      <td className="border px-1 py-2">{account.dbdirectory}</td>
    
      <td className="border px-1 py-2 ">
        <div className="flex justify-center"> 
          {/* Botones de acciones */}
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
          >
            Editar
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default CuentasList;
