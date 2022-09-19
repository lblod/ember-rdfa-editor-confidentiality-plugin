ember-rdfa-editor-confidentiality-plugin
==============================================================================

Plugin which provides functionality to mark certain portions of the document as sensitive material.
Note: this plugin uses the new plugin architecture. It needs to be passed to the editor for inititialization.
```hbs
<Rdfa::RdfaEditor
      @rdfaEditorInit={{this.rdfaEditorInit}}
      @editorOptions={{this.editorOptions}}
      @toolbarOptions={{this.toolbarOptions}}
      @plugins={{array 'confidentiality-plugin'}
    />
```

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.28 or above
* Ember CLI v3.28 or above
* Node.js v16 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-rdfa-editor-confidentiality-plugin
```


Usage
------------------------------------------------------------------------------

When selecting a portion of the document, an 'Add redaction' button will show up in the toolbar.
This button adds a redaction mark to the selected text. The different portions of text which are redacted can be managed in the editor sidebar.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
