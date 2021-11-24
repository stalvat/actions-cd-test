interface IEnvironment {
  production: boolean,
  code: string,
}

export const environment: IEnvironment = {
  production: true,
  code: 'TEST'
};
