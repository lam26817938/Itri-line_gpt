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
import { cases, industry, title} from './lib.js';

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
//  || docHandler(context)
//  || drawHandler(context)
  || forgetHandler(context)
 // || enquireHandler(context)
 // || reportHandler(context)
  || retryHandler(context)
 // || searchHandler(context)
 // || versionHandler(context)
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

      let more='我有一個通關密碼 對方說可愛 我會回漂亮'

      more=more.replaceAll('　', ' ').replace(config.BOT_NAME, '').trim();
      const prompt = getPrompt(userId);
      prompt.write('assistant');
      prompt.patch(more);
      setPrompt(userId, prompt);
      
      updateHistory(userId, (history) => history.write('工研院', addMark(more)));
    
      
      const temp = {
        type: 'text',
        text: '歡迎加入FAST AI一站式系統的好友~現在就讓我們一起來體驗FAST AI吧!​在開始之前想先了解您的背景，請問您的工作產業類別是?',
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

      content = content.concat(cases['客戶流失率預測'],cases['備料預測'],cases['銷量預測'],cases['交貨量預測'],cases['商品喜好度推薦系統'],cases['訂定售價'],cases['離職率預測']
      ,cases['交通熱區預測'],cases['人潮預測'],cases['建築物料耗損預測'],cases['疾病風險預測'])  

    } if(event.postback.data.split(':')[1]=='研發工程師'|| event.postback.data.split(':')[1]== '產線/物流工程師'){
      
      content = content.concat(cases['疾病風險預測'],cases['病變影像判讀'],cases['材料辨識'])
      
    }
     if(event.postback.data.split(':')[1]=='研發工程師'|| event.postback.data.split(':')[1]== '產線/物流工程師'){

      content = content.concat(cases['客戶流失率預測'],cases['交貨量預測'],cases['商品喜好度推薦系統'],cases['訂定售價'],cases['人潮預測'],cases['建築物料耗損預測'],cases['疾病風險預測'])
      
    }
     if(event.postback.data.split(':')[1]=='研發工程師'|| event.postback.data.split(':')[1]=='產線/物流工程師'){
      
      content = content.concat(cases['交通熱區預測'],cases['建築物料耗損預測'],cases['疾病風險預測'],cases['病變影像判讀'],cases['材料辨識'],cases['瑕疵分類'])
      
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
      const msg = {
        type: 'template',
        altText: 'Message with button',
        template: {
          type: 'buttons',
          title:event.postback.data.split(':')[1],
          text:'糖尿病患者心血管疾病1年內的風險預測：',
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
