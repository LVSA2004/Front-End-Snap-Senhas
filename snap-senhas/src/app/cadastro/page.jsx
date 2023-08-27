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

      <div class="DadosDeCadastro w-96 h-15 left-[39%] top-[430px] absolute ">

        <div class="Rectangle6 w-96 h-16 left-0 top-0 absolute bg-zinc-300 bg-opacity-30 rounded-3xl"></div>
        <input type="Senha" placeholder="Usuário" class="Senha w-50 h-8 left-[-50px] top-[17px] absolute text-center bg-transparent focus:outline-none text-white text-xl font-normal text-white bg-opacity-30 rounded-3xl" />

        <div class="Rectangle7 w-96 h-16 left-0 top-[80px] absolute bg-zinc-300 bg-opacity-30 rounded-3xl"></div>
        <input type="Senha" placeholder="E-mail" class="Senha w-50 h-8 left-[-50px] top-[97px] absolute text-center bg-transparent focus:outline-none text-white text-xl font-normal text-white bg-opacity-30 rounded-3xl" />

        <div class="Rectangle8 w-96 h-16 left-0 top-[160px] absolute bg-zinc-300 bg-opacity-30 rounded-3xl"></div>
        <input type="Senha" placeholder="Senha" class="Senha w-50 h-8 left-[-50px] top-[177px] absolute text-center bg-transparent focus:outline-none text-white text-xl font-normal text-white bg-opacity-30 rounded-3xl" />

        <div class="Rectangle9 w-96 h-16 left-0 top-[240px] absolute bg-zinc-300 bg-opacity-30 rounded-3xl"></div>
        <input type="Senha" placeholder="Confirme sua senha" class="Senha w-50 h-8 left-[15px] top-[257px] absolute text-center bg-transparent focus:outline-none text-white text-xl font-normal text-white bg-opacity-30 rounded-3xl" />

        <div class="BotODeCadastroConcluido w-96 h-20 left-[-100px] top-[325px] relative">
          <div class="Rectangle10 w-56 h-16 left-[180px] top-[6px] absolute bg-zinc-300 rounded-3xl"></div>
          <a href="/Home" class="Concluir left-[220px] top-[15px] absolute text-center text-violet-950 text-4xl font-semibold">Concluir</a>
        </div>

      </div>
    </div>

  )
}
