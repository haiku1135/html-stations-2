function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let flag = false;
  const element = document.getElementById('check');
  const txt = document.getElementById('text');
  if(element.checked === true){
    txt.style.backgroundColor = 'red';
  } else {
    txt.style.backgroundColor = 'transparent';
  }

}
