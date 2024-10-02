import moment from "moment";
export const dateDifference = (firstDate: any, secondDate: any) => {
  const startDate = moment(firstDate);
  const endDate = moment(secondDate);
  let difference;
  const differenceInHours = endDate.diff(startDate, "hours");

  if (differenceInHours < 24) {
    difference = differenceInHours + " hours ago";
  }
  if (differenceInHours >= 24) {
    const differenceInDays = endDate.diff(startDate, "days");
    difference = differenceInDays + " days ago";
  }

  return difference;
};
