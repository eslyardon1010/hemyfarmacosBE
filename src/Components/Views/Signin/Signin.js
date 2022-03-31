import Page from "../../UX/Page/Page";
import Input from "../../UX/Forms/Input";
import { PrimaryButton, SecondaryButton } from "../../UX/Forms/Button";
import Nav from "../../UX/Nav/Nav";
import "../Login/Login.css"
const SignIn = ({
  txtCorreoValue,
  txtPasswordValue,
  onChange: onChangeHandler,
  errorTxtCorreo,
  errorPassword,
  onConfirmClick,
  onCancelClick
})=> {
  return (
    <Page header={(<h2>&nbsp;Crear Cuenta</h2>)} footer={<Nav />}>
      <section className="align">
      <section className = "container-signin"> 
        <Input
          label="Correo Electrónico"
          type="text"
          name="txtCorreo"
          placeholder=" Correo Electrónico"
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
          onChange={onChangeHandler}
        />
        <PrimaryButton onClick={onConfirmClick}>
          Crear Cuenta
        </PrimaryButton>
        <SecondaryButton onClick={onCancelClick}>
          Tengo Cuenta
        </SecondaryButton>
      </section>
      </section>
    </Page>
  );
}

export default SignIn;
