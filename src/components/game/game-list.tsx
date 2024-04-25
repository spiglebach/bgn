import {games} from "@/data";
import {GameCard} from "@/components/game/game-card";
import {useTranslations} from "next-intl";

export const GameList = () => {
  const t = useTranslations("GameList")

  return (
    <div>
      <h2 className="text-2xl text-center mb-4">{t("header")}</h2>
      <div className="mx-auto flex flex-wrap justify-center gap-4 max-w-[80%]">
        {games.map(game => <GameCard game={game}/>)}
      </div>
    </div>
  )
}
