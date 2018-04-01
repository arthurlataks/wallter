import { Alert } from 'react-native';
import config from '../config';

class Debugger {
    /**
     * Is developer mode on?
     */
    async isAllowed() {
        return config.isDeveloperMode;
    }

    /**
     * Centralized logging function
     * While this function is asynchronous, it can be called without await
     *
     * @param caller
     * @param data
     * @returns {Promise.<void>}
     */
    async log(caller, ...data) {
        let callerFn = this.log.caller ? this.log.caller.name : null;
        callerFn = callerFn === caller ? 'constructor$' : callerFn;

        if (caller) {
            caller = caller.constructor.name;
            caller = callerFn ? `${caller}\n${callerFn.replace(/(.*)\$$/, '$1()')}` : caller;
        }

        const items = this.formatObjectsForLog(data);

        if (await this.isAllowed()) {
            console.info(`${caller} :: `, ...items); // eslint-disable-line

            Alert.alert(
                caller,
                items.map((item) => JSON.stringify(item)).join('\n'),
                [{ text: 'Ok' }]
            );
        } else {
            console.info(`${caller} :: `, ...items); // eslint-disable-line
        }
    }

    /**
     * Formats error to use
     *
     * @param {Array} data All the items that needs to be logged
     */
    formatObjectsForLog(data) {
        const items = [];

        data.forEach((item) => {
            if (item instanceof Error) {
                if (item.messages && item.messages.length) {
                    return items.push(`Error: ${item.message}; Details: [${item.messages.map((message) => (message.detail ? message.detail : '')).join('; ')}]`);
                }

                return items.push(item.message);
            }

            return items.push(item);
        });

        return items;
    }
}

export default new Debugger();
