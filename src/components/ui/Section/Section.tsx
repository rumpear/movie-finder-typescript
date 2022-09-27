import { ReactNode } from "react";
import { Container } from "./Section.styled";

interface IProps {
  children: ReactNode;
}

export const Section = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};
