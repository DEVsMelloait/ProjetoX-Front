 import type { ContatoEndereco } from "./ContatoEnderecos";
 
export interface Client extends ContatoEndereco {
    name: string;
    aniversario?: Date;
    document: string;

    create_at: Date;
    update_at: Date;
}