(function() {

    var __hs_cta_json = {"css":"a#cta_button_493098_new {\n    -webkit-font-smoothing: antialiased !important;\ncursor: pointer !important;\n-moz-user-select: none !important;\n-webkit-user-select: none !important;\n-o-user-select: none !important;\nuser-select: none !important;\ndisplay: inline-block !important;\nfont-weight: normal !important;\ntext-align: center !important;\ntext-decoration: none !important;\n-moz-transition: all .4s ease !important;\n-webkit-transition: all .4s ease !important;\n-o-transition: all .4s ease !important;\nbackground: rgb(53,116,227) !important;\nborder-radius: 6px !important;\nborder-width: 0px !important;\ncolor: rgb(255,255,255) !important;\nfont-family: sans-serif !important;\nheight: auto !important;\ntransition: all .4s ease !important;\npadding: 6px 18px !important;\ntext-shadow: none !important;\nwidth: auto !important;\nfont-size: 24px !important;\nline-height: 1.5em !important;\n\n    \n  }\n\na#cta_button_493098_new:hover {\nbackground: rgb(58,127,249) !important;\ncolor: rgb(255,255,255) !important;\n}\n\na#cta_button_493098_new:active, #cta_button_493098_new:active:hover {\nbackground: rgb(42,92,181) !important;\ncolor: rgb(244,244,244) !important;\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_493098_38386b9e-1ccd-4da4-8393-c6bca957157c\" class=\"cta_button\" href=\"https://www.netguru.com/cs/c/?cta_guid=38386b9e-1ccd-4da4-8393-c6bca957157c&signature=AAH58kEuEHHhgy9d3KPpqGQfL6peD30cXQ&placement_guid=f869f20d-aae9-4efc-8189-5464e3bf47a1&click=c8519fb7-1044-4a31-9e66-e7359e6b5ad5&hsutk=c7a000001dc51e441851017534ad6919&canon=https%3A%2F%2Fwww.netguru.com%2Fcodestories%2Freact-native-text-to-speech&portal_id=493098&redirect_url=APefjpHpQIwW0H3Yk7g__PC3DyN9pB8kpUfEcKZkRIsqfshy-S6C4k-i08HctD5hyaj-uXBqnAHCdDlP4aEoEKib9oJDOdo7WF4AL91hA4KnpR5XzXRhjgs\"  target=\"_blank\"  cta_dest_link=\"https://www.netguru.com/career\"><img id=\"hs-cta-img-f869f20d-aae9-4efc-8189-5464e3bf47a1\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"New call-to-action\" src=\"/hs-fs/hub/493098/hub_generated/resized/3c01ef18-03bf-45b7-a297-0e1faa643dbf.png\" /></a>","is_image":true,"placement_element_class":"hs-cta-f869f20d-aae9-4efc-8189-5464e3bf47a1","raw_html":"<a id=\"cta_button_493098_38386b9e-1ccd-4da4-8393-c6bca957157c\" class=\"cta_button \" href=\"https://www.netguru.com/cs/c/?cta_guid=38386b9e-1ccd-4da4-8393-c6bca957157c&signature=AAH58kEuEHHhgy9d3KPpqGQfL6peD30cXQ&placement_guid=f869f20d-aae9-4efc-8189-5464e3bf47a1&click=c8519fb7-1044-4a31-9e66-e7359e6b5ad5&hsutk=c7a000001dc51e441851017534ad6919&canon=https%3A%2F%2Fwww.netguru.com%2Fcodestories%2Freact-native-text-to-speech&portal_id=493098&redirect_url=APefjpHpQIwW0H3Yk7g__PC3DyN9pB8kpUfEcKZkRIsqfshy-S6C4k-i08HctD5hyaj-uXBqnAHCdDlP4aEoEKib9oJDOdo7WF4AL91hA4KnpR5XzXRhjgs\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.netguru.com/career\" title=\"New call-to-action\">New call-to-action</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('f869f20d-aae9-4efc-8189-5464e3bf47a1');
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
    window._hsq.push(['trackCtaView', 'f869f20d-aae9-4efc-8189-5464e3bf47a1', '38386b9e-1ccd-4da4-8393-c6bca957157c']);
    

}());
