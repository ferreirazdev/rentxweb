import {useEffect, useState} from 'react';

import LogoSvg from '../../assets/logo.svg'
import LupaPng from '../../assets/grande-lupa.png'

import { Car } from '../../components/Car';

import { api } from '../../services/api';

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

import { CarDTO } from '../../dtos/CarDTO';

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data)
      }catch (error) {
        console.log(error)
      }finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

   

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
            {cars.map((car) => (
              <Car 
                thumbnail={car.thumbnail}
                brand={car.brand}
                name={car.name}
                rent={car.rent}
              />
            ))}
          </CarList>
        </CarListWrapper>
       </ContentWrapper>
    </Container>
  )
}