'use client'

import {PaginationItemType, PaginationItemValue, usePagination} from "@nextui-org/react";
import {ChevronIcon} from "@nextui-org/shared-icons";
import {ReactNode} from "react";

interface GameCardPagerProps {
  gameCards: ReactNode[]
}

export const GameCardPager = ({gameCards}: GameCardPagerProps) => {
  const {activePage, range, setPage, onNext, onPrevious} = usePagination({
    total: gameCards.length,
    showControls: true,
    siblings: 10,
    boundaries: 10
  })
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        {gameCards[activePage - 1]}
      </div>
      {gameCards.length > 1 && <Pager activePage={activePage} range={range} setPage={setPage} onNext={onNext} onPrevious={onPrevious} />}
    </div>
  )
}

interface PagerProps {
  activePage: number
  range: PaginationItemValue[]
  setPage: (pageNumber: number) => void
  onNext: () => void
  onPrevious: () => void
}

const Pager = ({activePage, range, setPage, onNext, onPrevious}: PagerProps) => {
  return (
    <ul className="flex gap-2 items-center">
      {range.map((page) => {
        if (page === PaginationItemType.NEXT) {
          return (
            <li key={page} aria-label="next page" className="w-4 h-4">
              <button
                className="w-full h-full bg-default-200 rounded-full"
                onClick={(activePage === (range.length - 2)) ? () => setPage(1) : onNext}
              >
                <ChevronIcon className="rotate-180"/>
              </button>
            </li>
          );
        }

        if (page === PaginationItemType.PREV) {
          return (
            <li key={page} aria-label="previous page" className="w-4 h-4">
              <button
                className="w-full h-full bg-default-200 rounded-full"
                onClick={(activePage === 1) ? () => setPage(range.length - 2) : onPrevious}
              >
                <ChevronIcon/>
              </button>
            </li>
          );
        }

        if (page === PaginationItemType.DOTS) {
          return (
            <li key={page} className="w-4 h-4">
              ...
            </li>
          );
        }

        return (
          <li key={page} aria-label={`page ${page}`} className="w-4 h-4">
            <button
              style={activePage === page ? {backgroundColor: "rgb(252 211 77)"} : {}}
              className="w-full h-full bg-default-300 rounded-full shadow-sm shadow-black"
              onClick={() => setPage(page)}
            />
          </li>
        );
      })}
    </ul>
  )
}
