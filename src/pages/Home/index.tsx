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

interface ICarDTO {
  thumbnail: string;
  brand: string;
}

export function Home(){
  const [cars, setCars] = useState<ICarDTO[]>([]);
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

   
  console.log(cars[1])

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
              />
            ))}
          </CarList>
        </CarListWrapper>
       </ContentWrapper>
    </Container>
  )
}