import moment from "moment";


export const formatDate = (date: string | Date, format: string) => {
  const newDate = new Date(date);
  const res = moment(newDate).format(format);
  return res
}