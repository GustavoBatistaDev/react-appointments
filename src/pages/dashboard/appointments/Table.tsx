import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import DashboardLayout from "../DashboardLayout";
import { Container } from "../components/Container";
import { TitleDashboard } from "../components/TitleDashboard";
import { getAppointments } from "../../../services/appointments/api.services";
import { useQuery } from "@tanstack/react-query";
import { AppointmentDto } from "../../../types/appointments";

const Table = () => {
  const token = Cookies.get("jwtToken");

  const query = useQuery({
    queryKey: ["appointments"],
    queryFn: async (): Promise<AppointmentDto[]> => {
      const response = await getAppointments(token as string);
      return response;
    },
  });

  console.log(query.data);

  return (
    <DashboardLayout>
      <Container>
        <div className="border title" style={{ position: "relative" }}>
          <TitleDashboard>Agendamentos</TitleDashboard>
          <button
            style={{ float: "right", position: "absolute", right: "0px" }}
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
              <th>Solicitação</th>
              <th>Horas</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {query.data &&
              query.data.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.cancelado ? "Sim" : "Não"}</td>
                  <td>{appointment.nomeEspecialidade}</td>
                  <td>{appointment.criado_em}</td>
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
      </Container>
    </DashboardLayout>
  );
};

export default Table;
