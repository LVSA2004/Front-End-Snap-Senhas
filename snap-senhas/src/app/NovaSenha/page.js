import Link from "next/link";


export default function Home() {
  return (

    <div class="relative h-screen">

      <img class="h-full w-screen" src="https://cdn.discordapp.com/attachments/970834305305694218/1141838829750321272/image.png" alt="background" />
      <div class="LogoETTulos w-80 h-96 absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/4">
        <img class="Snaplogo1 w-50 h-50 left-[55px] top-0 absolute" src="https://cdn.discordapp.com/attachments/970834305305694218/1141840687743123526/SnapLogo.png" />
        <div class="Snap left-[50px] top-[180px] absolute text-orange-300 text-7xl font-normal">Snap</div>
        <div class="GeradorDeSenhas w-screen h-60 left-[135px]  top-[350px] absolute transform -translate-x-1/2 -translate-y-1/3 left-1/2 top-1/5 text-white text-center text-4xl font-normal">Gerador de Senhas</div>
        <div class="BemVindo left-[45px] top-[320px] absolute text-orange-300 text-4xl font-semibold">Bem-Vindo</div>
      </div>


      <div class="Group37 w-96 h-80 left-[39%] top-[450px] absolute">
        <div class="Rectangle12 w-96 h-96 left-0 top-0 absolute bg-zinc-300 rounded-3xl"></div>
        <div class="ResetarSuaSenha w-80 h-14 left-[35px] top-[39px] absolute text-center text-violet-950 text-4xl font-semibold">Resetar sua Senha</div>
        <div class="EspaOSenha w-96 h-24 left-[26px] top-[104px] absolute">
          <input type="NovaSenha" placeholder="Nova Senha" class="NovaSenha w-30 h-16 left-[5px] top-[30px] absolute text-center text-neutral-500 text-2xl focus:outline-none font-normal rounded-3xl" />
        </div>
        <div class="EspaOSenha w-96 h-24 left-[-20px] top-[190px] absolute">
          <input type="ConfirmarSenha" placeholder="Confirmar Senha" class="NovaSenha w-30 h-16 left-[51px] top-[30px] absolute text-center text-neutral-500 text-2xl focus:outline-none font-normal rounded-3xl" />
        </div>
        <div class="BotODeCadastroConcluido w-60 h-16 left-[80px] top-[300px] absolute">
          <div class="Rectangle10 w-60 h-16 left-0 top-0 absolute bg-violet-950 rounded-3xl"></div>
          <a href="/Home" class="Enviar w-28 h-8 left-[63px] top-[16px] absolute text-center text-neutral-50 text-2xl font-semibold">Enviar</a>

        </div>
      </div>
    </div>


  )
}
