import {Header} from "@/components/layout/header";
import {NewOccasionForm} from "@/components/occasions/new-occasion-form";
import {useTranslations} from "next-intl";

export const NewOccasion = () => {
  const t = useTranslations("NewOccasion")

  const newOccasionTranslations = {
    datePicker: {
      label: t("Form.DatePicker.label"),
      quickButtons: {
        todayLabel: t("Form.DatePicker.QuickButtons.today"),
        nextWeekLabel: t("Form.DatePicker.QuickButtons.nextWeek"),
        nextMonthLabel: t("Form.DatePicker.QuickButtons.nextMonth")
      }
    },
    timePicker: {
      hourLabel: t("Form.TimePicker.hour"),
      minuteLabel: t("Form.TimePicker.minute")
    },
    submitLabel: t("Form.submit")
  }

  return (
    <div className="border-1 rounded-xl border-gray-400 px-10 py-8">
      <Header level={1} className="mb-7">{t("title")}</Header>
      <NewOccasionForm translations={newOccasionTranslations}/>
    </div>
  )
}
