'use client'

import {Button, ButtonGroup, DatePicker, DateValue, Select, Selection, SelectItem} from "@nextui-org/react";
import {getLocalTimeZone, startOfMonth, startOfWeek, today} from "@internationalized/date";
import {useState} from "react";
import {useLocale} from "next-intl";
import {range} from "@nextui-org/shared-utils";
import {I18nProvider} from "@react-aria/i18n";

interface NewOccasionFormParams {
  translations: {
    datePicker: {
      label: string
      quickButtons: {
        todayLabel: string
        nextWeekLabel: string
        nextMonthLabel: string
      }
    },
    timePicker: {
      hourLabel: string
      minuteLabel: string
    },
    submitLabel: string
  }
}

export const NewOccasionForm = ({translations: {datePicker: {label, quickButtons: {todayLabel, nextWeekLabel, nextMonthLabel}}, timePicker: {hourLabel, minuteLabel}, submitLabel}}: NewOccasionFormParams) => {
  const now = today(getLocalTimeZone());
  const [dateValue, setDateValue] = useState<DateValue>(now);
  const [hourValue, setHourValue] = useState<Selection>(new Set([16]));
  const [minuteValue, setMinuteValue] = useState<Selection>(new Set([0]));
  const locale = useLocale()

  const nextWeek = startOfWeek(now.add({weeks: 1}), locale);
  const nextMonth = startOfMonth(now.add({months: 1}));

  const hourOptions = range(0, 23).map(number => ({value: number, label: String(number).padStart(2, '0')}))
  const minuteOptions = range(0, 3).map(number => number * 15).map(number => ({
    value: number,
    label: String(number).padStart(2, '0')
  }))

  const submit = () => {
    console.log("---- submitted ----")
    console.log(dateValue.year, dateValue.month, dateValue.day)
    console.log(hourValue, minuteValue)
    console.log("-------------------")
  }

  return (
    <form action={submit}>
      <div className="flex flex-col gap-2 justify-center items-center">
        <I18nProvider>
          <DatePicker
            label={label}
            value={dateValue}
            onChange={setDateValue}
            minValue={now}
            calendarProps={{
              focusedValue: dateValue,
              onFocusChange: setDateValue
            }}
            CalendarTopContent={
              <ButtonGroup
                fullWidth
                className="px-3 pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60"
                radius="full"
                size="sm"
                variant="bordered"
              >
                <Button onPress={() => setDateValue(now)}>{todayLabel}</Button>
                <Button onPress={() => setDateValue(nextWeek)}>{nextWeekLabel}</Button>
                <Button onPress={() => setDateValue(nextMonth)}>{nextMonthLabel}</Button>
              </ButtonGroup>}
          />
        </I18nProvider>
        <div className="flex w-full gap-4">
          <Select
            autoFocus={true}
            label={hourLabel}
            items={hourOptions}
            selectedKeys={hourValue}
            onSelectionChange={setHourValue}
          >
            {option => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>}
          </Select>
          <Select
            autoFocus={true}
            label={minuteLabel}
            items={minuteOptions}
            selectedKeys={minuteValue}
            onSelectionChange={setMinuteValue}
          >
            {option => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>}
          </Select>
        </div>
        <Button className="self-end" color="success" type="submit">{submitLabel}</Button>
      </div>
    </form>
  )
}
