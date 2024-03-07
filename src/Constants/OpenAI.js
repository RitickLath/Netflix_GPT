import OpenAI from "openai";
import { Openkey } from "./APIKey";
// Open AI API Call

export const openai = new OpenAI({
  apiKey: Openkey,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
