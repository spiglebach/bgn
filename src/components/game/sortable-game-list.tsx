'use client'

import {Game} from "@/model/model";
import {ReactNode, useState} from "react";
import {Radio, RadioGroup} from "@nextui-org/react";

export interface GameSortOption {
  value: 'name' | 'complexity'
  label: string
}

export interface OrderOption {
  value: 'asc' | 'desc'
  label: string
}

export interface GameWithCard {
  game: Game
  card: ReactNode
}

interface SortableGameListProps {
  sortOptions: GameSortOption[]
  gamesWithCard: GameWithCard[]
  orderOptions: OrderOption[]
  labels: {
    sortBy: string
    sortDirection: string
  }
}

export const SortableGameList = ({sortOptions, gamesWithCard, orderOptions, labels: {sortBy, sortDirection}}: SortableGameListProps) => {
  const [sort, setSort] = useState<'name'|'complexity'>('name')
  const [order, setOrder] = useState<'asc'|'desc'>('asc')

  let sortFunction = compareByName
  if ('complexity' === sort) {
    sortFunction = compareByComplexity
  }

  let orderMultiplier = 1
  if ('desc' === order) {
    orderMultiplier = -1
  }

  return (
    <div>
      <div className="flex gap-10 justify-center mb-10 border-1 border-black rounded-xl w-[30em] mx-auto bg-gray-100" >
        <RadioGroup
          className="p-3"
          label={sortBy}
          value={sort}
          // @ts-ignore
          onChange={element => setSort(element.target.value)}
        >
          {sortOptions.map(option => <Radio key={option.value} value={option.value}>{option.label}</Radio>)}
        </RadioGroup>
        <RadioGroup
          className="p-3"
          label={sortDirection}
          value={order}
          // @ts-ignore
          onChange={element => setOrder(element.target.value)}
        >
          {orderOptions.map(option => <Radio key={option.value} value={option.value}>{option.label}</Radio>)}
        </RadioGroup>
      </div>
      <div className="mx-auto flex flex-wrap justify-center gap-4 max-w-[80%]">
        {gamesWithCard.sort((a, b) => (orderMultiplier * (sortFunction(a, b)))).map(gameWithCard => gameWithCard.card)}
      </div>
    </div>
  )
}

function compareByComplexity(a: GameWithCard, b: GameWithCard) {
  if (a.game.complexity < b.game.complexity) return -1
  if (a.game.complexity > b.game.complexity) return 1
  return 0
}

function compareByName(a: GameWithCard, b: GameWithCard) {
  return a.game.name.localeCompare(b.game.name)
}
