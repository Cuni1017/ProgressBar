const logInUrl = (username, password) => {
  return `http://127.0.0.1:5501/json/${username}.json`;
};

const getUserSuccessUrl = () => {
  return `http://127.0.0.1:5501/json/user1.json`;
};

const getUserFailedUrl = () => {
  return `http://127.0.0.1:5501/json/userFailed.json`;
};

class UserService {
  static defaultUser = {
    videos: {
      likes: [],
    },
  };
  constructor() {
    // this.currentUser = {
    //   videos: {
    //     likes: [],
    //   },
    // };
    // this.currentUser = null;
    this.currentUser = UserService.defaultUser; //指 static defaultUser 方式一
    // this.currentUser = this.constructor.defaultUser; //方式二
  }
  isLoggedIn = () => {
    return this.currentUser.id > 0;
  };

  getCurrentUser = () => {
    return this.currentUser;
  };

  register = (setStateFunc) => {
    this.setStateFunc = setStateFunc;
  };

  //   redirectIfUserLogin = (path) => {
  //     const user = this.getCurrentUser();
  //     if (user.id) {
  //       window.location.pathname = path;
  //     }
  //   };

  getUserFromServer = async () => {
    const url = getUserSuccessUrl();
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    this.currentUser = await response.json();
    if (this.setStateFunc) this.setStateFunc(this.currentUser);

    return new Promise((resolve, reject) => {
      resolve(this.currentUser);
    });
  };

  logIn = async (username, password) => {
    const url = logInUrl(username, password);
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    this.currentUser = await response.json();

    if (this.setStateFunc) this.setStateFunc(this.currentUser); //傳入App讓他註冊

    return new Promise((resolve, reject) => {
      resolve(this.currentUser);
    });
  };
}

export default UserService;
