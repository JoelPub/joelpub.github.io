(function($) {
    $.fn.extend({
        leanModal: function(options) {
            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null,
                title : '提示',
                content : '您的评论包含关键词，请重新发表评论内容。',
                callbackBtn:null,
                callback:null,
                callbackParam:""
            };

            options = $.extend(defaults, options);
            //var showconteng =  $('<div class="tankuang" id="alertTanKuang"><p class="title_tan">提示</p><div class="cont_tan"><p>'+options.content+'</p><div style="height:50px;"></div><p class="bt_tan"><a href="javascript:void(0)" class="modal_close">确定</a></p></div></div>');
            var showconteng =  $('<div class="lg_wds" id="alertTanKuang"><div class="lg_wds_title">提示</div><div class="lg_wds_prompt">'+options.content+'</div><div class="lg_wds_bt modal_close">确 定</div><div class="wds_close modal_close"></div></div>');
            var overlay = $("<div id='lean_overlay'></div>");
            
            
            if($("#alertTanKuang").length ==0){
              $("body").append(overlay);
              $("body").append(showconteng);
            }
            else{
              return;
            }
            
            return this.each(function() {
                var o = options;
                
                    var modal_id = $("#alertTanKuang");
                    $("#lean_overlay").click(function() {
                        close_modal(modal_id)
                    });
                    $(o.closeButton).click(function() {
                        close_modal(modal_id)
                    });
                    $(o.callbackBtn).click(function() {
                        close_modal(modal_id)
                        o.callback(o.callbackParam)
                    });

                    $(document).keydown(function(e){
                      if(!e) var e = window.event;
                      
                      close_modal(modal_id)
                      
                    });
                    
                    var modal_height = $(modal_id).outerHeight();
                    var modal_width = $(modal_id).outerWidth();
                    $("#lean_overlay").css({
                        "display": "block",
                        "z-index": 10999,
                        opacity: 0
                    });
                    $("#lean_overlay").fadeTo(200, o.overlay);
                    $(modal_id).css({
                        "display": "block",
                        "position": "fixed",
                        "opacity": 0,
                        "z-index": 11000,
                        "left": 50 + "%",
                        "margin-left":"-225px",
                        "top": o.top + "px"
                    });
                    $(modal_id).fadeTo(200, 1);

            });
            function close_modal(modal_id) {
                $("#lean_overlay").fadeOut(200);
                $(modal_id).remove();
            }
        }
    })
})(jQuery);