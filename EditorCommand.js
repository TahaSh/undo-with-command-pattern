class EditorCommand {
  _editor
  #previousContent
  #previousSelection
  constructor(editor) {
    this._editor = editor
    this.#previousContent = this._editor.content
    this.#previousSelection = this._editor.selectionRange
  }

  execute() {
    throw new Error('execute is an abstract method')
  }

  undo() {
    this._editor.content = this.#previousContent
    this._editor.select(this.#previousSelection)
  }
}

export class BoldCommand extends EditorCommand {
  execute() {
    this._editor.boldSelection()
  }
}

export class ItalicizeCommand extends EditorCommand {
  execute() {
    this._editor.italicizeSelection()
  }
}
