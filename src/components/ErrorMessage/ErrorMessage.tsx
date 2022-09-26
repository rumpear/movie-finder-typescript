interface IProps {
  message: string;
}

export const ErrorMessage = ({ message }: IProps) => {
  return <h1>{message}</h1>;
};
