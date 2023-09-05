function isMobileDevice() {
    let mobileDevices = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    for (var i = 0; i < mobileDevices.length; i++) {
        if (navigator.userAgent.match(mobileDevices[i])) {
          return true;
        }
    }
    return false
  }
  
  if (isMobileDevice()) {
      Swal.fire({"title":"<p style=font-size:25px;>你正在使用手機(或行動裝置)瀏覽</p>",html: '<p style=font-size:25px;>建議換成電腦,不然排版會有問題</p>',confirmButtonText:'好',})
  } else {
      console.log("not mobile device");
  }
  