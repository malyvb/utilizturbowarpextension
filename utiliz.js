// Yes i did this from the turbowarp documentation and tbh cant bother to delete the comments
// We use class syntax to define our extension object
// This isn't actually necessary, but it tends to look the best

class croatiautiliz {
  /**
   * Scratch will call this method *once* when the extension loads.
   * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
   */
  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // It should never change!
      // If you choose to make an actual extension, please change this to something else.
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'croatiautiliz',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'Utiliz',

      blocks: [
        {
          // `opcode` is the internal ID of the block
          // It should never change!
          // It corresponds to the class method with the same name.
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pi'
        }
      ]
    };
  }

  /**
   * Corresponds to `opcode: 'hello'` above
   */
  pi() {
    // You can just return a value: any string, boolean, or number will work.
    // If you have to perform an asynchronous action like a request, just return a Promise.
    // The block will wait until the Promise resolves and return the resolved value.
    return '3.141592653589793238';
  }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new croatiautiliz());
