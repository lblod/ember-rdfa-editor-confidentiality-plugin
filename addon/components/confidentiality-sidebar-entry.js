import Component from '@glimmer/component';

export default class ConfidentialitySidebarEntry extends Component {
  get content() {
    let text = '';
    this.args.entry.forEach(({ node }) => {
      text += node.content;
    });
    return text;
  }
}
