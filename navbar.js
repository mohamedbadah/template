$(document).ready(function(){
		$('.carousel').carousel({
			interval:3000
		})
	})
	let v=document.getElementById('font');
	let h4=document.getElementById('h4');
	let visible=document.getElementsByClassName('glyphicon');
	let hideen=document.getElementById('b');
	let r=1;
     v.onclick=function(){
     	if(r==1){
       hideen.style.display='none';
       return r=0;
     	}
     else if(r==0){
     	 hideen.style.display='block';
     	 return r=1;
     }
     }
     let coloLi=$(".color-option ul li")
     coloLi
     .eq(0).css("backgroundColor","#F00").end()
     .eq(1).css("backgroundColor","#1dbf9a").end()
     .eq(2).css("backgroundColor","#f0f").end()
     .eq(3).css("backgroundColor","blueviolet")

      /*coloLi.click(function(){
     	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
     })*/
     let link=document.getElementById('link');
     let li=document.querySelectorAll('#li1');

     for(let i=0;i<li.length;i++){
     	li[i].onclick=function(){
     		link.href=li[i].dataset.value;
     	}
     }
     /*section loading*/
     let mybody=document.querySelector('body');
     let myload=document.getElementById('l');
     let mySp=document.querySelector('spinner');
      window.onload=function(){
      setTimeout(function(){
     // 	myload.style.visibility='hidden';
            //mySp.style.visibility='hidden';
      	myload.remove();
      	 mybody.style.overflow ='auto';
      },1000);
     }
     // start scroll top
     let myScroll=document.getElementById('scroll-top');
  /*  var scrollButton=$('#scroll-top');
    $(window).scroll(function(){
    	console.log($(this).scrollTop());
    	if ($(this).scrollTop()>=700){
    		scrollButton.show();
    	}
    })*/
	window.onscroll=function(){
		if(this.pageYOffset>=700){
			myScroll.style.display='block';
		}else{
			myScroll.style.display='none';
				}
	}
	myScroll.onclick=function(){
		 window.scroll({
              top:0,
              behavior: 'smooth'
            });

	}
    
