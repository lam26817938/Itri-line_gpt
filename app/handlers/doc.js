import { COMMAND_SYS_DOC, GENERAL_COMMANDS } from '../commands/index.js';
import Context from '../context.js';
import { updateHistory } from '../history/index.js';

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
      type: 'template',
      altText: 'Message with button',
      template: {
        type: 'buttons',
        title: 'Demo影片觀看',
        text: 'FAST AI目前有四種功能提供DEMO觀看，請直接點擊您想要觀看的功能。',
        actions: [
          {
            type: 'postback',
            label: 'Data Refine',
            text: 'Data Refine',
            data:'video:Data Refine'
          },
          {
            type: 'postback',
            label: '資料標註',
            text: '資料標註',
            data:'video:資料標註'
          },
          {
            type: 'postback',
            label: '時序預測',
            text: '時序預測',
            data:'video:時序預測'
          },
          {
            type: 'postback',
            label: '影像分類',
            text: '影像分類',
            data:'video:影像分類'
          },
        ]
      }
    };
    context.push(msg);
    
    return context;
  }
)();

export default exec;
