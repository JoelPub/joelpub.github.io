(function() {

    var __hs_cta_json = {"css":"a#cta_button_493098_1846ffc1-8544-4c9a-a4b9-7a27bbfb0512 {\n  -webkit-font-smoothing:antialiased !important; \n  cursor:pointer !important; \n  -moz-user-select:none !important; \n  -webkit-user-select:none !important; \n  -o-user-select:none !important; \n  user-select:none !important; \n  display:inline-block !important; \n  font-weight:normal !important; \n  text-align:center !important; \n  text-decoration:none !important; \n  font-family:sans-serif !important; \n  background:rgb(53,116,227) !important; \n  color:rgb(255, 255, 255) !important; \n  border-radius:6px !important; \n  border-width:0px !important; \n  transition:all .4s ease !important; \n  -moz-transition:all .4s ease !important; \n  -webkit-transition:all .4s ease !important; \n  -o-transition:all .4s ease !important; \n  text-shadow:none !important; \n  line-height:1.5em !important; \n  padding:6px 18px !important; \n}\na#cta_button_493098_1846ffc1-8544-4c9a-a4b9-7a27bbfb0512:hover {\nbackground:rgb(58,127,249) !important; \ncolor:rgb(255,255,255) !important; \n}\na#cta_button_493098_1846ffc1-8544-4c9a-a4b9-7a27bbfb0512:active, #cta_button_493098_1846ffc1-8544-4c9a-a4b9-7a27bbfb0512:active:hover {\nbackground:rgb(42,92,181) !important; \ncolor:rgb(244,244,244) !important; \n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_493098_1846ffc1-8544-4c9a-a4b9-7a27bbfb0512\" class=\"cta_button\" href=\"https://www.netguru.com/cs/c/?cta_guid=1846ffc1-8544-4c9a-a4b9-7a27bbfb0512&signature=AAH58kGrbriuDzkfSlKxiOWLWL759p4UXw&placement_guid=1ee45616-dbb2-4166-bbdc-b48682356f8d&click=5b0589bc-2a63-4a59-a79c-051d373ae7f9&hsutk=c7a000001e1010b41702017534ad6a31&canon=https%3A%2F%2Fwww.netguru.com%2Fcodestories%2Freact-native-text-to-speech&portal_id=493098&redirect_url=APefjpHja_oUkt0DK-XkXZj2sP98dkKHh2p9nWb9F9NkK-2vM5RYeBhC06y-booeI4rVIkAeosRmJH7LIQoI89YGIRAu-iit-iZ1hfP5qTUVhp8fA0SnvRE\"  cta_dest_link=\"https://www.netguru.com/career/\"><img id=\"hs-cta-img-1ee45616-dbb2-4166-bbdc-b48682356f8d\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Looking for new opportunities? Check our offers!\" src=\"/hs-fs/hub/493098/hub_generated/resized/68f7984b-49b0-4b97-85c7-8b614318a607.png\" /></a>","is_image":true,"placement_element_class":"hs-cta-1ee45616-dbb2-4166-bbdc-b48682356f8d","raw_html":"<a id=\"cta_button_493098_1846ffc1-8544-4c9a-a4b9-7a27bbfb0512\" class=\"cta_button \" href=\"https://www.netguru.com/cs/c/?cta_guid=1846ffc1-8544-4c9a-a4b9-7a27bbfb0512&signature=AAH58kGrbriuDzkfSlKxiOWLWL759p4UXw&placement_guid=1ee45616-dbb2-4166-bbdc-b48682356f8d&click=5b0589bc-2a63-4a59-a79c-051d373ae7f9&hsutk=c7a000001e1010b41702017534ad6a31&canon=https%3A%2F%2Fwww.netguru.com%2Fcodestories%2Freact-native-text-to-speech&portal_id=493098&redirect_url=APefjpHja_oUkt0DK-XkXZj2sP98dkKHh2p9nWb9F9NkK-2vM5RYeBhC06y-booeI4rVIkAeosRmJH7LIQoI89YGIRAu-iit-iZ1hfP5qTUVhp8fA0SnvRE\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.netguru.com/career/\" title=\"Looking for new opportunities? Check our offers!\"><span style=\"color: #ffffff; font-size: 24px; font-family: sans-serif; line-height: 1.5em;\">New Call-to-action</span></a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }
            
            html = __hs_cta_json.raw_html;

        }
         

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('1ee45616-dbb2-4166-bbdc-b48682356f8d');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', '1ee45616-dbb2-4166-bbdc-b48682356f8d', '1846ffc1-8544-4c9a-a4b9-7a27bbfb0512']);
    

}());
