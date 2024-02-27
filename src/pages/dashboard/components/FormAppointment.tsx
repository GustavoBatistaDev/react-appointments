import { Button } from "./Button";
import { Column } from "./Column";
import { Container } from "./Container";
import { ContainerInput } from "./ContainerInput";
import { GridForm } from "./GridForm";
import { Input } from "./Input";
import { Label } from "./Label";
import { TitleDashboard } from "./TitleDashboard";

export const FormAppointment = () => {
  return (
    <Container>
      <div className="border title">
        <TitleDashboard>Agendar</TitleDashboard>
      </div>
      <GridForm>
        <Column>
          <ContainerInput>
            <Label>Dia</Label>
            <Input type="date" />
          </ContainerInput>
          <ContainerInput>
            <Label>Razão da consulta</Label>
            <Input type="text" />
          </ContainerInput>
          <ContainerInput>
            <Label>Necessidade especial</Label>
            <Input type="text" />
          </ContainerInput>
        </Column>
        <Column>
          <ContainerInput>
            <Label>PCD</Label>
            <select className="input-dash" name="" id="">
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </ContainerInput>
          <ContainerInput>
            <Label>Doença crônica</Label>
            <select className="input-dash" name="" id="">
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </ContainerInput>
          <ContainerInput>
            <Label>Especialista</Label>
            <select className="input-dash" name="" id="">
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
            <select className="input-dash" name="" id="">
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
          <Button className="btn-send">Enviar</Button>
          <Button className="btn-cancel">Cancelar</Button>
        </>
      </Column>
    </Container>
  );
};
