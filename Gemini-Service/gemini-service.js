const { GoogleGenerativeAI } = require("@google/generative-ai");

async function getDescription(imageBuffer, prompt, apiKey) {
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  try {
    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: imageBuffer.toString("base64"),
          mimeType: "image/jpeg",
        },
      },
    ]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("تفاصيل الخطأ الكاملة:", error);
    throw error;
  }
}

module.exports = { getDescription };