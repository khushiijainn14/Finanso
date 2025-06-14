import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "finanso", // Unique app ID
  name: "Finanso",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});