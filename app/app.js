import { replyMessage } from '../utils/index.js';
import {
  activateHandler,
  commandHandler,
  continueHandler,
  deactivateHandler,
  deployHandler,
  docHandler,
  drawHandler,
  forgetHandler,
  enquireHandler,
  reportHandler,
  retryHandler,
  searchHandler,
  talkHandler,
  versionHandler,
} from './handlers/index.js';
import Context from './context.js';
import {
  ImageMessage, Message, TemplateMessage, TextMessage,
} from './messages/index.js';
import {
  addMark,
  convertText,
  fetchAudio,
  fetchGroup,
  fetchUser,
  generateTranscription,
} from '../utils/index.js';
import { updateHistory, getHistory, removeHistory } from './history/index.js';
import config from '../config/index.js';
import { Bot, Event, Source } from './models/index.js';
import { getPrompt, setPrompt, removePrompt } from './prompt/index.js';
import { cases, industry, title, casetest, URLPREFIX, GPTFOOD} from './lib.js';

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const handleContext = async (context) => (
//  activateHandler(context)
//  || commandHandler(context)
   continueHandler(context)
  || deactivateHandler(context)
//  || deployHandler(context)
  || docHandler(context)
//  || drawHandler(context)
  || forgetHandler(context)
 // || enquireHandler(context)
 // || reportHandler(context)
  || retryHandler(context)
 // || searchHandler(context)
  || versionHandler(context)
  || talkHandler(context)
  || context
);





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
    if (event.type === 'follow') {

      const userId=event.source.userId
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
        text: '歡迎加入FAST AI一站式系統的好友~現在就讓我們一起來體驗FAST AI吧!​在開始之前想先了解您的背景，請問您的工作產業類別是? 若底下無您的類別 請自行輸入',
        quickReply: {
          items: industry
        }
      };

      message.push(temp);
      
    }else if(event.type === 'unfollow'){
      removePrompt(event.source.userId);
      removeHistory(event.source.userId);
    }
  else if(event.type === 'postback'){
    let temp
    if (event.postback.data.split(':')[0]=='industry'){ 
        temp = {
        type: 'text',
        text: '好的! 那您的職務是?​我們即將提供您配對到最適合的方案囉!',
        quickReply: {
          items: title
        }
      };

      message.push(temp);

    }
    let content=[]
     if(event.postback.data.split(':')[1]=='客戶服務'|| event.postback.data.split(':')[1]=='業務/行銷人員' || event.postback.data.split(':')[1]=='財會/行政人員' || event.postback.data.split(':')[1]=='產線/物流工程師'){

      content = content.concat(cases['AOI瑕疵分類'],cases['備料預測'],cases['銷量預測'],cases['交貨量預測'],cases['推薦系統'],cases['售價訂定'],cases['員工離職預測']
      ,cases['載客熱點預測'],cases['景點人數預測'],cases['疾病風險預測'])  

    } if(event.postback.data.split(':')[1]=='研發工程師'|| event.postback.data.split(':')[1]== '產線/物流工程師'){
      
      content = content.concat(cases['疾病風險預測'],cases['循環材料辨識'])
      
    }
     if(event.postback.data.split(':')[1]=='研發工程師'|| event.postback.data.split(':')[1]== '產線/物流工程師'){

      content = content.concat(cases['交貨量預測'],cases['推薦系統'],cases['售價訂定'],cases['景點人數預測'],cases['疾病風險預測'])
      
    }
     if(event.postback.data.split(':')[1]=='研發工程師'|| event.postback.data.split(':')[1]=='產線/物流工程師'){
      
      content = content.concat(cases['載客熱點預測'],cases['疾病風險預測'],cases['循環材料辨識'],cases['AOI瑕疵分類'])
      
    }
    const n=4
    if (content.length>0 && content.length<=n){
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

    if(event.postback.data.split(':')[0]=='more'){
      let content = event.postback.data.split(':')[1].split(",")
      let limitcontent = []
      console.log(content)

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

    
    if(event.postback.data.split(':')[0]=='info'){
      let temtext=casetest[event.postback.data.split(':')[1]]
      if (typeof temtext=='undefined'){
        temtext='沒東西'
      }
      const msg = {
        type: 'template',
        altText: 'Message with button',
        template: {
          type: 'buttons',
          title:event.postback.data.split(':')[1],
          text: temtext,
          actions: [
            {
              type: 'postback',
              label: '進行資料盤點',
              text: '進行資料盤點',
              data:'moreinfo:'+event.postback.data.split(':')[1]
            },
            {
              type: 'uri',
              label: '申請試用',
              uri: 'https://www.itri.org.tw/'
            }
          ]
        }
      };
      
      message.push(msg);
    }
    if(event.postback.data.split(':')[0]=='video'){
      let msg=''

      if(event.postback.data.split(':')[1]=='Data Refine'){
        const firstmsg = {
          type: 'template',
          altText: 'Message with button',
          template: {
            type: 'buttons',
            thumbnailImageUrl: URLPREFIX+"function/dataRefine.jpg",
            text: '您好!​關於FAST AIData Refine功能說明如影片，謝謝!',
            actions: [
              {
                type: 'postback',
                label: '推薦方案',
                text: '推薦方案',
                data:'info:Data Refine'
              },
              {
                type: 'uri',
                label: '申請試用',
                uri: 'https://www.itri.org.tw/'
              }
            ]
          }
        };
        message.push(firstmsg);
        msg = {
          "type": "video",
          "originalContentUrl": "https://www.youtube.com/watch?v=Ps0YkwUwwfo",
          "previewImageUrl": URLPREFIX+"video3.png"
        }
      }else if(event.postback.data.split(':')[1]=='資料標註'){
        const firstmsg = {
          type: 'template',
          altText: 'Message with button',
          template: {
            type: 'buttons',
            thumbnailImageUrl: URLPREFIX+"function/annotation.jpg",
            text: '您好!​關於FAST AI資料標註功能說明如影片，謝謝!',
            actions: [
              {
                type: 'postback',
                label: '推薦方案',
                text: '推薦方案',
                data:'info:資料標註'
              },
              {
                type: 'uri',
                label: '申請試用',
                uri: 'https://www.itri.org.tw/'
              }
            ]
          }
        };
        message.push(firstmsg);
        msg = {
          "type": "video",
          "originalContentUrl": URLPREFIX+"test.mp4",
          "previewImageUrl": URLPREFIX+"video2.png"
        }
      }else if(event.postback.data.split(':')[1]=='時序預測'){
        const firstmsg = {
          type: 'template',
          altText: 'Message with button',
          template: {
            type: 'buttons',
            thumbnailImageUrl: URLPREFIX+"function/timeSeries.jpg",
            text: '您好!​關於FAST AI時序預測功能說明如影片，謝謝!',
            actions: [
              {
                type: 'postback',
                label: '推薦方案',
                text: '推薦方案',
                data:'info:時序預測'
              },
              {
                type: 'uri',
                label: '申請試用',
                uri: 'https://www.itri.org.tw/'
              }
            ]
          }
        };
        message.push(firstmsg);
        msg = {
          "type": "video",
          "originalContentUrl": "https://www.youtube.com/watch?v=Ps0YkwUwwfo",
          "previewImageUrl": URLPREFIX+"video4.png"
        }
      }else if(event.postback.data.split(':')[1]=='影像分類'){
        const firstmsg = {
          type: 'template',
          altText: 'Message with button',
          template: {
            type: 'buttons',
            thumbnailImageUrl: URLPREFIX+"function/imageClassfication.jpg",
            text: '您好!​關於FAST AI影像分類功能說明如影片，謝謝!',
            actions: [
              {
                type: 'postback',
                label: '推薦方案',
                text: '推薦方案',
                data:'info:影像分類'
              },
              {
                type: 'uri',
                label: '申請試用',
                uri: 'https://www.itri.org.tw/'
              }
            ]
          }
        };
        message.push(firstmsg);
        msg = {
          "type": "video",
          "originalContentUrl": "https://www.youtube.com/watch?v=Ps0YkwUwwfo",
          "previewImageUrl": URLPREFIX+"video1.png"
        }
      }

      message.push(msg);
    }
    if(event.postback.data.split(':')[0]=='moreinfo'){
      const msg = {
        type: 'template',
        altText: 'Message with button',
        template: {
          type: 'buttons',
          text: '有以下欄位即可進行FAST AI 一站式系統的智慧分析\n日期\n原物料名稱\n原物料價格\n進貨量\n生產量\n成本',
          actions: [
            {
              type: 'uri',
              label: '申請試用',
              uri: 'https://www.itri.org.tw/'
            }
          ]
        }
      };

      message.push(msg);
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
