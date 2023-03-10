import { Dossie } from "@/services/database";

export async function createDossie(params: any) {
  // Action 1 = Cadastrar, 2 = Alterar, 3 = Excluir
  // Identifier = 1 room, 2 = payment
  const dossie = new Dossie(params);
  await dossie.save();
}
