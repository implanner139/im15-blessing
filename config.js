// 部署後只需要改這裡
window.IM15 = {
  // Apps Script 部署後拿到的網址（https://script.google.com/macros/s/.../exec）
  // 留空時兩個頁面會自動進入「示範模式」，不會真的送出資料
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxpppq2CF5jkbe1CLZ5SHRcvJueD1eagMPKSS7S1C6Rj6fAt9b-OmgV8f_ueVi7LpzjTw/exec',

  // 手機填寫頁的網址，大螢幕 QR Code 會用這個。留空＝自動用同一個資料夾的 index.html
  FORM_URL: '',

  // 真實祝福少於這個數量時，投影會穿插補位祝福
  FILL_UNTIL: 50,

  // 大螢幕沒有新祝福多久（秒）之後，補一則補位祝福或重播舊祝福
  IDLE_SECONDS: 9,

  // 大螢幕多久抓一次新資料（秒）
  POLL_SECONDS: 6,
};
