export interface PropsGetCitiesObject {
  id?: number;
  cidade_id?: number;
  estado_id?: number;
  franquia_id: null | number;
  nome: string;
  ativo: boolean;
  createdAt: string;
  updatedAt: string;
  estado: PropsGetCitiesStateObject;
}

export interface PropsGetCitiesStateObject {
  id?: number;
  nome: string;
  sigla: string;
  createdAt: string;
  updatedAt: string;
}
