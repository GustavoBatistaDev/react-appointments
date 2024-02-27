import { Label } from "../components/Label";

import { Input } from "../components/Input";
import { Container } from "../components/Container";
import { TitleDashboard } from "../components/TitleDashboard";
import { GridForm } from "../components/GridForm";
import { Column } from "../components/Column";
import { ContainerInput } from "../components/ContainerInput";
import { Button } from "../components/Button";
import DashboardLayout from "../DashboardLayout";

const Profile = () => {
  return (
    <DashboardLayout>
      <Container>
        <div className="border title">
          <TitleDashboard>Informações Pessoais</TitleDashboard>
        </div>
        <GridForm>
          <Column>
            <ContainerInput>
              <Label>Nome</Label>
              <Input type="text" className={"input-dash"} />
            </ContainerInput>
            <ContainerInput>
              <Label>Último nome</Label>
              <Input type="text" className="input-dash" />
            </ContainerInput>
            <ContainerInput>
              <Label>Email</Label>
              <Input type="email" className={"input-dash"} />
            </ContainerInput>
          </Column>
          <Column>
            <ContainerInput>
              <Label>CPF</Label>
              <Input type="email" className={"input-dash"} />
            </ContainerInput>
            <ContainerInput>
              <Label>Senha</Label>
              <Input type="email" className={"input-dash"} />
            </ContainerInput>
            <ContainerInput>
              <Label>Foto</Label>
              <Input type="file" className={"input-dash file"} />
            </ContainerInput>
          </Column>
          <Column>
            <ContainerInput>
              <Label>RG</Label>
              <Input type="text" className={"input-dash"} />
            </ContainerInput>
            <ContainerInput>
              <Label>Data de nascimento</Label>
              <Input type="email" className={"input-dash"} />
            </ContainerInput>
            <ContainerInput>
              <Label>Celular</Label>
              <Input type="email" className={"input-dash"} />
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
    </DashboardLayout>
  );
};

export default Profile;
