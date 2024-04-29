import {Header} from "@/components/layout/header";
import {GameCardPager} from "@/components/game/game-card-pager";
import {GameCard} from "@/components/game/game-card";
import {games} from "@/data";
import {useTranslations} from "next-intl";

export const GameSuggestions = () => {
  const t = useTranslations("NextOccasion.SuggestedGames")

  const simpleGameCards = [21].map(gameIdx => games[gameIdx]).map(game => <GameCard key={game.name} game={game} />)
  const complexGameCards = [2, 4].map(gameIdx => games[gameIdx]).map(game => <GameCard key={game.name} game={game} />)
  const socialGameCards = [5, 15].map(gameIdx => games[gameIdx]).map(game => <GameCard key={game.name} game={game} />)

  return (
    <div>
      <Header level={2} className="mb-4">{t("header")}</Header>
      <div className="flex gap-5">
        <div>
          <Header level={3}>{t("Types.Simple")}</Header>
          <GameCardPager gameCards={simpleGameCards}/>
        </div>
        <div>
          <Header level={3}>{t("Types.Complex")}</Header>
          <GameCardPager gameCards={complexGameCards}/>
        </div>
        <div>
          <Header level={3}>{t("Types.Social")}</Header>
          <GameCardPager gameCards={socialGameCards}/>
        </div>
      </div>
    </div>
  )
}
