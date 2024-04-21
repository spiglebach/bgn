
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Games</h1>
      <div className="flex gap-4">
        <div className="w-[10em] h-[10em] bg-amber-300">
          <h2>Game 1</h2>
          <p>2-4</p>
          <p>competitive</p>
          <p>sci-fi, building, dwarves</p>
          <p>show more!</p>
        </div>
        <div className="w-[10em] h-[10em] bg-amber-300">
          <h2>Game 2</h2>
          <p>1-8</p>
          <p>cooperative</p>
          <p>fantasy, island, spirits, natives, conquistadors</p>
          <p>show more!</p>
        </div>
        <div className="w-[10em] h-[10em] bg-amber-300">
          <h2>Game 3</h2>
          <p>2-5</p>
          <p>confrontative</p>
          <p>fighting</p>
          <p>show more!</p>
        </div>
      </div>
      <div>
        Card mockups
      </div>
    </main>
  )
}
