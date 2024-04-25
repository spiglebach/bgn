import {games} from "@/data";
import {GameCard} from "@/components/game/game-card";
import {useTranslations} from "next-intl";
import {GameWithCard, OrderOption, SortableGameList} from "@/components/game/SortableGameList";



export const GameList = () => {
  const t = useTranslations("GameList")

  const sortOptions: SortOption[] = [
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
      <h2 className="text-2xl text-center mb-4">{t("header")}</h2>
      <div>
        <SortableGameList sortOptions={sortOptions} gamesWithCard={gamesWithCard} orderOptions={orderOptions} labels={{sortBy: t("Sorting.sortBy"), sortDirection: t("Sorting.sortDirection")}} />
      </div>
    </div>
  )
}
