import type { eTipo } from "../enum/eTipo";
import type { Categoria } from "./Categoria";

export interface Product {
    id?:number;
    name: string;
    tipo?: eTipo;
    status: boolean;
    categoriaId: number;
    preco_custo: number;
    preco_final: number;
    suppliersId: number;

}