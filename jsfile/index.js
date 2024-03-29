// body 드래그 및 선택 방지

$(function() {

  const bodyElement = document.querySelector('body');

    bodyElement.ondragstart = function() {
    return false;
  };

    bodyElement.onselectstart = function() {
    return false;
  };

});


// Mouse Cursor Effect
$(function () {
  // 출력용
  $(document).mousemove(function (e) {
    $(".screenX").text(e.screenX);
    $(".screenY").text(e.screenY);
  });

  // 마우스 움직이기
  $(document).mousemove(function (e) {
    let cursorWidth = $(".circle").width() / 2;
    let cursorFWidth = $(".circle").width() / 2;

    let left = e.pageX - cursorWidth;
    let top = e.pageY - cursorWidth;

    // 뷰포트 경계 체크
    let maxLeft = $(document).width() - cursorWidth + $(window).scrollLeft();
    let maxTop = $(document).height() - cursorWidth + $(window).scrollTop();

    if (left < 0) {
      left = 0;
    } else if (left > maxLeft) {
      left = maxLeft;
    }

    if (top < 0) {
      top = 0;
    } else if (top > maxTop) {
      top = maxTop;
    }

    gsap.to(".circle", { duration: 0.3, left: left, top: top });
    gsap.to(".circle_shadow", { duration: 1, left: left + cursorFWidth, top: top + cursorFWidth });
  });

});


// About(나에 대해) 부분
$(document).ready(function () {

  $('.arrow, header .li_ul li, .a_box a').hover(function () {
    $('.click').stop().fadeIn(500);
  }, function () {
    $('.click').stop().fadeOut(500);
  });


  $('.social i').hover(function () {
    $('.copy1').stop().fadeIn(500);
  }, function () {
    $('.copy1').stop().fadeOut(500);
  });

});


// About의 skill 그래프에 맞게 숫자 증가 + arrow 클릭 시 slideToggle

// Number1() ~ Number6()
$(function () {

  $('.arrow').click(function () {
    $('.about').stop().fadeToggle(500);
    $('.about1').stop().fadeToggle(500);
    Number1();
    Number2();
    Number3();
    Number4();
    Number5();
    Number6();
  });

  function Number1() {

    const htmlNumber = document.getElementsByClassName("number1");

    let num = 0;

    const intervalId = setInterval(() => {
      if (num >= 95) {
        clearInterval(intervalId);
      } else {
        num++;

        for (let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }
      }
    }, 1000 / 60); //숫자 올라가는 속도 조절;

  }

  function Number2() {
    const htmlNumber = document.getElementsByClassName("number2");

    let num = 0;

    const intervalId = setInterval(() => {
      if (num >= 85) {
        clearInterval(intervalId);
      } else {
        num++;

        for (let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }
      }
    }, 1000 / 55); //숫자 올라가는 속도 조절;
  }

  function Number3() {
    const htmlNumber = document.getElementsByClassName("number4");

    let num = 0;

    const intervalId = setInterval(() => {
      if (num >= 70) {
        clearInterval(intervalId);
      } else {
        num++;

        for (let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }
      }
    }, 1000 / 50); //숫자 올라가는 속도 조절;
  }

  // react 수치
  function Number4() {
    const htmlNumber = document.getElementsByClassName("number5");

    let num = 0;

    const intervalId = setInterval(() => {
      if (num >= 30) {
        clearInterval(intervalId);
      } else {
        num++;

        for (let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }
      }
    }, 1000 / 40); //숫자 올라가는 속도 조절;
  }

  // vue 수치
  function Number5() {
    const htmlNumber = document.getElementsByClassName("number6");

    let num = 0;

    const intervalId = setInterval(() => {
      if (num >= 20) {
        clearInterval(intervalId);
      } else {
        num++;

        for (let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }
      }
    }, 1000 / 35); //숫자 올라가는 속도 조절;
  }

  function Number6() {
    const htmlNumber = document.getElementsByClassName("number7");

    let num = 0;

    const intervalId = setInterval(() => {
      if (num >= 40) {
        clearInterval(intervalId);
      } else {
        num++;

        for (let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }
      }
    }, 1000 / 45); //숫자 올라가는 속도 조절;
  }

});




// Porfol(포트폴리오) 부분
$(document).ready(function () {

  // 변수 선언
  var myDiv = $(".project1")[0];

  // 스크롤 이벤트 리스너 등록
  window.addEventListener("scroll", function () {

    // 현재 뷰포트 안에 있는지 여부를 확인
    var viewportOffset = myDiv.getBoundingClientRect();

    if (viewportOffset.top <= 0) {
      // 뷰포트 안에 있을 때 스크롤 내리면서 border-radius 값이 커지도록 처리
      var newRadius = 50 - (Math.min(viewportOffset.top * -1, $(window).height()) / ($(window).height() / 50));
      myDiv.style.borderTopLeftRadius = newRadius + "%";
      myDiv.style.borderTopRightRadius = newRadius + "%";

    } else {
      // 뷰포트 밖에 있을 때 스크롤 올리면서 border-radius 값이 작아지도록 처리
      var newRadius = 50 + (viewportOffset.top / ($(window).height() / 50));
      newRadius = Math.min(newRadius, 50);
      myDiv.style.borderTopLeftRadius = newRadius + "%";
      myDiv.style.borderTopRightRadius = newRadius + "%";
    }

  });

});



