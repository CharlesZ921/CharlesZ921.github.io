(function () {

  $('#playbuttom').click(function () {
    $('#zhezhao').addClass('active')
    document.getElementById('videoResumeC').play();
  })

  $('#musicwrap').click(function () {
    console.log(14563)
    if ($(this).hasClass('paused')) {
      $(this).removeClass('paused')
      $('#play1')[0].play()
    } else {
      $(this).addClass('paused')
      $('#play1')[0].pause()
    }
  })


  // //一段正则，匹配所有_min.的图片src属性
	// var test = /_min\./
	// //遍历所有的图片节点
	// $("img").each(function(index,obj){	
	// 	if(test.test($(this).attr("src"))){
	// 		var reSrc = $(this).attr("src").replace(test,".");
	// 		$(this).attr("src",reSrc)
	// 	}		
	// })

})()
