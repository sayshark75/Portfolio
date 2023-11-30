import { DummyDateProps } from "../TYPES";

const dummyDate = (): DummyDateProps => {
  const today = new Date();

  // Add 3 days to the current date
  // THIS IS DUMMY BECAUSE IT ADDS 3 MORE DAYS
  today.setDate(today.getDate() + 3);

  // Format the date as "yyyy-mm-dd"
  const date = today.toISOString().split("T")[0];
  const time = today.toTimeString().split(" ")[0];
  return { date, time };
};

export default dummyDate;
