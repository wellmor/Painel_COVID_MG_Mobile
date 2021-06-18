import {
  chain,
  orderBy,
  find,
  filter,
  includes,
  sortBy,
  findIndex,
} from 'lodash';

import api from './axios-config';
import Store from '../store';

import { PropsGetCitiesObject } from './requests-api.types';

export class RequestsApi {
  getBanner = async () => {
    try {
      const response = await api.get('/banner');
      return response.data.imagem;
    } catch (err) {
      console.log(err.response);
    }
  };

  getCities = async () => {
    try {
      const response = await api.get<PropsGetCitiesObject>('/localidade');
      const citiesFormatObject = chain(response.data)
        .groupBy((o :PropsGetCitiesObject) => o.estado.nome)
        .map((data: PropsGetCitiesObject, title: string) => ({ title, data: orderBy(data, ['nome'], ['asc']) }))
        .value();
      return orderBy(citiesFormatObject, ['title'], ['asc']);
    } catch (err) {
      console.log(err.response.status);
    }
  };

  getStablishments = async (localidade_id: number) => {
    try {
      const response = await api.get('/estabelecimento', {
        params: {
          localidade_id,
        },
      });

      const stablishmentFormatObject = chain(response.data)
        .map((stablishment) => {
          stablishment.categoria_principal = find(stablishment.categorias, { principal: true });
          return stablishment;
        })
        .value();
      return orderBy(stablishmentFormatObject,
        ['aberto', 'novo', 'media_avaliacoes_90', 'total_avaliacoes_90'],
        ['desc', 'desc', 'desc', 'desc']);
    } catch (err) {
      console.log(err.response);
    }
  };

  getStablishment = async (stablishment_id: number) => {
    try {
      const response = await api.get(`/estabelecimento/${stablishment_id}`);
      response.data.categoria_principal = find(response.data.categorias, { principal: true });
      return response.data;
    } catch (err) {
      console.log(err.response);
    }
  };

  getStablishmentMenu = async (stablishment_id: number) => {
    try {
      const response = await api.get('/item-catalogo', {
        params: {
          estabelecimento_id: stablishment_id,
        },
      });
      const MenuFormat = chain(response.data)
        .groupBy((o) => o.categoria_catalogo.nome)
        .map((data, title, all) => ({
          id: data[0].categoria_catalogo_id,
          nome: title,
          data: data.sort((a, b) => a.indice - b.indice),
          index: Object.keys(all).indexOf(title),
          anchor: 0,
        }))
        .value();
        // sortBy(MenuFormat, (item) => (item?.forma_pagamento?.nome))
      return sortBy(MenuFormat, (item) => (item?.nome));
    } catch (err) {
      console.log(err.response);
    }
  }

  getStablishmentItemMenu = async (stablishment_id: number, item_id: number) => {
    try {
      const response = await api.get(`/item-catalogo/${item_id}`, {
        params: {
          estabelecimento_id: stablishment_id,
        },
      });

      return response.data;
    } catch (err) {
      console.log(err.response);
    }
  }

  getStablishmentMethodsPayment = async (stablishment_id: number) => {
    try {
      const response = await api.get('/forma-pagamento-estabelecimento', {
        params: {
          estabelecimento_id: stablishment_id,
        },
      });
      return response.data;
    } catch (err) {
      console.log(err.response);
    }
  }

  // getOneStablishments = async (id) => {
  //   const response = await api.get('/app/estabelecimento', {
  //     params: {
  //       id,
  //       fields:
  //         'delivery,avaliacoes_90,emails,catalogos,forma_pagamento,bairros,horario_funcionamento,categorias',
  //       columns: 'media_avaliacoes_90,localidade,categoria,acessos',
  //     },
  //   });
  //   return response.data[0];
  // };

  // getFavoritesStablishments = async () => {
  //   const responseFavorites = (await Store.get('favorites')) || [];
  //   if (!responseFavorites.length) return false;

  //   const responseCity = JSON.parse(await Store.getCity());
  //   const response = await api.get('/app/estabelecimento', {
  //     params: {
  //       hasDelivery: true,
  //       fields: 'delivery',
  //       columns: 'total_avaliacoes_90,media_avaliacoes_90,categoria,novo',
  //       localidade_id: responseCity.id,
  //     },
  //   });

  //   return orderBy(response.data.filter((o) => includes(responseFavorites, o.id)),
  //     ['aberto', 'novo', 'media_avaliacoes_90', 'total_avaliacoes_90'],
  //     ['desc', 'desc', 'desc', 'desc']);
  // };

  // getItemsMenu = async (id) => {
  //   const response = await api.get('/app/catalogo/item', {
  //     params: {
  //       estabelecimento_id: id,
  //       ativo: 1,
  //       vigente: 1,
  //       variacao: 0,
  //       categoria_ativo: 1,
  //       disponiveis: true,
  //     },
  //   });

  //   const MenuFormat = chain(response.data)
  //     .groupBy((o) => o.categoria)
  //     .map((data, title) => ({
  //       id: data[0].categoria_id,
  //       nome: title,
  //       indice: data[0].indice_categoria,
  //       itens: data.sort((a, b) => a.indice - b.indice),
  //       min: data[0].min,
  //       max: data[0].max,
  //       mod_preco: data[0].mod_preco,
  //       opened: true,
  //     }))
  //     .value()
  //     .sort((a, b) => a.indice - b.indice);

  //   return MenuFormat;
  // };

  // getOneItemMenu = async (id) => {
  //   const response = await api.get(`/app/catalogo/item?item_catalogo_id=${id}&ativo=1&vigente=1&variacao=1&categoria_ativo=1&disponiveis=true
  //   `,
  //   {
  //   });

  //   const ItemFormat = chain(response.data)
  //     .groupBy((o) => o.categoria)
  //     .map((items, categoria) => ({
  //       categoria_id: items[0].categoria_id,
  //       catalogo_id: items[0].catalogo_id,
  //       categoria,
  //       items,
  //       min: items[0].min,
  //       max: items[0].max,
  //       gratis: items[0].preco === 0,
  //     }))
  //     .value();

  //   return ItemFormat;
  // };
}

export default new RequestsApi();
