import React from 'react';

import LogoSvg from '../../assets/logo.svg'
import LupaPng from '../../assets/grande-lupa.png'

import { 
  Container,
  TopBarWrapper,
  TopBar,
  LogoImg,
  SearchBarWrapper,
  LupaIcon,
  SearchBar,
  SearchButton,
  LoginButton,
  ContentWrapper,
  FilterWrapper,
  CarListWrapper,
  CarList,
} from './styles';

export function Home(){
  return (
    <Container>
       <TopBarWrapper>
         <TopBar>
           <LogoImg src={LogoSvg}/>
           
           <SearchBarWrapper>
            <LupaIcon src={LupaPng}/>
            <SearchBar />
            <SearchButton>
              Buscar
            </SearchButton>
           </SearchBarWrapper>

           <LoginButton>Entrar</LoginButton>
         </TopBar>
       </TopBarWrapper>


       <ContentWrapper>
        <FilterWrapper>
          <div>Marcas</div>
          <div>Preços</div>
          <div>Categoria</div>
          
        </FilterWrapper>

        <CarListWrapper>
          <CarList>
            Car
          </CarList>
        </CarListWrapper>
       </ContentWrapper>
    </Container>
  )
}