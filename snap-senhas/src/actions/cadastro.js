'use server'

import { revalidatePath } from "next/cache"

export async function create(formData) {
    const url = "http://localhost:8080/api/cadastro"
    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json"
      }
    }
    const result = await fetch(url, options)

    if(result.status !== 201){
      return {message: "Erro ao criar a conta. Verifique os campos."}
    }
    revalidatePath("/GeradorDeSenha")
    return {ok: "Conta criada com sucesso"}

}
   
