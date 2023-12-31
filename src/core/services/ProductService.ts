import type { Product } from "../models/Product";
import { http } from "../api/index"
import type { AxiosResponse } from "axios";

const controller = 'product'

export async function GetAll(): Promise<Product[]> {
    const { data } = await http.get<Product[], AxiosResponse>(`${controller}`);
    return data;
}
export async function Post(item: Product): Promise<Product> {
    const { data } = await http.post<Product, AxiosResponse>(`${controller}`, item);
    return data;
}
export async function Find(id: number): Promise<Product[]> {
    const { data } = await http.get<Product[], AxiosResponse>(`${controller}/${id}`);
    return data;
}
export async function Edit(item: Product, id: number): Promise<Product[]> {
    const { data } = await http.put<Product[], AxiosResponse>(`${controller}/${id}`,item);
    return data;
}
export async function Delete(id: number): Promise<Product[]> {
    const { data } = await http.delete<Product[], AxiosResponse>(`${controller}/${id}`);
    return data;
}
export async function Active(id: number): Promise<Product[]> {
    const { data } = await http.put<Product[], AxiosResponse>(`${controller}/active/${id}`);
    return data;
}
