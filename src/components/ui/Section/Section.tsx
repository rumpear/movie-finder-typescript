import { Container } from './Section.styled';
import { IProps } from './types';

export const Section = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};