$(document).ready(function () {

  // 변수 선언
  var myDiv = $(".project2")[0];

  // 스크롤 이벤트 리스너 등록
  window.addEventListener("scroll", function () {

    // 현재 뷰포트 안에 있는지 여부를 확인
    var viewportOffset = myDiv.getBoundingClientRect();

    if (viewportOffset.top <= 0) {
      // 뷰포트 안에 있을 때 스크롤 내리면서 border-radius 값이 커지도록 처리
      var newRadius = 50 - (Math.min(viewportOffset.top * -1, $(window).height()) / ($(window).height() / 50));
      myDiv.style.borderTopLeftRadius = newRadius + "%";
      myDiv.style.borderTopRightRadius = newRadius + "%";

    } else {
      // 뷰포트 밖에 있을 때 스크롤 올리면서 border-radius 값이 작아지도록 처리
      var newRadius = 50 + (viewportOffset.top / ($(window).height() / 50));
      newRadius = Math.min(newRadius, 50);
      myDiv.style.borderTopLeftRadius = newRadius + "%";
      myDiv.style.borderTopRightRadius = newRadius + "%";
    }

  });

});


$(document).ready(function () {

  // 변수 선언
  var myDiv = $(".project3")[0];

  // 스크롤 이벤트 리스너 등록
  window.addEventListener("scroll", function () {

    // 현재 뷰포트 안에 있는지 여부를 확인
    var viewportOffset = myDiv.getBoundingClientRect();

    if (viewportOffset.top <= 0) {
      // 뷰포트 안에 있을 때 스크롤 내리면서 border-radius 값이 커지도록 처리
      var newRadius = 50 - (Math.min(viewportOffset.top * -1, $(window).height()) / ($(window).height() / 50));
      myDiv.style.borderTopLeftRadius = newRadius + "%";
      myDiv.style.borderTopRightRadius = newRadius + "%";

    } else {
      // 뷰포트 밖에 있을 때 스크롤 올리면서 border-radius 값이 작아지도록 처리
      var newRadius = 50 + (viewportOffset.top / ($(window).height() / 50));
      newRadius = Math.min(newRadius, 50);
      myDiv.style.borderTopLeftRadius = newRadius + "%";
      myDiv.style.borderTopRightRadius = newRadius + "%";
    }

  });

});


$(document).ready(function () {

  // 변수 선언
  var myDiv = $(".project4")[0];

  // 스크롤 이벤트 리스너 등록
  window.addEventListener("scroll", function () {

    // 현재 뷰포트 안에 있는지 여부를 확인
    var viewportOffset = myDiv.getBoundingClientRect();

    if (viewportOffset.top <= 0) {
      // 뷰포트 안에 있을 때 스크롤 내리면서 border-radius 값이 커지도록 처리
      var newRadius = 50 - (Math.min(viewportOffset.top * -1, $(window).height()) / ($(window).height() / 50));
      myDiv.style.borderTopLeftRadius = newRadius + "%";
      myDiv.style.borderTopRightRadius = newRadius + "%";

    } else {
      // 뷰포트 밖에 있을 때 스크롤 올리면서 border-radius 값이 작아지도록 처리
      var newRadius = 50 + (viewportOffset.top / ($(window).height() / 50));
      newRadius = Math.min(newRadius, 50);
      myDiv.style.borderTopLeftRadius = newRadius + "%";
      myDiv.style.borderTopRightRadius = newRadius + "%";
    }

  });

});


$(document).ready(function () {

  // 변수 선언
  var myDiv = $(".project5")[0];

  // 스크롤 이벤트 리스너 등록
  window.addEventListener("scroll", function () {

    // 현재 뷰포트 안에 있는지 여부를 확인
    var viewportOffset = myDiv.getBoundingClientRect();

    if (viewportOffset.top <= 0) {
      // 뷰포트 안에 있을 때 스크롤 내리면서 border-radius 값이 커지도록 처리
      var newRadius = (50 - (Math.min(viewportOffset.top * -1, $(window).height()) / ($(window).height() / 50)));
      myDiv.style.borderTopLeftRadius = newRadius + "%";
      myDiv.style.borderTopRightRadius = newRadius + "%";

    } else {
      // 뷰포트 밖에 있을 때 스크롤 올리면서 border-radius 값이 작아지도록 처리
      var newRadius = (50 + (viewportOffset.top / ($(window).height() / 50)));
      newRadius = Math.min(newRadius, 50);
      myDiv.style.borderTopLeftRadius = newRadius + "%";
      myDiv.style.borderTopRightRadius = newRadius + "%";
    }


  });

});


// card1, 2 hover 시 각도 변환

// 카드에 마우스 오버 이벤트 핸들러
function handleMouseOver() {
  this.classList.add('hoverd');
  this.classList.remove('hoverd1');
}

// 카드에서 마우스 아웃 이벤트 핸들러
function handleMouseOut() {
  this.classList.remove('hoverd');
  this.classList.add('hoverd1');
}

document.addEventListener("DOMContentLoaded", function() {
  const includes = document.querySelectorAll('.include1, .include2, .include3, .include4, .include5');

  includes.forEach(function(allinclude) {
    const cards = allinclude.querySelectorAll('.card1, .card2');

    cards.forEach(function(card) {
      card.addEventListener('mouseover', handleMouseOver);
      card.addEventListener('mouseout', handleMouseOut);
    });
  });
});






// Portfolio porfol_info 스크롤 이벤트(ScrollReveal)
$(document).ready(function () {

  // ScrollReveal 초기화
  const sr = ScrollReveal();

  // 요소를 표시할 때 애니메이션 효과 설정
  sr.reveal('.porfol_info, #Contact', {
    duration: 1000,
    delay: 50,
    reset: true,
    interval: 500
  });

});



// Contact 클릭 시 텍스트 복사
$(function () {
  $('.social i').click(function () {
    $('.copy1').slideToggle(500);
    $('.copy').slideToggle(500);

    const textToCopy = $(this).text();
    navigator.clipboard.writeText(textToCopy);

    setTimeout(function () {
      $('.copy').slideToggle(500);
    }, 800);
  });
});




