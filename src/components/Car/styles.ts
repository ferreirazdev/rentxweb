import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  min-width: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const CarImage = styled.img`
  object-fit: contain;
  width: 167px;
  height: 85px;
`;

export const Details = styled.div`

`;

export const Brand = styled.h1`
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: 10px;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  font-size: 10px;
`;

export const About = styled.div`

`;

export const Rent = styled.div`

`;

export const Period = styled.h1`
  font-size: 10px;
`;

export const Price = styled.h1`
  font-size: 10px;
`;

export const Type = styled.div`

`;

