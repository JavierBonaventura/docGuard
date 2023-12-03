import React from "react";
import Imagen1 from "../Imagenes/imagen1.jpeg";
import Imagen2 from "../Imagenes/imagen2.jpeg";
import Imagen3 from "../Imagenes/imagen3.jpeg";
import Imagen4 from "../Imagenes/imagen4.jpeg";
import Imagen5 from "../Imagenes/imagen5.jpeg";
import Imagen6 from "../Imagenes/imagen6.jpeg";
import Imagen7 from "../Imagenes/imagen7.jpeg";

const Content = ({ onItemClick }) => {
  const imagenes = [
    {
      src: Imagen1,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: Imagen2,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: Imagen3,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: Imagen4,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: Imagen5,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: Imagen6,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: Imagen7,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="flex-1 bg-gray-200 p-4 ">
      <table className="table-auto">
        <thead></thead>
        <tbody>
          {imagenes.map((imagen, index) => (
            <React.Fragment key={index}>
              <tr
                className="transition-colors duration-300 divide-y divide-gray-400 hover:bg-gray-300 cursor-pointer"
                onClick={() => onItemClick(imagen)}
              >
                {" "}
                <td>
                  <img
                    src={imagen.src}
                    alt={`Imagen ${index + 1}`}
                    style={{
                      width: "180px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td className="px-8">{imagen.texto}</td>
              </tr>
              {index < imagenes.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
