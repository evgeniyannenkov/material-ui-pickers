import { MaterialUiPickersDate } from './date'

export interface Utils {
  date(value: any): MaterialUiPickersDate;
  addDays(value: MaterialUiPickersDate, count: number): MaterialUiPickersDate;
  isValid(value: MaterialUiPickersDate): boolean;
  isEqual(value: MaterialUiPickersDate, comparing: MaterialUiPickersDate): boolean;
  isNull(value: MaterialUiPickersDate): boolean;
  isAfter(value: MaterialUiPickersDate, comparing: MaterialUiPickersDate): boolean;
  isAfterDay(value: MaterialUiPickersDate, comparing: MaterialUiPickersDate): boolean;
  isBeforeDay(value: MaterialUiPickersDate, comparing: MaterialUiPickersDate): boolean;
  isBeforeYear(value: MaterialUiPickersDate, comparing: MaterialUiPickersDate): boolean;
  isAfterYear(value: MaterialUiPickersDate, comparing: MaterialUiPickersDate): boolean;
  startOfDay(value: MaterialUiPickersDate): MaterialUiPickersDate;
  endOfDay(value: MaterialUiPickersDate): MaterialUiPickersDate;
  format(value: MaterialUiPickersDate, formatString: string): string;
  formatNumber(number: number): string;
  getHours(value: MaterialUiPickersDate): number;
  setHours(value: MaterialUiPickersDate, count: number): MaterialUiPickersDate;
  getMinutes(value: MaterialUiPickersDate): number;
  setMinutes(value: MaterialUiPickersDate, count: number): MaterialUiPickersDate
  getMonth(value: MaterialUiPickersDate): number;
  isSameDay(value: MaterialUiPickersDate, comparing: MaterialUiPickersDate): boolean
  getStartOfMonth(value: MaterialUiPickersDate): MaterialUiPickersDate;
  getNextMonth(value: MaterialUiPickersDate): MaterialUiPickersDate;
  getPreviousMonth(value: MaterialUiPickersDate): MaterialUiPickersDate;
  getYear(value: MaterialUiPickersDate): number;
  setYear(value: MaterialUiPickersDate): MaterialUiPickersDate;
  getWeekDays(): string[];
  getWeekArray(): MaterialUiPickersDate[];
  getYearRange(): MaterialUiPickersDate[];

  // displaying methods
  getMeridiemText(ampm: boolean): string;
  getCalendarHeaderText(date: MaterialUiPickersDate): string;
  getDatePickerHeaderText(date: MaterialUiPickersDate): string;
  getDateTimePickerHeaderText(date: MaterialUiPickersDate): string;
  getDayText(date: MaterialUiPickersDate): string;
  getHourText(date: MaterialUiPickersDate, ampm: boolean): string;
  getMinuteText(date: MaterialUiPickersDate): string;
  getYearText(date: MaterialUiPickersDate): string;
}