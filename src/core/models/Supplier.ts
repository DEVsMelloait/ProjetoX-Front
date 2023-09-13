 import type { ContatoEndereco } from "./ContatoEnderecos";
 

export interface Supplier extends ContatoEndereco {
    name: string;  
    document: string;
    create_at: Date;
    update_at: Date;
}