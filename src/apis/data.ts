/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import client from './client';

export default class DataClient {
  private static url: string;

  static find<T extends DataClient>(this: { new (data: T): T } & typeof DataClient) {
    return client.get<T[]>(`${this.url}`);
  }

  static findBy<T extends DataClient>(this: { new (data: T): T } & typeof DataClient, id: number) {
    return client.get<T>(`${this.url}/${id}`);
  }
}

/**
 * url을 private에서 protected로 바꿔주는 역할
 */
export function DataDecorator(url: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      protected static url = url;
    };
  };
}
