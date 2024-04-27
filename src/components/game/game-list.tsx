import {games} from "@/data";
import {GameCard} from "@/components/game/game-card";
import {useTranslations} from "next-intl";
import {GameSortOption, GameWithCard, OrderOption, SortableGameList} from "@/components/game/sortable-game-list";
import {Header} from "@/components/layout/header";



export const GameList = () => {
  const t = useTranslations("GameList")

  const sortOptions: GameSortOption[] = [
    {value: "name", label: t("Sorting.name")},
    {value: "complexity", label: t("Sorting.complexity")}
  ]

  const orderOptions: OrderOption[] = [
    {value: "asc", label: t("Sorting.Order.asc")},
    {value: "desc", label: t("Sorting.Order.desc")}
  ]

  const gamesWithCard: GameWithCard[] = games.map(game => ({game: game, card : (<GameCard game={game} />)}))

  return (
    <div>
      <div className="flex flex-col items-center mb-3">
        <Header level={2}>{t("header")}</Header>
        <div className="text-gray-500"><span className="font-bold">{games.length}</span><span>{t("numberOfGames")}</span></div>
      </div>
      <div>
        <SortableGameList sortOptions={sortOptions} gamesWithCard={gamesWithCard} orderOptions={orderOptions} labels={{sortBy: t("Sorting.sortBy"), sortDirection: t("Sorting.sortDirection")}} />
      </div>
    </div>
  )
}
