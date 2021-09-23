import styled from "styled-components";

export const Container = styled.div``;

export const TopBarWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 15px 100px;
  border-bottom: 1px solid #DC1637;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img``;

export const SearchBarWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #5f5f62;
  border-radius: 5px;
`;

export const LupaIcon = styled.img`
  padding: 0 10px;
`;

export const SearchBar = styled.input`
  width: 100%;
  font-size: 13px;
  border-radius: 5px;
  padding: 5px 15px;
  border: none;
  background-color: #5f5f62;
  color: ${({ theme }) => theme.colors.shape};
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  :focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  border-radius: 5px;
  padding: 8px;
  border: none;
  background-color: transparent;
`;

export const LoginButton = styled.button`
  color: ${({ theme }) => theme.colors.shape};
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  background-color: #DC1637;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.colors.header};
  height: 100vh;
`;

export const CarListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background_primary};
  width: 100vw;
  padding: 20px 20px;
`;

export const CarList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
