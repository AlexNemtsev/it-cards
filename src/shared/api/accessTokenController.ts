export class AccessTokenController {
  private LOCAL_STORAGE_KEY = 'accessToken';

  getToken = () => {
    const token = localStorage.getItem(this.LOCAL_STORAGE_KEY);

    return token;
  };

  removeToken = () => {
    localStorage.removeItem(this.LOCAL_STORAGE_KEY);
  };

  setToken = (token: string) => {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, token);
  };

  constructor() {}
}
