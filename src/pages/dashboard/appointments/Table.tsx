import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import DashboardLayout from "../DashboardLayout";
import { Container } from "../components/Container";
import { TitleDashboard } from "../components/TitleDashboard";
import { getAppointments } from "../../../services/appointments/api.services";
import { useQuery } from "@tanstack/react-query";
import { AppointmentDto } from "../../../types/appointments";
import { Loader } from "../components/Loader";
import { useState } from "react";

const Table = () => {
  const limit = 4;

  const [page, setPage] = useState(0);

  const token = Cookies.get("jwtToken");

  const query = useQuery({
    queryKey: ["appointments", { limit, start: page * limit }],
    queryFn: async (): Promise<AppointmentDto[]> => {
      const response = await getAppointments(
        token as string,
        limit,
        page * limit
      );
      return response;
    },
  });

  const dateConverter = (dataISO: string) => {
    const data = new Date(dataISO);
    return data.toLocaleDateString("pt-BR");
  };

  const handlePrevButton = () => {
    setPage(page === 0 ? 0 : page - 1);
  };

  const handleNextButton = () => {
    setPage(page + 1);
  };

  return (
    <DashboardLayout>
      <Container>
        <div className="border title" style={{ position: "relative" }}>
          <TitleDashboard>Agendamentos</TitleDashboard>
          <button
            style={{
              float: "right",
              position: "absolute",
              right: "0px",
              top: "0",
            }}
            className="plus"
          >
            <Link to="/agendar">
              {" "}
              <i className="fa-solid fa-plus" style={{ color: "white" }}></i>
            </Link>
          </button>
        </div>

        <table className="styled-table">
          <thead>
            <tr>
              <th>Cancelado</th>
              <th>Especialidade</th>
              <th>Data</th>
              <th>Horas</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {query.data &&
              !query.isFetching &&
              query.data.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.cancelado ? "Sim" : "Não"}</td>
                  <td>{appointment.nomeEspecialidade}</td>
                  <td>{dateConverter(appointment.dia)}</td>
                  <td>{appointment.horas}</td>
                  <td className="status-column">
                    <button
                      className={`status ${
                        appointment.status === "cancelado" && "cancelled"
                      } ${appointment.status === "pendente" && "pending"} ${
                        appointment.status === "concluído" && "concluded"
                      }`}
                    >
                      {appointment.status}
                    </button>
                  </td>
                  <td>
                    <button className="action-btn">
                      <i className="fa-solid fa-pen-to-square delete"></i>
                    </button>
                    <button className="action-btn">
                      <i className="fa-solid fa-trash edit"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div
          style={{ margin: "16px 0", display: "flex", justifyContent: "end" }}
          className="container-pagination"
        >
          <button
            onClick={handlePrevButton}
            style={{ margin: "0 4px", cursor: "pointer" }}
          >
            Anterior
          </button>
          <button
            onClick={handleNextButton}
            style={{ margin: "0 4px", cursor: "pointer" }}
          >
            Próxima
          </button>
        </div>
        {query.isFetching && <Loader />}
      </Container>
    </DashboardLayout>
  );
};

export default Table;
