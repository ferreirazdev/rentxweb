import { CarDTO } from '../../dtos/CarDTO'
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


export function Car({
  thumbnail,
  brand,
  name,
  rent: {
    period,
    price
  }
}: CarDTO){
  return (
    <Container to={'/'}>
      <CarImage 
        src={thumbnail}
      />
      <Details>
        <div>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
        </div>
        <Rent>
          <Period>{period}</Period>
          <Price>{price}</Price>
        </Rent>
        
      </Details>
    </Container>
  )
}