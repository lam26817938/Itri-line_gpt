import config from '../../config/index.js';
import { t } from '../../locales/index.js';
import { ROLE_AI, ROLE_HUMAN } from '../../services/openai.js';
import { generateCompletion } from '../../utils/index.js';
import { COMMAND_BOT_CONTINUE, COMMAND_BOT_TALK } from '../commands/index.js';
import Context from '../context.js';
import { updateHistory } from '../history/index.js';
import { getPrompt, setPrompt } from '../prompt/index.js';
import { FORMURL, OTHERTITLE} from '../lib.js';

/**
 * @param {Context} context
 * @returns {boolean}
 */
const check = (context) => (
  context.hasCommand(COMMAND_BOT_TALK)
  || context.hasBotName
  || context.source.bot.isActivated
);

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const exec = (context) => check(context) && (
  async () => {
    const prompt = getPrompt(context.userId);
    if(prompt.messages[prompt.messages.length - 1]['content'].includes('請回覆我"請問是以下業種中，是否有包含您的職業呢?若無，請直接輸入您的產業別。')){
      prompt.TOF=true
    }
    let finish=false
    prompt.write(ROLE_HUMAN, `${t('__COMPLETION_DEFAULT_AI_TONE')(config.BOT_TONE)}${context.trimmedText}`).write(ROLE_AI);
    try {
      prompt.write('assistant','若我無法回答或不知道 我會解釋說我是fast ai的小編 所以不能回答')
      const { text, isFinishReasonStop } = await generateCompletion({ prompt });
      prompt.erase()
      prompt.patch(text);
      setPrompt(context.userId, prompt);
      updateHistory(context.id, (history) => history.write(config.BOT_NAME, text));
      const actions = isFinishReasonStop ? [] : [COMMAND_BOT_CONTINUE];
      context.pushText(text, actions);
      finish=isFinishReasonStop
    } catch (err) {
      context.pushError(err);
    }
    if(prompt.TOF && finish){
      const msg = OTHERTITLE
      context.push(msg)
      prompt.TOF=false
    }

    return context;
  }
)();

export default exec;
