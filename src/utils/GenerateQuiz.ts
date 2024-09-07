import { AIChatSession } from '../service/AIModal'
export const generateQuizQuestion = async (skills: string) => {
    const prompt = `Generate a quiz with ${5} multiple-choice questions about ${skills}. 
    Each question should have 4 options. Format the response as a JSON array of objects, 
    where each object has the properties: question, options (an array of 4 strings), and correctAnswer.`;
    try {
        const data = await AIChatSession.sendMessage(prompt)
        const response = data.response.text()
        return response
    } catch (error) {
        console.log(error);
    }
}