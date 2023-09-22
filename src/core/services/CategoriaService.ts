import type { Categoria } from "../models/Categoria";
import { http } from "../api/index"
import type { AxiosResponse } from "axios";

const controller = 'categoria' 

export async function GetAll(): Promise<Categoria[]> {
    const { data } = await http.get<Categoria[], AxiosResponse>(`${controller}`);
    return data;
}
export async function Post(): Promise<Categoria> {
    const { data } = await http.post<Categoria, AxiosResponse>(`${controller}`);
    return data;
}
export async function Find(id: number): Promise<Categoria[]> {
    const { data } = await http.get<Categoria[], AxiosResponse>(`${controller}/${id}`);
    return data;
}
export async function Edit(id: number): Promise<Categoria[]> {
    const { data } = await http.put<Categoria[], AxiosResponse>(`${controller}/${id}`);
    return data;
}
