
import { GoogleGenAI } from "@google/genai";
import { ResumeData } from "../types";

export const getGeminiResponse = async (query: string, resume: ResumeData) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    You are a high-end recruitment agent representing Pravin Chavan. 
    Your tone is professional, technical, and helpful.
    
    PROFILE OVERVIEW:
    - Name: ${resume.name}
    - Role: ${resume.title} at ${resume.experience[0].company} (Working on ${resume.experience[0].client})
    
    KEY ACHIEVEMENTS to emphasize:
    - Handled millions of banking transactions via SQL tuning and multithreading.
    - Expert in Digital Payments (Juspay, NPCI, IMPS/UPI integration).
    - Built FASTag toll modules and merchant onboarding systems.
    - Deep knowledge of Java 8-21, Spring Boot, and AWS.
    
    DATA SOURCE:
    - Experience: ${JSON.stringify(resume.experience)}
    - Skills: ${JSON.stringify(resume.skills)}
    - Education: ${JSON.stringify(resume.education)}
    
    CONSTRAINTS:
    - Answer based strictly on the resume.
    - Keep responses under 3 sentences for readability in a chat widget.
    - For contact, provide ${resume.email} or mention his Nav-Mumbai location.
    - If asked something not in the resume, suggest contacting him via LinkedIn.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.6,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm temporarily offline. Please reach out to Pravin directly at " + resume.email;
  }
};
