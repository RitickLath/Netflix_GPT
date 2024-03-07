import OpenAI from "openai";
// Open AI API Call

export const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
