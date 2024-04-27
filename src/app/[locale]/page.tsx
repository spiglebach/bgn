import {useTranslations} from "next-intl";
import {gameOccasions, games} from "@/data";
import Countdown from "@/components/countdown/countdown";
import {GameList} from "@/components/game/game-list";
import {GameCard} from "@/components/game/game-card";
import {Header} from "@/components/layout/header";
import {GameCardPager} from "@/components/game/game-card-pager";

export default function Home() {
  const t = useTranslations("Index")

  const nextGameOccasion = gameOccasions[0]
  const nextGameOccasionStartTime = nextGameOccasion.startTime
  const nextGameOccasionAcceptedParticipants = nextGameOccasion.participants.accepted

  const laterGameOccasions = gameOccasions.slice(1, gameOccasions.length)

  const numberPanelLabels = {
    days: t("CountdownTimer.NumberPanel.days"),
    hours: t("CountdownTimer.NumberPanel.hours"),
    minutes: t("CountdownTimer.NumberPanel.minutes")
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <Header level={1}>{t("CountdownTimer.header")}</Header>
        <Countdown targetTime={nextGameOccasionStartTime} numberPanelLabels={numberPanelLabels} />
        <DateDisplay date={nextGameOccasionStartTime} label={t("CountdownTimer.date")} />
        <Header level={2}>
          <span>{t("CountdownTimer.participants")} </span>
          <span>{nextGameOccasionAcceptedParticipants}</span>
        </Header>
      </div>
      <div className="mt-10">
        <Header level={2} className="mb-4">{t("NextOccasion.SuggestedGames.header")}</Header>
        <div className="flex gap-5">
          <div>
            <Header level={3}>{t("NextOccasion.SuggestedGames.Types.Simple")}</Header>
            <GameCardPager gameCards={[<GameCard game={games[21]} />]} />
          </div>
          <div>
            <Header level={3}>{t("NextOccasion.SuggestedGames.Types.Complex")}</Header>
            <GameCardPager gameCards={[<GameCard game={games[2]} />, <GameCard game={games[4]} />]} />
          </div>
          <div>
            <Header level={3}>{t("NextOccasion.SuggestedGames.Types.Social")}</Header>
            <GameCardPager gameCards={[<GameCard game={games[5]}/>, <GameCard game={games[15]} />]} />
          </div>
        </div>
      </div>
      <div className="my-10">
      </div>
      <div>
        <GameList />
      </div>
    </main>
  )
}

interface DateDisplayProps {
  date: Date,
  label: string
}

const DateDisplay = ({date, label}: DateDisplayProps) => {
  const dateMonth = date.getMonth() + 1
  const dateDay = date.getDate()
  let displayMonth: string
  if (dateMonth < 10) {
    displayMonth = `0${dateMonth}`
  } else {
    displayMonth = dateMonth.toString()
  }
  let displayDay
  if (dateDay < 10) {
    displayDay = `0${dateDay}`
  } else {
    displayDay = dateDay.toString()
  }
  const dateStr = `${date.getFullYear()}. ${displayMonth}. ${displayDay}.`
  return (
    <Header level={2}><span>{label}</span> <span>{dateStr}</span></Header>
  )
}

