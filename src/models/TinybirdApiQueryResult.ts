export interface TinybirdApiQueryResult<T> {
  meta: {
    name: string;
    type: string;
  }[];
  data: T[];
  rows: number;
  statistics: {
    elapsed: number
    rows_read: number;
    bytes_read: number;
  };
}
