export class CommandManager {
  #commands = []

  execute(command) {
    command.execute()
    this.#commands.push(command)
  }

  undo() {
    if (this.#commands.length <= 0) return

    const command = this.#commands.pop()
    command.undo()
  }
}
