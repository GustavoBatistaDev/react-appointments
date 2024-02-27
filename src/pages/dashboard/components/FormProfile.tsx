import { Button } from './Button';
import { Column } from './Column';
import { Container } from './Container';
import { ContainerInput } from './ContainerInput';
import { GridForm } from './GridForm';
import { Input } from './Input';
import { Label } from './Label';
import { TitleDashboard } from './TitleDashboard';

export const FormProfile = () => {
  return (
    <Container>
      <div className="border title">
        <TitleDashboard>Informações Pessoais</TitleDashboard>
      </div>
      <GridForm>
        <Column>
          <ContainerInput>
            <Label>Nome</Label>
            <Input type="text" />
          </ContainerInput>
          <ContainerInput>
            <Label>Último nome</Label>
            <Input type="text" />
          </ContainerInput>
          <ContainerInput>
            <Label>Email</Label>
            <Input type="email" />
          </ContainerInput>
        </Column>
        <Column>
          <ContainerInput>
            <Label>CPF</Label>
            <Input type="text" />
          </ContainerInput>
          <ContainerInput>
            <Label>Senha</Label>
            <Input type="password" />
          </ContainerInput>
          <ContainerInput>
            <Label>Foto</Label>
            <Input type="file" className="file" />
          </ContainerInput>
        </Column>
        <Column>
          <ContainerInput>
            <Label>RG</Label>
            <Input type="text" />
          </ContainerInput>
          <ContainerInput>
            <Label>Data de nascimento</Label>
            <Input type="date" />
          </ContainerInput>
          <ContainerInput>
            <Label>Celular</Label>
            <Input type="text" />
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
