/*
 * @Author: Mr.Wei
 * @Date: 2019-04-09 10:44:18
 * @Last Modified by: Mr.Wei
 * @Last Modified time: 2019-04-11 14:02:23
 */
(function (window, document) {
    var $ = function (dom) { return document.querySelector(dom); };
    var Events;
    (function (Events) {
        Events["Click"] = "click";
        Events["Load"] = "load";
    })(Events || (Events = {}));
    var Dom;
    (function (Dom) {
        Dom["contPic"] = "#contPic";
        Dom["contList"] = "#contList";
        Dom["contImg"] = "#contImg";
        Dom["congTit"] = "#congTit";
        Dom["goIndex"] = "#goIndex";
        Dom["aboutMe"] = "#aboutMe";
    })(Dom || (Dom = {}));
    var arr = [];
    var titleList = [
        "SHORT VIDEO FUN LIFE FESTIVAL 2017\n    2017\u897F\u74DC\u89C6\u9891\u751F\u6D3B\u5B63",
        "GOLDEN SECOND AWARDS\n    \u91D1\u79D2\u5956\u5168\u65B0\u89C6\u89C9\u5F62\u8C61\u63D0\u5347",
        "OCDC, stands for \u201CCamp for OCD\u201D.\n    OCDC is a social innovation project initiated by the team OMAGE.Through a combination of online and offline multi - platform integrating art, design, life, original products and so on, with a fresh and unique concept, we call on everyone to pay close attention to obsessive - compulsive disorder, which appears quite common as a social psychological problem today but often misunderstood by the majority.We live in a disoriented era characterized by excessive anxiety, OCDC endeavors to build a secure and orderly world for people in need.\n\n    OCDC\u2019s first series of offline launch is a themed pop - up, starting from a cross - industry collaboration with the hair and styling brand \u201CElephant Studio.Stay in line with OMAGE\u2019s belief on \u201CFUN FOR GOOD\u201D, Elephant Studio hopes to break the traditional image of a hair salon, seeks innovations by introducing new experiences, eventually realizes the dual value of the brand itself and of the society as a whole.\n\n    Welcome to enter the themed interactive space of OCDC, here is the place for better knowing OCD, better understanding yourself.\n\n    OCDC\uFF0C\u82F1\u6587\u5168\u79F0\u201CCAMP for OCD\u201D\uFF0C\u4E2D\u6587\u53EB\u505A\u201C\u5F3A\u8FEB\u75C7\u5E87\u62A4\u6240\u201D\u3002\n\n    OCDC\u662F\u7531OMAGE\u56E2\u961F\u53D1\u8D77\u7684\u793E\u4F1A\u521B\u65B0\u9879\u76EE\uFF0C\u901A\u8FC7\u7EBF\u4E0A\u7EBF\u4E0B\u591A\u5E73\u53F0\u7684\u7EFC\u5408\u5F62\u5F0F\uFF0C\u7ED3\u5408\u827A\u672F\u3001\u8BBE\u8BA1\u3001\u751F\u6D3B\u3001\u539F\u521B\u4EA7\u54C1\u7B49\uFF0C\u4EE5\u65B0\u9C9C\u72EC\u7279\u7684\u7406\u5FF5\uFF0C\u547C\u5401\u5927\u5BB6\u5173\u6CE8\u5F3A\u8FEB\u75C7\u8FD9\u4E2A\u975E\u5E38\u666E\u904D\u4F46\u53C8\u7ECF\u5E38\u88AB\u4EBA\u8BEF\u89E3\u7684\u793E\u4F1A\u6027\u5FC3\u7406\u95EE\u9898\u3002\u5728\u8FD9\u4E2A\u5168\u6C11\u7126\u8651\u7684\u65E0\u5E8F\u65F6\u4EE3\u91CC\uFF0C\u4E3AOCD\u642D\u5EFA\u4E00\u5904\u5145\u6EE1\u5B89\u5168\u611F\u7684\u6709\u5E8F\u4E16\u754C\u3002\n\n    OCDC\u6B64\u6B21\u4E0E\u5927\u8C61\u9020\u578B\u8DE8\u754C\u5408\u4F5C\u7684POP - UP\u5FEB\u95EA\u7A7A\u95F4\u4E3AOCDC\u7B2C\u4E00\u7CFB\u5217\u7EBF\u4E0B\u6D3B\u52A8\u3002\u4E0EOMAGE\u56E2\u961F\u201CFUN FOR GOOD\u201D\u7684\u7406\u5FF5\u4E00\u81F4\uFF0C\u5927\u8C61\u9020\u578B\u5E0C\u671B\u6253\u7834\u4F20\u7EDF\u53D1\u578B\u5DE5\u4F5C\u5BA4\u7684\u5B9A\u4F4D\uFF0C \u5C1D\u8BD5\u7528\u66F4\u591A\u6709\u8DA3\u53C8\u6709\u610F\u4E49\u7684\u521B\u65B0\u5F62\u5F0F\u5E26\u7ED9\u5927\u5BB6\u5168\u65B0\u7684\u4F53\u9A8C\uFF0C\u5B9E\u73B0\u81EA\u8EAB\u4EF7\u503C\u4E0E\u793E\u4F1A\u4EF7\u503C\u7684\u53CC\u91CD\u5347\u7EA7\u3002\n\n    \u6B22\u8FCE\u8D70\u8FDBOCDC\u4E3B\u9898\u4E92\u52A8\u7A7A\u95F4\uFF0C\u66F4\u6B63\u786E\u5730\u8BA4\u77E5OCD\uFF0C\u66F4\u597D\u5730\u4E86\u89E3\u81EA\u5DF1\u3002",
        "smart times & smart dealer",
        "www.omage.com.cn\n\n    OCDC, stands for \u201CCamp for OCD\u201D.\n\n    OCDC is a social innovation project initiated by the team OMAGE.Through a combination of online and offline multi - platform integrating art, design, life, original products and so on, with a fresh and unique concept, we call on everyone to pay close attention to obsessive - compulsive disorder, which appears quite common as a social psychological problem today but often misunderstood by the majority.We live in a disoriented era characterized by excessive anxiety, OCDC endeavors to build a secure and orderly world for people in need.\n\n    OCDC\uFF0C\u82F1\u6587\u5168\u79F0\u201CCAMP for OCD\u201D\uFF0C\u4E2D\u6587\u53EB\u505A\u201C\u5F3A\u8FEB\u75C7\u5E87\u62A4\u6240\u201D\u3002\n\n    OCDC\u662F\u7531OMAGE\u56E2\u961F\u53D1\u8D77\u7684\u793E\u4F1A\u521B\u65B0\u9879\u76EE\uFF0C\u901A\u8FC7\u7EBF\u4E0A\u7EBF\u4E0B\u591A\u5E73\u53F0\u7684\u7EFC\u5408\u5F62\u5F0F\uFF0C\u7ED3\u5408\u827A\u672F\u3001\u8BBE\u8BA1\u3001\u751F\u6D3B\u3001\u539F\u521B\u4EA7\u54C1\u7B49\uFF0C\u4EE5\u65B0\u9C9C\u72EC\u7279\u7684\u7406\u5FF5\uFF0C\u547C\u5401\u5927\u5BB6\u5173\u6CE8\u5F3A\u8FEB\u75C7\u8FD9\u4E2A\u975E\u5E38\u666E\u904D\u4F46\u53C8\u7ECF\u5E38\u88AB\u4EBA\u8BEF\u89E3\u7684\u793E\u4F1A\u6027\u5FC3\u7406\u95EE\u9898\u3002\u5728\u8FD9\u4E2A\u5168\u6C11\u7126\u8651\u7684\u65E0\u5E8F\u65F6\u4EE3\u91CC\uFF0C\u4E3AOCD\u642D\u5EFA\u4E00\u5904\u5145\u6EE1\u5B89\u5168\u611F\u7684\u6709\u5E8F\u4E16\u754C\u3002",
        "NIKE JUVENILE ILLUSTRATION\n    \u8010\u514B\u5C11\u5E74",
        "TENCENT VIDEO VIP 2018. SEASON I.",
        "TOUTIAO CREATION & COMMUNICATION CONFERENCE 2019\n    \u4ECA\u65E5\u5934\u6761\u521B\u6D41\u5927\u4F1A",
        "THE ALL - NEW X5 NATIONAL LAUNCH EVENT.\n    \u5168\u65B0bmwx5\u4E0A\u5E02\u53D1\u5E03\u4F1A\u3002",
        "www.tmtpost.com\n    \u949B\u5A92\u4F53 logo\u53CA\u516C\u4ED4",
        "FANTASTIC GARDEN\n    \u835F\u805A\u516C\u4ED4\u5F62\u8C61",
        "TOUTIAO CREATOR CONFERENCES 2017\n    \u4ECA\u65E5\u5934\u6761\u521B\u4F5C\u8005\u5927\u4F1A2017",
        "COCA COLA  CHINA SYSTEM CONFERENCE\n    \u53EF\u53E3\u53EF\u4E50\u4E2D\u56FD\u7CFB\u7EDF\u5927\u4F1A",
        "MINI X \u8BA1\u5212\n    \u51B0\u70B9\u4E00\u590F\n    BE MINI.",
        "NATIONAL DEALER CONFERENCE SPRING\n    \u6625\u5B63\u6885\u8D5B\u5FB7\u65AF\u5954\u9A70 - \u5954\u9A70\u5168\u56FD\u7ECF\u9500\u5546\u5927\u4F1A",
        "CAIKR wallet, the digital platform of Beijing CAIKR financial information service co. LTD, has its PC version launched on 22, September, 2015. Moreover, the mobile APP and the public account \"CAIKR wallet\" on WECHAT will be launched on June, 2015.\n\n    The platform \"CAIKR wallet\" is specialized in providing digital services, such as online payment, automobile purchasing, and online microfinance service. The matched loan assets are mainly under the categories of Automobile installment asset, Agricultural asset, and Personal consumption asset.\n\n    The \"CAIKR wallet\" app has been accessible on Android App, iOS App and Wap App. Till now, the number of registered users reached 1.07 million and the range of user's age is mainly between 18 and 55.",
        "AUDI URBAN ELECTRONICS\n    \u5965\u8FEA\u97F3\u4E50\u8282",
        "THE AMAZING TRAVEL\n    \u7F8E\u597D\u65C5\u884C",
        "KOMATSU\n    \u5C0F\u677E\u5BB6",
        "TOUTIAO ENTERTAINMENT GRAND CEREMONY\n    \u5934\u6761\u5A31\u4E50\u76DB\u5178"
    ];
    var aboutDec = "<section class=\"about-me\"><p>Having experience of visual design in every part of the manufacturing process more than 10 years\n    Being proficient at establishing and visualizing a brand by creating logo/VI/SI/images\n    Working experience in internet industry and design ability for online platform such as APP, web, H5, Weibo, Wechat\n    Experience of visual design for car promotion event both on & offline for many years.\n\n    Clients: Audi, BMW, Benz, Infiniti, Lexus, smart, mini, Coca-Cola, Toutiao, Douyin, Tencent, etc.\n    \n    All rights reserved by zacfang & brand owners. Those responsible for unauthorized reproduction will be prosecuted.</p>\n\n    <p>10\u5E74\u4EE5\u4E0A\u5168\u94FE\u6761\u89C6\u89C9\u8BBE\u8BA1\u7ECF\u9A8C\n    \u54C1\u724Clogo/vi/si/\u8C03\u6027\u7B49\u89C6\u89C9\u7CFB\u7EDF\u5EFA\u7ACB\u7684\u4E30\u5BCC\u7ECF\u9A8C\n    \u4E92\u8054\u7F51\u884C\u4E1AAPP/web/H5/\u53CC\u5FAE\u7B49\u5168\u7EBF\u4E0A\u5E73\u53F0\u8BBE\u8BA1\u80FD\u529B\n    \u591A\u5E74\u6C7D\u8F66\u7EBF\u4E0A\u7EBF\u4E0B\u6D3B\u52A8\u89C6\u89C9\u8BBE\u8BA1\u7ECF\u9A8C\n\n    \u670D\u52A1\u54C1\u724C\uFF1AAudi\u3001BMW\u3001Benz\u3001Infiniti\u3001Lexus\u3001smart\u3001mini\u3001\u53EF\u53E3\u53EF\u4E50\u3001\u4ECA\u65E5\u5934\u6761\u3001\u6296\u97F3\u3001\u817E\u8BAF\u7B49\n\n    \u7248\u6743\u5F52zacfang\u53CA\u54C1\u724C\u65B9\u6240\u6709\uFF0C\u4E25\u7981\u76D7\u7528\uFF0C\u8FDD\u8005\u5FC5\u7A76\u3002</p></section>";
    var loadImg = function (dom) {
        for (var i = 0; i < dom.children.length; i++) {
            arr[i] = new Image();
            arr[i].src = "./images/big-" + (i + 1) + ".jpg";
        }
    };
    var scrollTop = function (top, behavior) {
        if (top === void 0) { top = 0; }
        if (behavior === void 0) { behavior = 'auto'; }
        window.scrollTo({
            top: top,
            behavior: behavior
        });
    };
    window.addEventListener(Events.Load, function () {
        var _a = [$(Dom.contPic), $(Dom.contList), $(Dom.contImg), $(Dom.congTit), $(Dom.goIndex), $(Dom.aboutMe)], contPic = _a[0], contList = _a[1], contImg = _a[2], congTit = _a[3], goIndex = _a[4], aboutMe = _a[5];
        //预加载图片
        loadImg(contList);
        aboutMe.addEventListener(Events.Click, function () {
            congTit.innerHTML = aboutDec;
            contImg.style.display = 'none';
            congTit.style.display = 'block';
            congTit.classList.add('about');
        });
        goIndex.addEventListener(Events.Click, function () {
            scrollTop(contList.offsetTop - 20, 'smooth');
        });
        goIndex.removeEventListener(Events.Click, null);
        contList.addEventListener(Events.Click, function (e) {
            if (e.target.localName !== 'img')
                return;
            var index = Number(e.target.dataset.index);
            contPic.classList.add('show');
            congTit.innerText = titleList[index];
            congTit.classList.remove('about');
            congTit.style.display = 'block';
            congTit.style.textAlign = index === 2 || index === 4 || index === 15 ? 'justify' : 'center';
            contImg.style.display = 'block';
            contImg.src = arr[index].src;
            // scrollTop()
            contImg.addEventListener(Events.Load, scrollTop, false);
            contImg.removeEventListener(Events.Load, null);
        });
        contList.removeEventListener(Events.Click, null);
    }, false);
    window.removeEventListener(Events.Load, null);
})(window, document);
