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
        myDiv.style.borderRadius = newRadius + "%";
  
      } else {
        // 뷰포트 밖에 있을 때 스크롤 올리면서 border-radius 값이 작아지도록 처리
        var newRadius = 50 + (viewportOffset.top / ($(window).height() / 50));
        newRadius = Math.min(newRadius, 50);
        myDiv.style.borderRadius = newRadius + "%";
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
        myDiv.style.borderRadius = newRadius + "%";
  
      } else {
        // 뷰포트 밖에 있을 때 스크롤 올리면서 border-radius 값이 작아지도록 처리
        var newRadius = 50 + (viewportOffset.top / ($(window).height() / 50));
        newRadius = Math.min(newRadius, 50);
        myDiv.style.borderRadius = newRadius + "%";
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
        myDiv.style.borderRadius = newRadius + "%";
  
      } else {
        // 뷰포트 밖에 있을 때 스크롤 올리면서 border-radius 값이 작아지도록 처리
        var newRadius = 50 + (viewportOffset.top / ($(window).height() / 50));
        newRadius = Math.min(newRadius, 50);
        myDiv.style.borderRadius = newRadius + "%";
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
        myDiv.style.borderRadius = newRadius + "%";
  
      } else {
        // 뷰포트 밖에 있을 때 스크롤 올리면서 border-radius 값이 작아지도록 처리
        var newRadius = 50 + (viewportOffset.top / ($(window).height() / 50));
        newRadius = Math.min(newRadius, 50);
        myDiv.style.borderRadius = newRadius + "%";
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







  




