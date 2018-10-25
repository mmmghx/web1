window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-127727509-1');

var Body = {
  setColor: function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor: function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

var Links = {
  setColor: function(color) {
    //       var alist = document.querySelectorAll('a');
    //       var i = 0;
    //       while(i < alist.length){
    //       console.log(alist[i]);
    //       alist[i].style.color = color;
    //       i++;
    //       }
    $('a').css('color', color); // 이 웹페이지의 모든 a 태그를 jquery로 제어하겠다
  }
}

function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}
