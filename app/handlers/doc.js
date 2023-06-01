import { COMMAND_SYS_DOC, GENERAL_COMMANDS } from '../commands/index.js';
import Context from '../context.js';
import { updateHistory } from '../history/index.js';
import { cases, industry, title, casetest, URLPREFIX, GPTFOOD, QQQQ, VIDEOIMG,FORMURL, TODO} from '../lib.js';

/**
 * @param {Context} context
 * @returns {boolean}
 */
const check = (context) => context.hasCommand(COMMAND_SYS_DOC);

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const exec = (context) => check(context) && (
  async () => {
  /*  updateHistory(context.id, (history) => history.erase());
    context.pushText('https://memochou1993.github.io/gpt-ai-assistant-docs/', GENERAL_COMMANDS);
    */
    const msg = {
      "type": "template",
      "altText": "Video Carousel",
      "template": {
        "type": "carousel",
        "columns": [
          {
            "thumbnailImageUrl": URLPREFIX+"video4.png",
            "title": "影像分類",
            "text": TODO,
            "actions": [
              {
                "type": 'postback',
                "label": '推薦方案',
                "text": '推薦方案',
                "data":'VVV:影像分類'
              },
              {
                "type": "uri",
                "label": "影片觀看",
                "uri": URLPREFIX+"test.mp4"
              }
            ]
          },
          {
            "thumbnailImageUrl": URLPREFIX+"video1.png",
            "title": "時序預測",
            "text": TODO,
            "actions": [
              {
                "type": 'postback',
                "label": '推薦方案',
                "text": '推薦方案',
                "data":'VVV:時序預測'
              },
              {
                "type": "uri",
                "label": "影片觀看",
                "uri": "https://example.com/video2.mp4"
              }
            ]
          },
          {
            "thumbnailImageUrl": URLPREFIX+"video2.png",
            "title": "資料標註",
            "text": TODO,
            "actions": [
              {
                "type": 'postback',
                "label": '推薦方案',
                "text": '推薦方案',
                "data":'VVV:資料標註'
              },
              {
                "type": "uri",
                "label": "影片觀看",
                "uri": "https://example.com/video2.mp4"
              }
            ]
          },
          {
            "thumbnailImageUrl": URLPREFIX+"video3.png",
            "title": "Data Refine",
            "text": TODO,
            "actions": [
              {
                "type": 'postback',
                "label": '推薦方案',
                "text": '推薦方案',
                "data":'VVV:Data Refine'
              },
              {
                "type": "uri",
                "label": "影片觀看",
                "uri": "https://example.com/video2.mp4"
              }
            ]
          }
        ]
      }
    }
    context.push(msg);
    
    return context;
  }
)();

export default exec;
