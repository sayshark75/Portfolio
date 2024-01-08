import axios from "axios";
import { mailDataType } from "../TYPES";

const sendMail = async (data: mailDataType) => {
  const res = await axios.post(`${import.meta.env.VITE_EMAIL_SERVICE}/mail`, data);
  return res.data;
};

export { sendMail };
