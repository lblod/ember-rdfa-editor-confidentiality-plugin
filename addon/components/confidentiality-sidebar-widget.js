import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ConfidentialitySidebarWidget extends Component {
  @tracked expanded = false;

  @tracked confidentialMarkGroups = [];

  constructor(parent, args) {
    super(parent, args);
    this.controller.addTransactionStepListener(this.update);
  }

  willDestroy() {
    this.controller.removeTransactionStepListener(this.update);
    super.willDestroy();
  }

  get controller() {
    return this.args.controller;
  }

  modifiesContent(steps) {
    return steps.some((step) => step.type === 'operation-step');
  }

  update = (transaction) => {
    const marks = transaction
      .getMarksManager()
      .getVisualMarkGroupsByMarkName('confidentiality-mark');
    this.confidentialMarkGroups = marks;
  };

  @action
  removeConfidentialMarkGroup(markGroup) {
    this.controller.perform((tr) => {
      markGroup.forEach(({ node, mark }) => {
        tr.commands.removeMarkFromNode({ node, mark });
      });
    });
  }

  @action
  toggle() {
    this.expanded = !this.expanded;
  }
}
