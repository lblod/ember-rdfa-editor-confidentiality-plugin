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
      },
      children: [
        // {
        //   tag: 'svg',
        //   attributes: {
        //     role: 'img',
        //     class: 'au-c-icon au-c-icon--not-visible',
        //   },
        //   children: [
        //     {
        //       tag: 'use',
        //       attributes: {
        //         'xlink:href':
        //           '/@appuniversum/ember-appuniversum/appuniversum-symbolset.svg#not-visible',
        //       },
        //     },
        //   ],
        // },
        0,
      ],
    };
  },
  //   <svg role="img" class="au-c-icon au-c-icon--{{@icon}} {{this.alignment}} {{this.size}}" aria-hidden="{{if @ariaHidden "false" "true"}}" ...attributes>
  //   <use xlink:href="{{this.iconPrefix}}@appuniversum/ember-appuniversum/appuniversum-symbolset.svg#{{@icon}}"></use>
  // </svg>
};

export default confidentialityMarkSpec;
