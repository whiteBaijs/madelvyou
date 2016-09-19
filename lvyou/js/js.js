
$(function(){
    //--------------顶部导航事件模块-------------
    (function(){
        // 导航点击事件
         var $nav = $('#nav'),
             $lis = $nav.children('li');
         $lis.click(function(){
            $(this).addClass('active').siblings().removeClass('active');
         });
        // 手机/客服电话 移入移出事件
        var $hover_show = $('.hover_show'),
            $em         = $hover_show.children('em');
        $em.hover(function(){
            $(this).next('.show').show();
            console.log($(this).next('.show').html())
        },function(){
            $(this).next('.show').hide();
        });
    })(); 
    //-------------焦点图模块-------------------- 
    (function(){
            var $ul   = $(".lunbo-tow ul"),
                $olis = $('.lunbo-tow ol li'),
                timer = null,
                index = 1;

            $olis.click(function() {
                var curIndex=$(this).index();
                $(this).addClass('on').siblings('li').removeClass('on');
                $ul.stop().animate({"left":-curIndex+"00%"},1000,"swing");
            });

            clearInterval(timer);
            timer = setInterval(function(){
                index++;
                if(index>$ul.children('li').length-2){
                    index=1;
                    $ul.css({'left':0});
                };
                $olis.eq(index).addClass('on').siblings('li').removeClass('on');
                $ul.stop().animate({"left":-index+"00%"},1000,"swing");
                
            },5000);
    })();  
    //-------------手风琴模块--------------------
    (function(){
         var $fold = $('.ifold'),
             $lis  = $fold.find('li');                    
        $lis.mouseenter(function(){
	            $(this).stop().animate({'width':'400px'},500).siblings().stop().animate({'width':'133px'},500);
	            $(this).find('.ipic').stop().animate({'margin-left':0},500)
	            $(this).find('.imask').hide();          
	        });
	        $lis.mouseleave(function(){
	            $lis.stop().animate({'width':'170px'},500).siblings().filter(':gt(1)').stop().animate({'width':'172px'},500);
	            $lis.find('.ipic').stop().animate({'margin-left':'-105px'},500)
	            $(this).find('.imask').show();           
	        });
	    })();
	    
    //-------------旅游指南模块--------------------	    
    (function(){
        // 获取tab_show_img
        var $tab = $('.tab_show_img');
        var $tabLi = $tab.find('ul li');
        var $olis = $tab.find('ol li')
        $tabLi.hover(function(){
            $olis.eq($(this).index()).addClass('show').siblings('li').removeClass('show');
            $(this).addClass('on').siblings().removeClass('on');
        });
    })();
    //底部选项卡
    (function(){
		var $tab_nav = $('#tab_nav'),
		    $lis     = $tab_nav.find('li'),
		    $nav_con = $tab_nav.children('.nav_con').find('div');
		$lis.click(function(e){
			e.preventDefault();
			$(this).addClass('on').siblings('li').removeClass('on');
			$nav_con.eq($(this).index()).show().siblings('div').hide();
			
		});
	})();
	(function(){
    	//eamil输入框获取/失去焦点时的事件 
         var $email = $('#input_email');
		 $email.val('请输入您的E-mail');
		 $email.css({'outLine':'none'})
         $email.focus(function(){
			if($(this).val()=='请输入您的E-mail'){
					$(this).val('');
			}
		});
		//失去光标时里面内容为空，复原来的内容
		$email.blur(function(){
			if($(this).val()==''){
			   $(this).val('请输入您的E-mail');
			}
		});
	 })();
	
	//----------第七页----------火车票页面
	(function(){
        
        // 获取tab_play
        var $tab = $('.tab_play');
        var $tabLi = $tab.find('ul li');
        var $olis = $tab.find('ol')
        $tabLi.hover(function(){
            $olis.eq($(this).index()).addClass('show').siblings().removeClass('show');
            $(this).addClass('on').siblings().removeClass('on');
        });
    })();
	//----------第八页----------汽车票页面
	//点击关闭下载App
	(function(){
           var $close = $('#downClose');
           $close.click(function(){
           	 $(this).parents('.downApp-wrap').hide();
           	 
           })
     })();

// ...............首页.中部图片选项卡............................     
     (function() {
            var $dds1 = $('.destination .in-nation .aim-mid dd');
            var $lis1 = $('.destination .in-nation .aim-mid ul');
            var $dds2 = $('.destination .out-nation .aim-mid dd');
            var $lis2 = $('.destination .out-nation .aim-mid ul');
            var $dds3 = $('.bargain .bargain-filght .aim-mid dd');
            var $lis3 = $('.bargain .bargain-filght .aim-mid ul');
            var $dds4 = $('.bargain .bargain-subway .aim-mid dd');
            var $lis4 = $('.bargain .bargain-subway .aim-mid ul');
            Tab($dds1, $lis1);
            Tab($dds2, $lis2);
            Tab($dds3, $lis3);
            Tab($dds4, $lis4);

            function Tab($1, $2) {
                $1.click(function() {
                    var index = $(this).index() - 1;
                    $(this).children('a').addClass('on').end().siblings('dd').children('a').removeClass('on');
                    $2.eq(index).addClass('on').siblings('ul').removeClass('on');
                })
            }

        })();

});




