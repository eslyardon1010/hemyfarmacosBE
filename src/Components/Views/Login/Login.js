import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import "./Login.css";

const Login = ({
  txtCorreoValue,
  txtPasswordValue,
  onChange: onChangeHandler,
  errorTxtCorreo,
  errorPassword,
  onConfirmClick,
  onCancelClick
}) => {
  return (
    <Page header={(<h2>&nbsp;Iniciar Sesión</h2>)} footer={<Nav/>}>
      <section className="align">
      <section className = "container-login"> 
        <Input 
          label="Correo Electrónico"
          type="text"
          name="txtCorreo"
          placeholder="Correo Electrónico"
          value={txtCorreoValue}
          error={errorTxtCorreo}
          onChange={onChangeHandler}
        />
        <Input
          label="Contraseña"
          type="password"
          name="txtPassword"
          placeholder="Contraseña"
          value={txtPasswordValue}
          info="Incluya minimo 8 caractéres, una mayuscula, una minuscula, un numero y un simbolo."
          error={errorPassword}
          hasError={!!(errorPassword && true)}
          onChange={onChangeHandler}
        />
        <PrimaryButton className="button" onClick={onConfirmClick}>
          Iniciar Sesión
        </PrimaryButton>
        <SecondaryButton onClick={onCancelClick}>
          Crear Cuenta
        </SecondaryButton>
      </section>
      </section>
    </Page>
  );
}

export default Login;
