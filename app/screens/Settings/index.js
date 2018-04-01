import React from 'react';
import { Alert, ScrollView } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import DeviceInfo from 'react-native-device-info';
import SettingsManager from '../../utils/settings-manager';

import DefaultComponent from '../../components/default-component';
import Debugger from '../../utils/debugger';

class SettingsScreen extends DefaultComponent {
    constructor(props) {
        super(props);

        this.settingsManager = new SettingsManager();
    }

    getAppVersion() {
        return DeviceInfo.getVersion();
    }

    getBuildNumber() {
        return DeviceInfo.getBuildNumber();
    }

    // MARK - Render

    renderSections(sections) {
        return sections.map((section) => (
            <Section
                header={ section.label }
                key={ section.label }
                sectionPaddingTop={ 20 }
                sectionPaddingBottom={ 20 }
                sectionTintColor="white"
            >
                { this.renderSectionItems(section.items) }
            </Section>
        ));
    }

    renderSectionItems(items) {
        return items.map((setting) => (
            <Cell
                key={ setting.key }
                cellStyle="RightDetail"
                title={ setting.label }
                detail={ setting.detailHandler ? this[setting.detailHandler](setting) : this.getSettingValue(setting.key, setting.default) }
                accessory={ setting.accessory }
                titleTextStyle={ setting.labelStyle }
                onPress={ () => (setting.action ? this[setting.action](setting) : false) }
                isDisabled={ setting.isDisabledHandler ? this[setting.isDisabledHandler](setting) : false }
            />
        ));
    }

    render() {
        return (
            <ScrollView>
                <TableView>
                    { this.renderSections(this.settingsManager.config) }
                </TableView>
            </ScrollView>
        );
    }
}

export default SettingsScreen;
