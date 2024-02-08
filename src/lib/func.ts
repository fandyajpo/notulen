import Cors, { CorsOptions } from "cors";
export const corsOption = () => {
  const options: CorsOptions = {
    origin: "*",
    methods: ["GET", "PATCH", "POST", "DELETE"],
  };

  return Cors(options);
};

export const listeningTo = () => {
  logger(`App listening to port ${process.env.PORT}`);
};

export const logger = (a: any) => {
  console.log(JSON.stringify(a, null, 2));
};

export const dateFormat = (date: Date): string => {
  if (typeof date === "undefined" || !(date instanceof Date)) return "";

  const d: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const req = new Intl.DateTimeFormat("en-US", d);
  const format = req.format(date);
  return format;
};
