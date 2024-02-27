import Cookies from "js-cookie";

import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { Column } from "../components/Column";
import { Container } from "../components/Container";
import { ContainerInput } from "../components/ContainerInput";
import { GridForm } from "../components/GridForm";
import { Label } from "../components/Label";
import { TitleDashboard } from "../components/TitleDashboard";

import { myToast } from "../../../utils/toasts";
import { AppointmentDto } from "../../../types/appointments";
import { createAppointment } from "../../../services/appointments/api.services";
import DashboardLayout from "../DashboardLayout";

const CreateAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentDto>();

  const onSubmit = async (data: AppointmentDto) => {
    const token = Cookies.get("jwtToken") as string;
    const result = await createAppointment(data, token);

    if (result.response?.data.message) {
      myToast(true, result.response?.data.message + ".");
      return;
    }
    myToast(false, "Agendado com sucesso.");

    reset();
  };

  return (
    <DashboardLayout>
      <Container>
        <div className="border title">
          <TitleDashboard>Agendar</TitleDashboard>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <GridForm>
            <Column>
              <ContainerInput>
                <Label>Dia</Label>
                <input
                  className={`input-dash`}
                  type="date"
                  {...register("dia", { required: true })}
                />
                {errors.dia && (
                  <span className="error">Este campo é obrigatório</span>
                )}
              </ContainerInput>
              <ContainerInput>
                <Label>Razão da consulta</Label>
                <input
                  className={`input-dash `}
                  type="text"
                  {...register("razao_consulta", { required: true })}
                />
                {errors.razao_consulta && (
                  <span className="error">Este campo é obrigatório</span>
                )}
              </ContainerInput>
              <ContainerInput>
                <Label>Necessidade especial</Label>
                <input
                  className={`input-dash `}
                  type="text"
                  {...register("necessidade_especial", { required: true })}
                />
                {errors.necessidade_especial && (
                  <p className="error">Este campo é obrigatório</p>
                )}
              </ContainerInput>
            </Column>
            <Column>
              <ContainerInput>
                <Label>PCD</Label>
                <select className="input-dash" {...register("pcd")}>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </ContainerInput>
              <ContainerInput>
                <Label>Doença crônica</Label>
                <select className="input-dash" {...register("doenca_cronica")}>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </ContainerInput>
              <ContainerInput>
                <Label>Especialista</Label>
                <select
                  className="input-dash"
                  {...register("especialidades_id")}
                >
                  <option value="3">Ortopedista</option>
                  <option value="4">Oftalmologista</option>
                  <option value="5">Ginecologista</option>
                  <option value="6">Clínico geral</option>
                </select>
              </ContainerInput>
            </Column>
            <Column>
              <ContainerInput>
                <Label>Horas</Label>
                <select className="input-dash" {...register("horas")}>
                  <option value="08:00:00">08:00:00</option>
                  <option value="09:00:00">09:00:00</option>
                  <option value="10:00:00">10:00:00</option>
                  <option value="11:00:00">11:00:00</option>
                  <option value="12:00:00">12:00:00</option>
                  <option value="14:00:00">14:00:00</option>
                  <option value="15:00:00">15:00:00</option>
                  <option value="16:00:00">16:00:00</option>
                  <option value="17:00:00">17:00:00</option>
                </select>
              </ContainerInput>
            </Column>
          </GridForm>
          <Column>
            <>
              <Button type="submit" className="btn-send">
                Enviar
              </Button>
              <Button type="button" className="btn-cancel">
                Cancelar
              </Button>
            </>
          </Column>
        </form>
      </Container>
    </DashboardLayout>
  );
};

export default CreateAppointment;
