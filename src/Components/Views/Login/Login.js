import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import { useNavigate } from "react-router-dom";


import "./Login.css";


const Login = ({
  txtCorreoValue,
  txtPasswordValue,
  onChange: onChangeHandler,
  errorTxtCorreo,
  errorPassword,
  onConfirmClick,
}) => {
  let navigate = useNavigate();
  return (
    
    <Page header={(<h2>&nbsp;Iniciar Sesión</h2>)}>
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
        <PrimaryButton onClick={onConfirmClick}>
          Iniciar Sesión
        </PrimaryButton>
        <SecondaryButton onClick={() => navigate("/signin")} >
         Registrarme
        </SecondaryButton>
      </section>
      </section>
    </Page>
  );
}

export default Login;
