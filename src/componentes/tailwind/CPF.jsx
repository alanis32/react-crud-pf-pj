import React from 'react';

import Label from './Label.jsx';
import LabelTitle from './LabelTitle.jsx';
import Button from './Button.jsx';
import InputText from './InputText.jsx';
import InputPassword from './InputPassword.jsx';

function Login() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-80">
        <LabelTitle texto="CADASTRO PESSSOA FISÍCA" />

        <div className="mb-4 flex flex-col">
          <Label texto="Nome:" />
          <InputText placeholder="name..." />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Sobrenome:" />
          <InputText placeholder="sob name..." />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Senha" />
          <InputPassword placeholder="passaword" />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Confirmar senha" />
          <InputPassword placeholder="passaword" />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="CPF" />
          <InputText placeholder="123.456.789-00" />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Endereço" />
          <InputText placeholder="cidade, rua, N°" />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Email" />
          <InputText placeholder="emailcoreto@gmail.com" />
        </div>

        <div className="mb-4 flex flex-col">
          <Label texto="Telefone" />
          <InputText placeholder="(89)12345-5432" />
        </div>

        <Button valor="Cadastrar" />
      </form>
    </div>
  );
}
export default Login;
