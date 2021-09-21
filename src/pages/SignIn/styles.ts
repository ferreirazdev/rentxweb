import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 50px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #DC1637;
  width: 50%;
`;

export const TitleWrapper = styled.div`
  align-items: flex-start;
  h1 {
    font-size: 45px;
    font-family: 'Archivo', sans-serif;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.main_light};
    margin-bottom: 10px;
  }

  h2 {
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.shape};
    line-height: 30px;
  }
`;

export const FormWrapper = styled.div`
  margin-top: 30px;
  align-items: flex-start;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const Input = styled.input`
  width: 30vw;
  font-size: 15px;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  margin-bottom: 10px;
  background-color: #5f5f62;
  color: ${({ theme }) => theme.colors.shape};

  :focus {
    outline: 2px solid #DC1637;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.shape};
  margin-top: 10px;
  align-self: center;
  width: 60%;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  margin-bottom: 10px;
  background-color: #DC1637;
`;

export const Link = styled.a`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  text-decoration: underline;
`;

export const ImageWrapper = styled.div`
  width: 50%;
  
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 100%;
`;