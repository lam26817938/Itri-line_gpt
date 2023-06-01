import { replyMessage } from '../utils/index.js';
import {activateHandler,commandHandler,continueHandler,deactivateHandler,deployHandler,docHandler,drawHandler,forgetHandler,enquireHandler,
  reportHandler,retryHandler,searchHandler,talkHandler,versionHandler} from './handlers/index.js';
import Context from './context.js';
import {ImageMessage, Message, TemplateMessage, TextMessage} from './messages/index.js';
import {addMark, convertText, fetchAudio,fetchGroup,fetchUser,generateTranscription,} from '../utils/index.js';
import { updateHistory, getHistory, removeHistory } from './history/index.js';
import config from '../config/index.js';
import { Bot, Event, Source } from './models/index.js';
import { getPrompt, setPrompt, removePrompt } from './prompt/index.js';
import { cases, industry, title, casetest, URLPREFIX, GPTFOOD, QQQQ, VIDEOIMG,FORMURL, allbigfunc, TODO} from './lib.js';

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const handleContext = async (context) => (
//  activateHandler(context)
//  || commandHandler(context)
   continueHandler(context)      // 繼續
  || deactivateHandler(context)  // 黑名單
//  || deployHandler(context)
  || docHandler(context)         // DEMO影片
//  || drawHandler(context)
  || forgetHandler(context)      // 忘記
 // || enquireHandler(context)
  || reportHandler(context)      // FAST AI介紹
  || retryHandler(context)　     // 重試
 // || searchHandler(context)
  || versionHandler(context)     // 了解更多
  || talkHandler(context)        // GPT主要回答
  || context
);

const n = 5   //多頁訊息頁數

const handleEvents = async (events = []) => (
  (Promise.all(
    (await Promise.all(
      (await Promise.all(
        events
          .map((event) => new Event(event))
          .filter((event) => event.isMessage )
          .filter((event) => event.isText || event.isAudio)
          .map((event) => new Context(event))
          .map((context) => context.initialize()),
      ))
        .map((context) => (context.error ? context : handleContext(context))),
    ))
      .filter((context) => context.messages.length > 0)
      .map((context) => replyMessage(context)),
  ))
);

