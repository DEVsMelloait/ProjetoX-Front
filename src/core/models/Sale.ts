export interface Sale   {
    clientId: number;
    productId: number;
    valor_final: number;
    discount: number;
    exit_date: Date;


    create_at: Date;
    update_at: Date;
}
  