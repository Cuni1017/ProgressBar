const sendXHRPromiseVer = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      console.log("xhr.readyState: " + xhr.readyState);
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            result: xhr.response,
          });
        } else {
          reject({
            statusCode: xhr.status,
          });
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
};
