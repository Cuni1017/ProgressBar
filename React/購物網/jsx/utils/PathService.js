class PathService {
  constructor() {
    this.path = window.location.pathname;
  }

  resgister = (setStateFunc) => {
    this.setStateFunc = setStateFunc;
  };

  setPath = (path) => {
    // #History.pushState 可以讓我們在不移動頁面的情況下，添加一筆歷史紀錄，它一共有三個參數
    // state: 這個參數可以接受一個物件，該物件裡可以存放任何資料，至於有什麼實際用途，後面會再介紹。
    // title: 這是一個被暫時保留的參數，實際上沒有任何用途，且會被瀏覽器忽略。
    // URL: 這個參數是用來設定我們添加的這筆歷史紀錄的網址，可傳可不傳。

    window.history.pushState("", "", path);
    this.path = window.location.pathname;
    if (this.setStateFunc) {
      this.setStateFunc(this.path);
    }
  };
}

export default PathService;
