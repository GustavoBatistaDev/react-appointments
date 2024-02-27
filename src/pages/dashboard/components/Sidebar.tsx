import { Link } from "react-router-dom";
import { useState } from "react";

export const Sidebar = () => {
  const [optionsInitVisible, setOptionsInitVisible] = useState(false);
  const [optionsProfileVisible, setOptionsProfileVisible] = useState(false);
  const [optionsContactVisible, setOptionsContactVisible] = useState(false);
  const [optionsSchedulingVisible, setOptionsSchedulingVisible] =
    useState(false);

  const toggleInitVisible = () => {
    setOptionsInitVisible(!optionsInitVisible);
  };

  const toggleProfileVisible = () => {
    setOptionsProfileVisible(!optionsProfileVisible);
  };

  const toggleContactVisible = () => {
    setOptionsContactVisible(!optionsContactVisible);
  };

  const toggleSchedulingVisible = () => {
    setOptionsSchedulingVisible(!optionsSchedulingVisible);
  };

  return (
    <aside className="aside" aria-hidden="false">
      <div className="container-logo">
        <img className="logo" src="/logo-menor.png" alt="" />
      </div>
      <div className="container-options">
        <div className="topic">Dashboard</div>
        <ul className="side-list">
          <li className="side-item">
            <i className="fa-solid fa-house icon"></i>
            Início
            <i
              onClick={toggleInitVisible}
              className="fa-solid fa-chevron-down float-right"
            ></i>
          </li>
          {optionsInitVisible && (
            <div className="options">
              <ul>
                <li className="option">
                  <Link className="option" to="">
                    Histórico
                  </Link>
                </li>
                <li className="option">
                  <Link className="option" to="">
                    Médicos
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <li className="side-item">
            <i className="fa-solid fa-user icon"></i>
            Perfil
            <i
              onClick={toggleProfileVisible}
              className="fa-solid fa-chevron-down float-right"
            ></i>
          </li>
          {optionsProfileVisible && (
            <div className="options">
              <ul>
                <li className="option">
                  {" "}
                  <Link className="option" to="/perfil">
                    Editar
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <li className="side-item">
            <i
              style={{ marginTop: "4px" }}
              className="fa-solid fa-message icon"
            ></i>
            Contato
            <i
              onClick={toggleContactVisible}
              className="fa-solid fa-chevron-down float-right"
            ></i>
          </li>
          {optionsContactVisible && (
            <div className="options">
              <ul>
                <li className="option">
                  <Link className="option" to="">
                    Chat
                  </Link>
                </li>
                <li className="option">
                  <Link className="option" to="">
                    Fale conosco
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <li className="side-item">
            <i className="fa-solid fa-calendar icon"></i>
            Agendamentos
            <i
              onClick={toggleSchedulingVisible}
              className="fa-solid fa-chevron-down float-right"
            ></i>
          </li>
          {optionsSchedulingVisible && (
            <div className="options">
              <ul>
                <li className="option">
                  {" "}
                  <Link className="option" to="/agendar">
                    Agendar
                  </Link>
                </li>
                <li className="option">
                  <Link className="option" to="/agendamentos">
                    Consultar
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </aside>
  );
};
