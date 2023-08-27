import Link from "next/link";


export default function Home() {
  return (

    <div class="relative h-screen">
    <img class="h-screen w-screen" src="https://cdn.discordapp.com/attachments/970834305305694218/1141838829750321272/image.png" alt="background" />
    <div class="LogoETTulos w-80 h-96  absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/4 text-center">
        <img class="Snaplogo1 w-50 h-50 mx-auto" src="https://cdn.discordapp.com/attachments/970834305305694218/1141840687743123526/SnapLogo.png" />
        <div class="Snap text-orange-300 text-7xl font-normal">Snap</div>
        <div class="GeradorDeSenhas w-full h-60 text-white text-4xl font-normal">Gerador de Senhas</div>
        
    </div>

    <div class="EspaOUsuRio w-96 h-20 left-[50%]  transform -translate-x-1/2 top-[430px] absolute">
        <div class="Rectangle6 w-full h-full bg-zinc-300 bg-opacity-30 rounded-3xl"></div>
        <input type="Usuário" placeholder="Digite seu Usuário" class="UsuRio w-11/24 h-8  absolute left-[10%] top-[25px] mx-auto bg-transparent focus:outline-none text-white text-xl font-normal" />
    </div>

    <div class="EspaOSenha w-96 h-20 left-[50%] top-[60%] transform -translate-x-1/2 top-[520px] absolute">
        <div class="Rectangle5 w-full h-full bg-zinc-300 bg-opacity-30 rounded-3xl">
            <input type="Senha" placeholder="Digite sua Senha" class="Senha w-1/2 h-8 left-[10%] top-[25px] absolute mx-auto bg-transparent focus:outline-none text-white text-xl font-normal text-white bg-opacity-30 rounded-3xl" />
        </div>
    </div>

    <div class="LoginEEsqueceuSenha h-28 left-[50%] transform -translate-x-1/2 top-[650px] absolute">
        <div class="BotODeLogin  w-80 h-14 left-[50%] top-[20%]">
            <div class="Rectangle3 w-full h-full left-[50%] bg-neutral-100 rounded-3xl"></div>
            <a href="/GeradorDeSenha" class="Login w-40 h-8 left-[25%] top-[10px] absolute mx-auto text-center text-violet-950 text-2xl font-semibold">Login</a>
        </div>
        <a href="/ResetSenha" class="EsqueceuSuaSenha w-56 h-7 left-[15%] top-[70px] absolute block mt-3 mx-auto text-center text-red-50 text-base font-normal">Esqueceu sua senha ?</a>
    </div>

    <a href="/cadastro" class="AindaNOTenhoUmCadastro w-96 h-9 left-[50%] absolute transform -translate-x-1/2 top-[800px] block text-white text-2xl font-semibold text-center">Ainda não tenho um cadastro</a>
</div>


  )
}
