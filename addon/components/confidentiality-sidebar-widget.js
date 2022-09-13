import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ConfidentialitySidebarWidget extends Component {
  @tracked expanded = false;

  @tracked confidentialMarks = [];

  constructor(parent, args) {
    super(parent, args);
    this.args.controller.addTransactionStepListener(this.update.bind(this));
    const marks = this.controller.getMarksFor('confidentiality-mark');
    this.confidentialMarks = marks;
  }

  get controller() {
    return this.args.controller;
  }

  modifiesContent(steps) {
    return steps.some((step) => step.type === 'operation-step');
  }

  update(transaction) {
    const marks = transaction.workingCopy.marksRegistry.getMarksFor(
      'confidentiality-mark'
    );
    console.log(marks);
    this.confidentialMarks = marks;
  }

  @action
  toggle() {
    this.expanded = !this.expanded;
  }
}
