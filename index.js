import { Editor } from './Editor.js'
import { CommandManager } from './CommandManager.js'
import { BoldCommand, ItalicizeCommand } from './EditorCommand.js'

export function init() {
  const undo = document.getElementById('undo')
  const bold = document.getElementById('bold')
  const italic = document.getElementById('italic')
  const textarea = document.getElementById('textarea')

  const editor = new Editor(textarea)
  const commandManager = new CommandManager()

  bold.addEventListener('mousedown', () => {
    commandManager.execute(new BoldCommand(editor))
  })

  italic.addEventListener('mousedown', () => {
    commandManager.execute(new ItalicizeCommand(editor))
  })

  undo.addEventListener('click', () => {
    commandManager.undo()
  })
}
