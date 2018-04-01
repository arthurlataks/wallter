class MessagesManager {
    static presenter;

    static setPresenter(presenter) {
        this.presenter = presenter;
    }

    static getPresenter() {
        return this.presenter;
    }
}

export default MessagesManager;
