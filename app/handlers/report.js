import { COMMAND_SYS_REPORT, GENERAL_COMMANDS } from '../commands/index.js';
import Context from '../context.js';
import { updateHistory } from '../history/index.js';
import { getPrompt, setPrompt } from '../prompt/index.js';
import config from '../../config/index.js';
import { ROLE_AI, ROLE_HUMAN } from '../../services/openai.js';
import { t } from '../../locales/index.js';
import { generateCompletion } from '../../utils/index.js';

/**
 * @param {Context} context
 * @returns {boolean}
 */
const check = (context) => context.hasCommand(COMMAND_SYS_REPORT);

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const exec = (context) => check(context) && (
  async () => {
    /*
    updateHistory(context.id, (history) => history.erase());
    context.pushText('https://github.com/memochou1993/gpt-ai-assistant/issues', GENERAL_COMMANDS);
    */
   
    const prompt = getPrompt(context.userId);
    prompt.write(ROLE_HUMAN, `${t('__COMPLETION_DEFAULT_AI_TONE')(config.BOT_TONE)}${context.trimmedText}`).write(ROLE_AI);
    prompt.patch('下一次回答限制60個字以內')
    try {
      const { text, isFinishReasonStop } = await generateCompletion({ prompt });
      prompt.erase()
      prompt.write(ROLE_HUMAN, `${t('__COMPLETION_DEFAULT_AI_TONE')(config.BOT_TONE)}${context.trimmedText}`).write(ROLE_AI);
      prompt.patch(text);
      setPrompt(context.userId, prompt);
      updateHistory(context.id, (history) => history.write(config.BOT_NAME, text));
      const msg = {
        type: 'template',
        altText: 'Message with button',
        template: {
          type: 'buttons',
          text: text,
          actions: [
            {
              type: 'postback',
              label: '顯示所有方案',
              text: '顯示所有方案',
              data:'info:顯示所有方案'
            },
            {
              type: 'postback',
              label: '功能說明',
              text: '功能說明',
              data:'QQQQ:功能說明'
            },
          ]
        }
      };
      context.push(msg);
    } catch (err) {
      context.pushError(err);
    }
    
    return context;
  }
)();

export default exec;
