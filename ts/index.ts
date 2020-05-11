/*
 * @Author: Mr.Wei 
 * @Date: 2019-04-09 10:44:18 
 * @Last Modified by: Mr.Wei
 * @Last Modified time: 2019-04-11 14:02:55
 */
(function (window, document) {

  const $ = (dom: any): any => document.querySelector(dom)

  enum Events {
    Click = 'click',
    Load = 'load'
  }

  enum Dom {
    contPic = '#contPic',
    contList = '#contList',
    contImg = '#contImg',
    congTit = '#congTit',
    goIndex = '#goIndex',
    aboutMe = '#aboutMe'
  }

  const arr: Array<any> = []

  const titleList: Array<string> = [
    `SHORT VIDEO FUN LIFE FESTIVAL 2017
    2017西瓜视频生活季`,
    `GOLDEN SECOND AWARDS
    金秒奖全新视觉形象提升`,
    `OCDC, stands for “Camp for OCD”.
    OCDC is a social innovation project initiated by the team OMAGE.Through a combination of online and offline multi - platform integrating art, design, life, original products and so on, with a fresh and unique concept, we call on everyone to pay close attention to obsessive - compulsive disorder, which appears quite common as a social psychological problem today but often misunderstood by the majority.We live in a disoriented era characterized by excessive anxiety, OCDC endeavors to build a secure and orderly world for people in need.

    OCDC’s first series of offline launch is a themed pop - up, starting from a cross - industry collaboration with the hair and styling brand “Elephant Studio.Stay in line with OMAGE’s belief on “FUN FOR GOOD”, Elephant Studio hopes to break the traditional image of a hair salon, seeks innovations by introducing new experiences, eventually realizes the dual value of the brand itself and of the society as a whole.

    Welcome to enter the themed interactive space of OCDC, here is the place for better knowing OCD, better understanding yourself.

    OCDC，英文全称“CAMP for OCD”，中文叫做“强迫症庇护所”。

    OCDC是由OMAGE团队发起的社会创新项目，通过线上线下多平台的综合形式，结合艺术、设计、生活、原创产品等，以新鲜独特的理念，呼吁大家关注强迫症这个非常普遍但又经常被人误解的社会性心理问题。在这个全民焦虑的无序时代里，为OCD搭建一处充满安全感的有序世界。

    OCDC此次与大象造型跨界合作的POP - UP快闪空间为OCDC第一系列线下活动。与OMAGE团队“FUN FOR GOOD”的理念一致，大象造型希望打破传统发型工作室的定位， 尝试用更多有趣又有意义的创新形式带给大家全新的体验，实现自身价值与社会价值的双重升级。

    欢迎走进OCDC主题互动空间，更正确地认知OCD，更好地了解自己。`,
    `smart times & smart dealer`,
    `www.omage.com.cn

    OCDC, stands for “Camp for OCD”.

    OCDC is a social innovation project initiated by the team OMAGE.Through a combination of online and offline multi - platform integrating art, design, life, original products and so on, with a fresh and unique concept, we call on everyone to pay close attention to obsessive - compulsive disorder, which appears quite common as a social psychological problem today but often misunderstood by the majority.We live in a disoriented era characterized by excessive anxiety, OCDC endeavors to build a secure and orderly world for people in need.

    OCDC，英文全称“CAMP for OCD”，中文叫做“强迫症庇护所”。

    OCDC是由OMAGE团队发起的社会创新项目，通过线上线下多平台的综合形式，结合艺术、设计、生活、原创产品等，以新鲜独特的理念，呼吁大家关注强迫症这个非常普遍但又经常被人误解的社会性心理问题。在这个全民焦虑的无序时代里，为OCD搭建一处充满安全感的有序世界。`,
    `NIKE JUVENILE ILLUSTRATION
    耐克少年`,
    `TENCENT VIDEO VIP 2018. SEASON I.`,
    `TOUTIAO CREATION & COMMUNICATION CONFERENCE 2019
    今日头条创流大会`,
    `THE ALL - NEW X5 NATIONAL LAUNCH EVENT.
    全新bmwx5上市发布会。`,
    `www.tmtpost.com
    钛媒体 logo及公仔`,
    `FANTASTIC GARDEN
    荟聚公仔形象`,
    `TOUTIAO CREATOR CONFERENCES 2017
    今日头条创作者大会2017`,
    `COCA COLA  CHINA SYSTEM CONFERENCE
    可口可乐中国系统大会`,
    `MINI X 计划
    冰点一夏
    BE MINI.`,
    `NATIONAL DEALER CONFERENCE SPRING
    春季梅赛德斯奔驰 - 奔驰全国经销商大会`,
    `CAIKR wallet, the digital platform of Beijing CAIKR financial information service co. LTD, has its PC version launched on 22, September, 2015. Moreover, the mobile APP and the public account "CAIKR wallet" on WECHAT will be launched on June, 2015.

    The platform "CAIKR wallet" is specialized in providing digital services, such as online payment, automobile purchasing, and online microfinance service. The matched loan assets are mainly under the categories of Automobile installment asset, Agricultural asset, and Personal consumption asset.

    The "CAIKR wallet" app has been accessible on Android App, iOS App and Wap App. Till now, the number of registered users reached 1.07 million and the range of user's age is mainly between 18 and 55.`,
    `AUDI URBAN ELECTRONICS
    奥迪音乐节`,
    `THE AMAZING TRAVEL
    美好旅行`,
    `KOMATSU
    小松家`,
    `TOUTIAO ENTERTAINMENT GRAND CEREMONY
    头条娱乐盛典`
  ]
  const aboutDec = `<section class="about-me"><p>Having experience of visual design in every part of the manufacturing process more than 10 years
    Being proficient at establishing and visualizing a brand by creating logo/VI/SI/images
    Working experience in internet industry and design ability for online platform such as APP, web, H5, Weibo, Wechat
    Experience of visual design for car promotion event both on & offline for many years.

    Clients: Audi, BMW, Benz, Infiniti, Lexus, smart, mini, Coca-Cola, Toutiao, Douyin, Tencent, etc.
    
    All rights reserved by zacfang & brand owners. Those responsible for unauthorized reproduction will be prosecuted.</p>

    <p>10年以上全链条视觉设计经验
    品牌logo/vi/si/调性等视觉系统建立的丰富经验
    互联网行业APP/web/H5/双微等全线上平台设计能力
    多年汽车线上线下活动视觉设计经验

    服务品牌：Audi、BMW、Benz、Infiniti、Lexus、smart、mini、可口可乐、今日头条、抖音、腾讯等

    版权归zacfang及品牌方所有，严禁盗用，违者必究。</p></section>`
  const loadImg = (dom: any) => {
    for (let i = 0; i < dom.children.length; i++) {
      arr[i] = new Image()
      arr[i].src = `./images/big-${i + 1}.jpg`
    }
  }

  const scrollTop = (top: number = 0, behavior: ScrollBehavior = 'auto') => {
    window.scrollTo({
      top,
      behavior
    })
  }

  window.addEventListener(Events.Load, () => {

    const [contPic, contList, contImg, congTit, goIndex, aboutMe] = [$(Dom.contPic), $(Dom.contList), $(Dom.contImg), $(Dom.congTit), $(Dom.goIndex), $(Dom.aboutMe)]

    //预加载图片
    loadImg(contList)

    aboutMe.addEventListener(Events.Click, () => {
      congTit.innerHTML = aboutDec
      contImg.style.display = 'none'
      congTit.style.display = 'block'
      congTit.classList.add('about')
    })

    goIndex.addEventListener(Events.Click, () => {
      scrollTop(contList.offsetTop - 20, 'auto')
    })

    goIndex.removeEventListener(Events.Click, null)

    contList.addEventListener(Events.Click, (e: { target: { dataset: { index: number }, localName: string } }): void => {

      if (e.target.localName !== 'img') return
      const index: number = Number(e.target.dataset.index)

      contPic.classList.add('show')

      congTit.innerText = titleList[index]
      congTit.classList.remove('about')
      congTit.style.display = 'block'
      congTit.style.textAlign = index === 2 || index === 4 || index === 15 ? 'justify' : 'center'

      contImg.style.display = 'block'
      contImg.src = arr[index].src

      // scrollTop()
      contImg.addEventListener(Events.Load, scrollTop, false)
      contImg.removeEventListener(Events.Load, null)
    })

    contList.removeEventListener(Events.Click, null)

  }, false)

  window.removeEventListener(Events.Load, null)

})(window, document)