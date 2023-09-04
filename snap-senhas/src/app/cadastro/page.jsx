"use client"
import { create } from "@/actions/cadastro";
import Link from "next/link";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { redirect } from 'next/navigation'

export default function Cadastro() {
  const [message, setMessage] = useState("")

  async function handleSubmit(formData){
    const res = await create(formData)
    if (res.message){
        setMessage(res.message)
        return
    }
    redirect("/GeradorDeSenha")
}

  return (

    <div class="relative h-screen">
      <img class="h-full w-screen" src="https://cdn.discordapp.com/attachments/970834305305694218/1141838829750321272/image.png" alt="background" />
      <div class="LogoETTulos w-80 h-96 absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/4">
        <img class="Snaplogo1 w-50 h-50 left-[55px] top-0 absolute" src="https://cdn.discordapp.com/attachments/970834305305694218/1141840687743123526/SnapLogo.png" />
        <div class="Snap left-[50px] top-[180px] absolute text-orange-300 text-7xl font-normal">Snap</div>
        <div class="GeradorDeSenhas w-screen h-60 left-[135px]  top-[350px] absolute transform -translate-x-1/2 -translate-y-1/3 left-1/2 top-1/5 text-white text-center text-4xl font-normal">Gerador de Senhas</div>
        <div class="BemVindo left-[45px] top-[320px] absolute text-orange-300 text-4xl font-semibold">Bem-Vindo</div>
      </div>

      <div class="DadosDeCadastro w-96 h-15 left-[39%] top-[430px] absolute ">

      <form action={handleSubmit}>
          <InputText label="Usuario" id="Usuario" name="Usuario" />
          <InputText label="E-mail" id="E-mail" name="E-mail" />
          <InputText label="Senha" id="Senha" name="Senha" />
          <InputText label="Confirme sua senha" id="Confirme sua senha" name="Confirme sua senha" />

      <div className="flex justify-around">
          <ButtonLink variante="primary" href="/Home" class="text-center text-violet-950">Cancelar</ButtonLink>
          <Button class="text-center text-violet-950">Concluir Cadastro</Button>
      </div>
          <p>{message}</p>
      </form>

      </div>
    </div>

  )
}
