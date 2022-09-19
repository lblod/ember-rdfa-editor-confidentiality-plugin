import confidentialityMarkSpec from './marks/confidentiality-mark';

export default class ConfidentialityPlugin {
  controller;

  get name() {
    return 'confidentiality-plugin';
  }

  initialize(controller) {
    this.controller = controller;
    controller.registerWidget({
      componentName: 'confidentiality-toolbar-widget',
      desiredLocation: 'toolbarMiddle',
      identifier: 'confidentiality-plugin/toolbar-button',
    });
    controller.registerWidget({
      componentName: 'confidentiality-sidebar-widget',
      desiredLocation: 'sidebar',
      identifier: 'confidentiality-plugin/sidebar-widget',
    });
    controller.registerMark(confidentialityMarkSpec);
  }
}
