import { URLSearchParamsInit } from 'react-router-dom';

export interface IProps {
  onSearch: (query: URLSearchParamsInit) => void;
  query: string | null;
}

export type THandleSubmit = (
  e: React.MouseEvent<HTMLButtonElement>
) => void;

export type THandleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => void;
