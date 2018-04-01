import React, { Component } from 'react';
import { RefreshControl } from 'react-native';

import MessagesManager from '../../utils/messages-manager';
import Debugger from '../../utils/debugger';

class DefaultComponent extends Component {
    constructor(props) {
        super(props);

        this.mounted = false;

        // Debugger singleton to be accessible in all child components.
        this.debugger = Debugger;
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    /**
     * Checks if component is mounted before setting the state.
     *
     * @param {Object} state State to set
     * @callback callback?
     */
    setState(state, callback = null) {
        if (this.mounted) {
            return super.setState(state, callback);
        }

        return false;
    }

    /**
     * Present error to app user.
     *
     * @param {Error} error
     */
    presentError(error) {
        if (!(error instanceof Error)) {
            return this.debugger.log(this, 'Passed error is not instance of Error: ', error);
        }

        let errorString = '';

        if (error.messages) {
            const messages = [];
            error.messages.forEach((message) => (message.detail ? messages.push(message.detail) : false));

            if (messages.length === 1) {
                errorString = messages[0];
            } else {
                errorString = ` - ${messages.join('\n - ')}`;
            }
        }

        errorString = errorString.length ? errorString : error.message;
        MessagesManager.getPresenter().alertWithType('error', 'Error', errorString);

        return this;
    }
}

export default DefaultComponent;
