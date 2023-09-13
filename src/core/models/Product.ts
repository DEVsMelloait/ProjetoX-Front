import type { eTipo } from "../enum/eTipo";
import type { Categoria } from "./Categoria";

export interface Product {
    name: string;
    tipo: eTipo;
    categoriaId: number;
    preco_custo: number;
    preco_final: number;
    suppliersId: number;
}