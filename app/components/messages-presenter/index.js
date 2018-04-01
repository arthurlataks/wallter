import React from 'react';
import DropdownAlert from 'react-native-dropdownalert';

import DefaultComponent from '../default-component';
import MessagesManager from '../../utils/messages-manager';

class MessagesPresenter extends DefaultComponent {

    componentWillMount() {
        this.previousPresenter = MessagesManager.getPresenter();
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        MessagesManager.setPresenter(this.previousPresenter);
    }

    render() {
        return (
            <DropdownAlert
                ref={ (ref) => ref ? MessagesManager.setPresenter(ref) : false }
                messageNumOfLines={ 5 }
            />
        );
    }
}

export default MessagesPresenter;
