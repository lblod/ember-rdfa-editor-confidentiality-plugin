import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ConfidentialitySidebarWidget extends Component {
  @tracked expanded = false;

  @tracked confidentialMarkGroups = [];

  constructor(parent, args) {
    super(parent, args);
    this.args.controller.addTransactionStepListener(this.update.bind(this));
    // const marks = this.controller.getMarksFor('confidentiality-mark');
    // this.confidentialMarks = marks;
  }

  get controller() {
    return this.args.controller;
  }

  modifiesContent(steps) {
    return steps.some((step) => step.type === 'operation-step');
  }

  update(transaction) {
    const marks = transaction
      .getMarksManager()
      .getVisualMarkGroupsByMarkName('confidentiality-mark');
    this.confidentialMarkGroups = marks;
  }

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
