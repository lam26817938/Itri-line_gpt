import { t } from '../../locales/index.js';
import { fetchVersion, getVersion } from '../../utils/index.js';
import { COMMAND_SYS_VERSION, GENERAL_COMMANDS } from '../commands/index.js';
import Context from '../context.js';
import { updateHistory } from '../history/index.js';
import {FORMURL} from '../lib.js';

/**
 * @param {Context} context
 * @returns {boolean}
 */
const check = (context) => context.hasCommand(COMMAND_SYS_VERSION);

/**
 * @param {Context} context
 * @returns {Promise<Context>}
 */
const exec = (context) => check(context) && (
  async () => {
    /*
    updateHistory(context.id, (history) => history.erase());
    const current = getVersion();
    const latest = await fetchVersion();
    const isLatest = current === latest;
    const text = t('__COMMAND_SYS_VERSION_REPLY')(current, isLatest);
    context.pushText(text, GENERAL_COMMANDS);
    if (!isLatest) context.pushText(t('__MESSAGE_NEW_VERSION_AVAILABLE')(latest));
    */
    const msg = {
      type: 'template',
      altText: 'Message with button',
      template: {
        type: 'buttons',
        text: '您好!​如您對於FAST AI有其他問題，請點選『常見問答』。​若有想要進一步申請試用，請按『申請試用』，並請按照回覆格式留下資料，我們將會盡速與您聯絡。',
        actions: [
          {
            type: 'postback',
            label: '常見問答',
            text: '常見問答',
            data:'QQQQ:常見問答'
          },
          {
            type: 'uri',
            label: '申請試用',
            uri: FORMURL
          }
        ]
      }
    };
    context.push(msg);
    return context;
  }
)();

export default exec;
