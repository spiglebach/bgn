import {Game, GameType} from "@/model/model";
import {useTranslations} from "next-intl";
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Tooltip} from "@nextui-org/react";
import {ReactNode} from "react";

interface GameCardProps {
  game: Game
}

export const GameCard = ({game}: GameCardProps) => {
  const gameMinPlayers = game.minimumPlayerCount
  const gameMaxPlayers = game.maximumPlayerCount
  let playerCount: string
  if (gameMinPlayers === gameMaxPlayers) {
    playerCount = `${gameMinPlayers}`
  } else {
    playerCount = `${gameMinPlayers}-${gameMaxPlayers}`
  }
  const playerCountChars = playerCount.length
  let playerCountWidth: number
  if (playerCountChars === 1) {
    playerCountWidth = 3.5
  } else if (playerCountChars <= 3) {
    playerCountWidth = 4.5
  } else {
    playerCountWidth = 6
  }
  return (
    <div key={game.name}>
      <Card key={game.name} className="w-[12em] h-[14em] bg-amber-300 relative">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            alt={game.name}
            className="w-full object-cover h-[10em]"
            src={game.image}
          />
          <div className="z-20 flex flex-col gap-1 absolute top-[.5em] left-0">
            <Label icon={<Image src="/icons/people.svg" className="h-[1.5em]"/>} text={playerCount} width={`${playerCountWidth}em`} bgColor="white"/>
            {game.gameType.map(gameType => <GameTypeLabel key={gameType} gameType={gameType} />)}
          </div>
          <div className="z-20 h-[10em] absolute bottom-[0em] right-0">
            <GameComplexityMeter complexity={game.complexity} />
          </div>

        </CardBody>
        <CardFooter className="h-[4em] flex-col text-center m-auto">
          <div><strong>{game.name}</strong></div>
        </CardFooter>
      </Card>
    </div>
  )
}

interface LabelProps {
  icon: ReactNode,
  text: string
  width: string
  bgColor: string
}

const Label = ({icon, text, width, bgColor}: LabelProps) => {
  return (
    <div
      className="flex align-middle h-[2em] bg-opacity-70 font-bold rounded-r-full border-1 border-black"
      style={{width: width, backgroundColor: bgColor}}
    >
      <div className="mx-1 text-center content-center">
        {icon}
      </div>
      <div className="text-center content-center">{text}</div>
    </div>
  )
}

interface GameTypeLabelProps {
  gameType: GameType
}

const GameTypeLabel = ({gameType}: GameTypeLabelProps) => {
  const t = useTranslations("Common.GameType")
  const gameTypeName = GameType[gameType]
  const icon = `/icons/${gameTypeName.toLowerCase()}.svg`
  let bgColor = "white"
  if (GameType.Social === gameType) {
    bgColor = "#03bafc"
  } else if (GameType.Competitive === gameType) {
    bgColor = "#fcba03"
  } else if (GameType.Cooperative === gameType) {
    bgColor = "#81ff31"
  } else if (GameType.Confrontative === gameType) {
    bgColor = "#ff5353"
  }
  return (
    <Tooltip content={t(gameTypeName)} placement="right-end" closeDelay={0}>
      <Label icon={<Image src={icon} className="h-[1.5em]"/>} text={""} width="3em" bgColor={bgColor} />
    </Tooltip>
  )
}

interface GameComplexityMeterProps {
  complexity: number
}

const GameComplexityMeter = ({complexity}: GameComplexityMeterProps) => {
  const t = useTranslations("Game")
  const height = Math.floor((complexity / 5.0) * 100)
  const color = colorGradient((height / 100.0), {red: 30, green: 200, blue: 0}, {red: 255, green: 200, blue: 0}, {red: 255, green: 0, blue: 0})
  return (
    <Tooltip content={`${t("complexity")}: ${complexity} / 5`} placement="bottom" closeDelay={0}>
      <div className="h-[100%] flex items-end w-[1em] opacity-80 bg-yellow-100 rounded-full">
        <div style={{height: `${height}%`, background: color}} className="w-[80%] mx-auto mb-1 rounded-full"></div>
      </div>
    </Tooltip>
  )
}

interface Color {
  red: number
  green: number
  blue: number
}

function colorGradient(fadeFraction: number, rgbColor1: Color, rgbColor2: Color, rgbColor3: Color) {
  let color1 = rgbColor1;
  let color2 = rgbColor2;
  let fade = fadeFraction;

  // Do we have 3 colors for the gradient? Need to adjust the params.
  if (rgbColor3) {
    fade = fade * 2;

    // Find which interval to use and adjust the fade percentage
    if (fade >= 1) {
      fade -= 1;
      color1 = rgbColor2;
      color2 = rgbColor3;
    }
  }

  let diffRed = color2.red - color1.red;
  let diffGreen = color2.green - color1.green;
  let diffBlue = color2.blue - color1.blue;

  var gradient = {
    red: Math.floor(color1.red + (diffRed * fade)),
    green: Math.floor(color1.green + (diffGreen * fade)),
    blue: Math.floor(color1.blue + (diffBlue * fade)),
  };

  return 'rgb(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ')';
}
