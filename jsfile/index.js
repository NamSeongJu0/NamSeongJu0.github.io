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

// 마우스 오버 효과
// $(".contents em").hover(function () {
//   $(".circle").addClass("active");
//   $(".circle-follower").addClass("active");
// }, function () {
//   $(".circle").removeClass("active");
//   $(".circle-follower").removeClass("active");
// });
  
  
  
  // About(나에 대해) 부분
  $(document).ready(function() {
    $('.arrow').click(function() {
      // $('.about').css('display', 'none');
      $('.about1').fadeToggle(500);
    });

    // $('.skill').click(function() {
    //   $('.skill_info').css('display', 'block');
    // });
  });


  // About의 skill 그래프에 맞게 숫자 증가

  // number1
  $(function () {
    const htmlNumber = document.getElementsByClassName("number1");
  
    let num = 0;
  
    const intervalId = setInterval(() => {
      if (num >= 95) {
        clearInterval(intervalId);
      } else {
        num++;

        for(let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }   
      }
    }, 1000/60); //숫자 올라가는 속도 조절;
  
  });


  // number2, 3
  $(function () {
    const htmlNumber = document.getElementsByClassName("number2");
  
    let num = 0;
  
    const intervalId = setInterval(() => {
      if (num >= 85) {
        clearInterval(intervalId);
      } else {
        num++;

        for(let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }   
      }
    }, 1000/55); //숫자 올라가는 속도 조절;
  
  });


  // number4
  $(function () {
    const htmlNumber = document.getElementsByClassName("number4");
  
    let num = 0;
  
    const intervalId = setInterval(() => {
      if (num >= 70) {
        clearInterval(intervalId);
      } else {
        num++;

        for(let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }   
      }
    }, 1000/50); //숫자 올라가는 속도 조절;
  
  });


  // number5
  $(function () {
    const htmlNumber = document.getElementsByClassName("number5");
  
    let num = 0;
  
    const intervalId = setInterval(() => {
      if (num >= 50) {
        clearInterval(intervalId);
      } else {
        num++;

        for(let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }   
      }
    }, 1000/40); //숫자 올라가는 속도 조절;
  
  });


  // number6
  $(function () {
    const htmlNumber = document.getElementsByClassName("number6");
  
    let num = 0;
  
    const intervalId = setInterval(() => {
      if (num >= 40) {
        clearInterval(intervalId);
      } else {
        num++;

        for(let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }   
      }
    }, 1000/35); //숫자 올라가는 속도 조절;
  
  });


  // number7
  $(function () {
    const htmlNumber = document.getElementsByClassName("number7");
  
    let num = 0;
  
    const intervalId = setInterval(() => {
      if (num >= 55) {
        clearInterval(intervalId);
      } else {
        num++;

        for(let i = 0; i < htmlNumber.length; i++) {
          htmlNumber[i].innerText = `${num}%`;
        }   
      }
    }, 1000/45); //숫자 올라가는 속도 조절;
  
  });

  

// Porfol(포트폴리오) 부분 + Contact(연락)
$(document).ready(function() {

    // 변수 선언
    var myDiv = $(".project1")[0];
  
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", function() {
  
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
  
  
  
  $(document).ready(function() {
  
    // 변수 선언
    var myDiv = $(".project2")[0];
  
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", function() {
  
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
  
  
  $(document).ready(function() {
  
    // 변수 선언
    var myDiv = $(".project3")[0];
  
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", function() {
  
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
  
  
  $(document).ready(function() {
  
    // 변수 선언
    var myDiv = $(".project4")[0];
  
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", function() {
  
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
  
  
  $(document).ready(function() {
  
    // 변수 선언
    var myDiv = $(".project5")[0];
  
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", function() {
  
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










  




