'use server'

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/snapsenhas"

export async function getResposta(){
  const token = cookies().get("snap_token")
  const options = {
    headers: {
      "Authorization": `Bearer ${token.value}`
    }
  }
  const result = await fetch(url, options)
  
  if (result.status !== 200){
    throw new Error(`Falha ao obter resposta. (${result.status})` )
  }
  
  const json = await result.json()
  return json
}

export async function destroy(id){
  const options = {
    method: "DELETE"
  }

  const deleteURL = `${url}/${id}` 

  const response = await fetch(deleteURL, options)
  
  if (!response.ok){
    const json = await response.json()
    return {error: "Falha ao apagar pergunta. " + json.message }
  }

  revalidatePath("/deletar/{id}")
}

export async function getPergunta(id){
  const getUrl = `${url}/${id}`
  const response = await fetch(getUrl)
  const json = await response.json()

  if (!response.ok){
    throw new Error("Não foi possível carregar os dados da sua pergunta.")
  }

  return json
}

export async function update(conta){
  const updateUrl = `${url}/${conta.id}`

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(conta)
  }

  const result = fetch (updateUrl, options)

  if (!result.status == 200){
    return { message: "Erro ao atualizar a pergunta" }
  }

  revalidatePath("/atualizar/{id}")
  return {ok: "Pergunta feita com sucesso"}
}

   