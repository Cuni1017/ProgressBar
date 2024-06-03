const sendXHR = (url, success, failed) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    console.log("xhr.readyState: " + xhr.readyState);
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        let result = xhr.response;
        success(result);
      } else {
        failed(xhr.status);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};
