import {Header} from "@/components/layout/header";

interface DateDisplayProps {
  date: Date,
  label: string
}

export const DateDisplay = ({date, label}: DateDisplayProps) => {
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
