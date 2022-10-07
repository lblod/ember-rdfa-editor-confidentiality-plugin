import confidentialityMarkSpec from './marks/confidentiality-mark';

export default class ConfidentialityPlugin {
  get name() {
    return 'confidentiality-plugin';
  }

  initialize(transaction, controller) {
    transaction.registerWidget(
      {
        componentName: 'confidentiality-toolbar-widget',
        desiredLocation: 'toolbarMiddle',
        identifier: 'confidentiality-plugin/toolbar-button',
      },
      controller
    );
    transaction.registerWidget(
      {
        componentName: 'confidentiality-sidebar-widget',
        desiredLocation: 'sidebar',
        identifier: 'confidentiality-plugin/sidebar-widget',
      },
      controller
    );
    transaction.registerMark(confidentialityMarkSpec);
  }
}
