import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  CarImage
} from './styles'

interface ICarDTO {
  thumbnail: string;
  brand: string;
}


export function Car({
  thumbnail,
  brand,
}: ICarDTO){
  return (
    <Container to={'/'}>
      <CarImage 
        src={thumbnail}
      />
      <Details>
        <Brand>{brand}</Brand>
        
      </Details>
    </Container>
  )
}