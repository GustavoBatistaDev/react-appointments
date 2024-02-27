import { AppointmentDto } from "../../types/appointments";
import { apiDash } from "../axios.config";

export const createAppointment = async (
  data: AppointmentDto,
  token: string
) => {
  try {
    const response = await apiDash(token).post("api/agendamentos", data);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAppointments = async (
  token: string
): Promise<AppointmentDto[]> => {
  try {
    const response = await apiDash(token).get("api/agendamentos");

    return response.data;
  } catch (error) {
    throw new Error("Não foi possível carregar os agendamentos.");
  }
};
