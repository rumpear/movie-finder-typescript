import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 10px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 15px; */
`;

export const Item = styled.li`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: grid;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
`;
export const Image = styled.img`
  width: 80px;
  margin-right: 10px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
  /* justify-content: center;
  align-items: center; */
`;
