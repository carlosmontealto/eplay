import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList
          id="rpg"
          games={rpgGames}
          title="RPG"
          background="black"
        />
        <ProductsList
          id="action"
          games={actionGames}
          title="Ação"
          background="gray"
        />
        <ProductsList
          id="sport"
          games={sportGames}
          title="Esportes"
          background="black"
        />
        <ProductsList
          id="fight"
          games={fightGames}
          title="Luta"
          background="gray"
        />
        <ProductsList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando ...</h4>
}

export default Categories