const handlefollow = async (events = []) => {
  for (const event of events) {
    const message = []
    let content=[] 
    const userId=event.source.userId
    if (event.type === 'follow') {
 
      const prompt = getPrompt(userId);

      for (var food of GPTFOOD) {
        let more= food
        more=more.replaceAll('　', ' ').replace(config.BOT_NAME, '').trim();
        prompt.write('assistant', more);
        updateHistory(userId, (history) => history.write('工研院', addMark(more)));
      }

      setPrompt(userId, prompt);

      const temp = {
        type: 'text',
        text: '歡迎加入FAST AI一站式系統的好友～現在就讓我們一起來體驗FAST AI吧！​在開始之前想先了解您的背景，請問您的工作產業類別是？ 若底下無您的類別 請自行輸入',
        quickReply: {
          items: industry
        }
      };

      message.push(temp);
      
    }else if(event.type === 'unfollow'){
      removePrompt(userId);
      removeHistory(userId);
    }
    else if(event.type === 'postback'){
      const ev0=event.postback.data.split(':')[0]
      const ev1=event.postback.data.split(':')[1]

      if (ev0=='industry'){ 
      const prompt = getPrompt(userId);
      const moree='好的！ 那您的職務是？​我們即將提供您配對到最適合的方案囉！'
      prompt.write('assistant', moree);
      updateHistory(userId, (history) => history.write('工研院', addMark(moree)));
      setPrompt(userId, prompt);
       const temp = {
        type: 'text',
        text: '好的！ 那您的職務是?​我們即將提供您配對到最適合的方案囉！',
        quickReply: {
          items: title
        }
      };

      message.push(temp);

    }

    if(ev1=='客戶服務'|| ev1=='業務/行銷人員' || ev1=='財會/行政人員' || ev1=='產線/物流工程師' || (ev0=='VVV'&&ev1=='時序預測')||ev1=='顯示所有方案'){

      content = content.concat(cases['備料預測'], cases['交貨量預測'], cases['銷量預測'], cases['推薦系統'],
       cases['售價訂定'], cases['員工離職預測'], cases['員工表現評估'], cases['景點人數預測'], cases['載客熱點預測'], cases['景點人數預測'],
        cases['智慧交通'], cases['房價預測'], cases['智慧建築'], cases['疾病風險預測'], cases['牧場乳量預測']) 

    } if(ev1=='研發工程師'|| ev1== '產線/物流工程師'|| (ev0=='VVV'&&ev1=='影像分類')||ev1=='顯示所有方案'){
      
      content = content.concat(cases['AOI瑕疵分類'],cases['智慧交通'],cases['循環材料辨識'],cases['疾病風險預測'],
      cases['視網膜病變影像判讀'],cases['腦腫瘤分割'], cases['農產品瑕疵檢測'])
      
    } if(ev1=='研發工程師'|| ev1== '產線/物流工程師'|| (ev0=='VVV'&&ev1=='Data Refine')||ev1=='顯示所有方案'){

      content = content.concat(cases['交貨量預測'], cases['推薦系統'], cases['售價訂定'], cases['員工表現評估'], cases['載客熱點預測'],
       cases['景點人數預測'], cases['智慧交通'], cases['房價預測'], cases['智慧建築'], cases['疾病風險預測'], cases['牧場乳量預測'])
      
    } if(ev1=='研發工程師'|| ev1=='產線/物流工程師'|| (ev0=='VVV'&&ev1=='資料標註')||ev1=='顯示所有方案'){
      
      content = content.concat(cases['AOI瑕疵分類'], cases['智慧交通'], cases['循環材料辨識'], cases['智慧建築'], cases['疾病風險預測'],
       cases['視網膜病變影像判讀'], cases['腦腫瘤分割'], cases['農產品瑕疵檢測'])
      
    }
    

    if(ev0=='more'){   
      let content=ev1.split(",")
      let limitcontent = []

      for(let i=0;i<n-1;i++){
        if(content.length>0){
          limitcontent.push(cases[content.pop()])
        }
    }

    if(content.length!=0){
    limitcontent.push({
      "text": " ",
      "thumbnailImageUrl": URLPREFIX+"more.png",
      "actions": [
        {
          "type": "postback",
          "label": "顯示更多",
          "data": "more:"+content,
          "text":'顯示更多'
        }
      ]
    })
  }
      const conv = {
        "type": "template",
        "altText": "在不支援顯示樣板的地方顯示的文字",
        "template": {
          "type": "carousel",
          "columns": limitcontent
        }
      }

      message.push(conv);
    }

    
    if(ev0=='info'){
      let temtext=casetest[ev1]
      if (typeof temtext=='undefined'){
        temtext='沒東西'
      }
      const msg = {
        type: 'template',
        altText: 'Message with button',
        template: {
          type: 'buttons',
          title:ev1,
          text: temtext,
          actions: [
            {
              type: 'postback',
              label: '進行資料盤點',
              text: '進行資料盤點',
              data:'moreinfo:'+ev1
            },
            {
              type: 'uri',
              label: '申請試用',
              uri: FORMURL
            }
          ]
        }
      };
      
      message.push(msg);
    }
    /*
    if(ev0=='video'){
      const ans = ev1
      let msg=''
      if(ans=='Data Refine'){
        const firstmsg = VIDEOIMG[ans];
        message.push(firstmsg);
        msg = {
          "type": "video",
          "originalContentUrl": "https://www.youtube.com/watch?v=Ps0YkwUwwfo",
          "previewImageUrl": URLPREFIX+"video3.png"
        }
      }else if(ans=='資料標註'){
        const firstmsg = VIDEOIMG[ans];
        message.push(firstmsg);
        msg = {
          "type": "video",
          "originalContentUrl": URLPREFIX+"test.mp4",
          "previewImageUrl": URLPREFIX+"video2.png"
        }
      }else if(ans=='時序預測'){
        const firstmsg = VIDEOIMG[ans];;
        message.push(firstmsg);
        msg = {
          "type": "video",
          "originalContentUrl": "https://www.youtube.com/watch?v=Ps0YkwUwwfo",
          "previewImageUrl": URLPREFIX+"video1.png"
        }
      }else if(ans=='影像分類'){
        const firstmsg = VIDEOIMG[ans];;
        message.push(firstmsg);
        msg = {
          "type": "video",
          "originalContentUrl": "https://www.youtube.com/watch?v=Ps0YkwUwwfo",
          "previewImageUrl": URLPREFIX+"video4.png"
        }
      }

      message.push(msg);
    }
    */
    if(ev0=='moreinfo'){
      const msg = {
        type: 'template',
        altText: 'Message with button',
        template: {
          type: 'buttons',
          text: '有以下欄位即可進行FAST AI 一站式系統的智慧分析\n日期\n原物料名稱\n原物料價格\n進貨量\n生產量\n成本\n'+TODO,
          actions: [
            {
              type: 'uri',
              label: '申請試用',
              uri: FORMURL
            }
          ]
        }
      };

      message.push(msg);
    }
    if(ev0=='QQQQ'){
      const ans = ev1
      let msg=''
      if(ans=='系統相關問題'){
        msg = QQQQ[ans]
      }else if(ans=='硬體需求'){
        msg = QQQQ[ans]
      }else if(ans=='資料準備需求'){
        msg = QQQQ[ans]
      }else if(ans=='常見問答'){
        msg = QQQQ[ans]
      }else if(ans=='應用案例'){
        msg = allbigfunc
      }
      message.push(msg);
    }
    
    if (content.length>0 && content.length<=n){
      content = new Set(content)
      content=Array.from(content)
      content.sort(() => Math.random() - 0.5);
      const conv = {
        "type": "template",
        "altText": "在不支援顯示樣板的地方顯示的文字",
        "template": {
          "type": "carousel",
          "columns": content
        }
      }
      message.push(conv);
    }else if(content.length>n){
      content = new Set(content)
      content=Array.from(content)
      content.sort(() => Math.random() - 0.5);
      let limitcontent=[]
      for(let i=0;i<n-1;i++){
        limitcontent.push(content.pop())
    }
    limitcontent.push({
      "text": " ",
      "thumbnailImageUrl": URLPREFIX+"more.png",
      "actions": [
        {
          "type": "postback",
          "label": "顯示更多",
          "data": "more:"+content.map(item => item.text),
          "text":'顯示更多'
        }
      ]
    })
    const conv = {
      "type": "template",
      "altText": "在不支援顯示樣板的地方顯示的文字",
      "template": {
        "type": "carousel",
        "columns": limitcontent
      }
    }
    message.push(conv);
    }

  }

  if(message.length>0){
    const result={
      replyToken:event.replyToken,
      messages:message
    };
    replyMessage(result)
  }

}
}

export {handleEvents, handlefollow};
