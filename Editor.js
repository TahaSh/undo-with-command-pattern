export class Editor {
  #textareaElement

  constructor(textareaElement) {
    this.#textareaElement = textareaElement
  }

  get content() {
    return this.#textareaElement.value
  }

  set content(value) {
    this.#textareaElement.value = value
  }

  get #selectedText() {
    return this.content.slice(
      this.selectionRange.start,
      this.selectionRange.end
    )
  }

  get selectionRange() {
    return {
      start: this.#textareaElement.selectionStart,
      end: this.#textareaElement.selectionEnd
    }
  }

  select(selectionRange) {
    this.#textareaElement.focus()
    this.#textareaElement.setSelectionRange(
      selectionRange.start,
      selectionRange.end
    )
  }

  get #hasSelection() {
    return this.selectionRange.start !== this.selectionRange.end
  }

  #wrapSelectionWith(wrapperStart, wrapperEnd) {
    if (!this.#hasSelection) return

    const previousSelection = {
      start: this.selectionRange.start + wrapperStart.length,
      end: this.selectionRange.end + wrapperStart.length
    }

    const textBeforeSelection = this.content.slice(0, this.selectionRange.start)
    const textAfterSelection = this.content.slice(this.selectionRange.end)
    const wrappedText = wrapperStart + this.#selectedText + wrapperEnd
    this.content = textBeforeSelection + wrappedText + textAfterSelection

    requestAnimationFrame(() => {
      this.select(previousSelection)
    })
  }

  boldSelection() {
    this.#wrapSelectionWith('<strong>', '</strong>')
  }

  italicizeSelection() {
    this.#wrapSelectionWith('<i>', '</i>')
  }
}
