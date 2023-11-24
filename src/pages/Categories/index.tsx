import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRPGGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        isLoading={isLoadingRPG}
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
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sport"
        games={sportGames}
        title="Esportes"
        background="black"
        isLoading={isLoadingSport}
      />
      <ProductsList
        id="fight"
        games={fightGames}
        title="Luta"
        background="gray"
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="simulation"
        games={simulationGames}
        title="Simulação"
        background="black"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
