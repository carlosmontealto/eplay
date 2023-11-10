import { Imagem, Precos, Titulo } from './styles'

import BannerImg from '../../assets/images/banner-homem-aranha.png'
import { TagContainer } from '../Tag/styles'
import Button from '../Button'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
      <div className="container">
        <TagContainer size="big">Destaque do dia</TagContainer>
        <div>
          <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Precos>
            De <span>R$ 249,90</span>
            <br />
            por apenas R$ 99,90
          </Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
