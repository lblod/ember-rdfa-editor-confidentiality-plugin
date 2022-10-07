import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ConfidentialityToolbarWidget extends Component {
  @tracked
  enabled = false;

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

  modifiesSelection(steps) {
    return steps.some(
      (step) => step.type === 'selection-step' || step.type === 'operation-step'
    );
  }

  update = (transaction, steps) => {
    const { currentSelection: selection } = transaction;
    if (this.modifiesSelection(steps)) {
      this.selectedText = selection.lastRange.getTextContent();
      this.enabled =
        !selection.isCollapsed && !selection.hasMark('confidentiality-mark');
    }
  };

  @action
  toggleMark() {
    this.controller.perform((tr) => {
      tr.commands.addMarkToSelection({
        markName: 'confidentiality-mark',
      });
    });
  }
}
