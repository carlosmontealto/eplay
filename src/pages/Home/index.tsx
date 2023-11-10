import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jppg eletrônico survival horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$249,90'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jppg eletrônico survival horror',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['-5%', 'R$289,90'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jppg eletrônico survival horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$249,90'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jppg eletrônico survival horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['-10%', 'R$249,90'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment',
    title: 'Diablo IV',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description: 'lorem ips',
    title: 'Diablo IV',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'Ação',
    description: 'Lorem Ips',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jppg eletrônico survival horror',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['17/05'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
