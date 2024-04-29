import {Header} from "@/components/layout/header";
import Countdown from "@/components/next-occasion/countdown";
import {gameOccasions} from "@/data";
import {DateDisplay} from "@/components/next-occasion/date-display";
import {useTranslations} from "next-intl";
import {GameSuggestions} from "@/components/next-occasion/game-suggestions";
import {Button} from "@nextui-org/react";

export const NextOccasion = () => {
  const t = useTranslations("NextOccasion")

  const nextGameOccasion = gameOccasions[0]
  const nextGameOccasionStartTime = nextGameOccasion.startTime
  const nextGameOccasionAcceptedParticipants = nextGameOccasion.participants.accepted

  const numberPanelLabels = {
    days: t("CountdownTimer.NumberPanel.days"),
    hours: t("CountdownTimer.NumberPanel.hours"),
    minutes: t("CountdownTimer.NumberPanel.minutes")
  }

  if (!nextGameOccasion) {
    return (
      <NoNextOccasion/>
    )
  }

  return (
    <div className="border-1 rounded-xl border-gray-400 px-10 pt-8 pb-14">
      <div>
        <Header level={1}>{t("CountdownTimer.header")}</Header>
        <Countdown targetTime={nextGameOccasionStartTime} numberPanelLabels={numberPanelLabels}/>
        <DateDisplay date={nextGameOccasionStartTime} label={t("date")}/>
        <Header level={2}>
          <span>{t("participants")} </span>
          <span>{nextGameOccasionAcceptedParticipants}</span>
        </Header>
      </div>
      <div className="mt-10">
        <GameSuggestions/>
      </div>
    </div>
  )
}

const NoNextOccasion = () => {
  const t = useTranslations("NextOccasion.Empty")
  return (
    <div className="border-1 rounded-xl border-gray-400 px-10 pt-8 pb-14">
      <Header level={1} className="mb-7">{t("header")}</Header>
      <div className="flex justify-center"><Button color="success">
        {t("newButton")}
      </Button></div>
    </div>
  )
}
