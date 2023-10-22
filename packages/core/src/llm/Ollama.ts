import { LLM, ChatMessage, ChatResponse } from "./LLM";

export class Ollama implements LLM {
  private ollama: any; // Add a private property to hold the Ollama instance

  constructor(init?: Partial<Ollama>) {
    // Initialize Ollama instance
    this.ollama = new Ollama(init); // Initialize the Ollama instance
  }

  async runModelLocally(model: string, options: Record<string, any>): Promise<string> {
    // Logic for running the model locally
    const result = await this.ollama.runModelLocally(model, options); // Run the model locally using the Ollama instance and return the result
    return result;
  }

  // Removed duplicate 'complete' method
    T extends boolean | undefined = undefined,
    R = T extends true ? AsyncGenerator<string, void, unknown> : ChatResponse,
  >(
    prompt: string,
    parentEvent?: Event | undefined,
    streaming?: T,
  ): Promise<R> {
    // Removed duplicate 'complete' method

  async *streamEndpoint(model: string, prompt: string, options: Record<string, any>): AsyncGenerator<string, void, unknown> {
    // Logic for streaming the model's output
    yield "";
  }

  async chat<
    T extends boolean | undefined = undefined,
    R = T extends true ? AsyncGenerator<string, void, unknown> : ChatResponse,
  >(
    messages: ChatMessage[],
    parentEvent?: Event | undefined,
    streaming?: T,
  ): Promise<R> {
    // Logic for chat
    return this.ollama.chat(messages, parentEvent, streaming);
  }
    T extends boolean | undefined = undefined,
    R = T extends true ? AsyncGenerator<string, void, unknown> : ChatResponse,
  >(
    prompt: string,
    parentEvent?: Event | undefined,
    streaming?: T,
  ): Promise<R> {
    return this.chat([{ content: prompt, role: "user" }], parentEvent, streaming);
  }

  tokens(messages: ChatMessage[]): number {
    // Logic for calculating tokens
    let totalTokens = 0;
    for (const message of messages) {
      totalTokens += message.content.split(' ').length;
    }
    return totalTokens;
  }

  get metadata() {
    return {
      model: "OllamaModel",
      temperature: 0.1,
      topP: 0.9,
      maxTokens: 1000,
      contextWindow: 500,
      tokenizer: Tokenizers.CL100K_BASE, // Add tokenizer property
    };
  }
}
