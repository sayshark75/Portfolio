function dateFormatter(inputDate) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const parts = inputDate.split("-");
  const year = parts[0];
  const month = parseInt(parts[1], 10);
  const day = parts[2];

  const formattedDate = `${parseInt(day, 10)} ${months[month - 1]} ${year}`;
  return formattedDate;
}

function orderDateFormatter(dateString) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const date = new Date(dateString);
  const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return formattedDate;
}

function localDateFormatter(dateString) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const date = new Date(dateString);
  const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return formattedDate;
}

export { dateFormatter, orderDateFormatter, localDateFormatter };
