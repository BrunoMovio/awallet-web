interface Config {
  stage: "dev" | "prod";
  apiUrl: string;
}

const dev: Config = {
  stage: "dev",
  apiUrl: "http://localhost:3001",
};

const prod: Config = {
  stage: "prod",
  apiUrl: "http://localhost:3001",
};

const stage: string = import.meta.env.MODE as string;

const getConfig = (stage: string) => {
  if (stage === "development") {
    return dev;
  } else if (stage === "production") {
    return prod;
  }
  return dev;
};

export const config: Config = getConfig(stage);
