interface IEnvironment {
  production: boolean,
  myEnv: string,
}

export const environment: IEnvironment = {
  production: true,
  myEnv: 'PROD'
};
