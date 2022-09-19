const confidentialityMarkSpec = {
  matchers: [
    {
      tag: 'span',
      attributeBuilder: (node) => {
        if (
          node.dataset &&
          Object.prototype.hasOwnProperty.call(node.dataset, 'confidential')
        ) {
          return {};
        }
      },
    },
  ],
  name: 'confidentiality-mark',
  priority: 100,
  renderSpec() {
    return {
      tag: 'span',
      attributes: {
        'data-confidential': true,
        class: 'au-c-pill small au-c-pill--link',
        property: 'ext:redacted',
        title: 'Geredacteerde tekst',
      },
      children: [
        {
          tag: 'del',
          children: [0],
        },
      ],
    };
  },
};

export default confidentialityMarkSpec;
