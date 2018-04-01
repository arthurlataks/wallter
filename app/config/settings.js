import config from './';

/**
 * Available keys for settings:
 *
 * key: 'gasPrice'                         Key for the settings
 * label: 'Gas Price'                      Setting label that will be displayed om left side
 * default: config.gasPrice                Default value for the setting to use as a fallback in case value was not set
 * action: 'editSetting',                  Function name that will be triggered on presenting component on setting press
 * accessory: 'DisclosureIndicator'        Accessory that will be shown on right side of the setting
 * explain: 'Text here',                   On setting edit screen will be presented as an explanation for what is this setting for
 * type: 'numeric',                        Keyboard type for input
 * placeholder: '4000000000'               Placeholder on setting edit screen
 * isDisabledHandler: 'walletNotExists'    Function name that will be triggered on presenting component to determine if setting is disabled
 * detailHandler: 'getBuildNumber'         Custom action to get settings detail (displayed on right side of setting)
 * validations: []                         Array of keys for validations, currently supported 'integer' and 'required'
 */
export default [
    {
        label: 'App Info',
        items: [
            {
                key: 'app_version',
                label: 'App Version',
                detailHandler: 'getAppVersion'
            },
            {
                key: 'app_buildNumber',
                label: 'Build Number',
                detailHandler: 'getBuildNumber'
            }
        ]
    }
];
