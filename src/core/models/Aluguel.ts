import type { eTipoCobranca } from "../enum/eTipoCobranca";
 
export interface Sale {
    clientId: number;
    productId: number;
    valor_aluguel: number;
    tipo_cobranca: eTipoCobranca;

    create_at: Date;
    update_at: Date;

}
  