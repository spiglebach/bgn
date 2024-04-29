import {GameList} from "@/components/game/game-list";
import {NextOccasion} from "@/components/next-occasion/next-occasion";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="my-10">
        <NextOccasion/>
      </div>
      <div>
        <GameList/>
      </div>
    </main>
  )
}



