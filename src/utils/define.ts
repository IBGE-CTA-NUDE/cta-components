export function define(
    name: string,
    constructor: CustomElementConstructor,
    options?: ElementDefinitionOptions,
): void {
  if (typeof window !== 'undefined') {
    try {
      window.customElements.define(name, constructor, options);
    } catch (error) {
      if (error instanceof DOMException) {
        const errorGeneralMessage = `Failed to execute 'define' on 'CustomElementRegistry'`;
        const specificMessagePart = `has already been used with this registry`;

        if (
          error.message.includes(errorGeneralMessage) &&
          error.message.includes(specificMessagePart)
        ) {
          return;
        }
      }

      throw error;
    }
  }
}
