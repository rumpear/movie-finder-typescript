export interface IFrom {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: null;
}

export interface ILocation extends Location {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state?: {
    from: IFrom;
  };
}
