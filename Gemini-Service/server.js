require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { getDescription } = require('./gemini-service');

const app = express();
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

const PROMPT = `Identify the lost item in the image and describe it in Arabic in ONLY one short sentence.
Focus only on: Type, Color, and any text or name written on the item.
Strict rule: Do not exceed 15 words. No introductions or extra details.
Example: حقيبة ظهر سوداء من القماش عليها شعار نايكي أبيض.`;

app.post('/analyze', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ success: false, message: "لم يتم رفع صورة" });
        const description = await getDescription(req.file.buffer, PROMPT, process.env.GEMINI_API_KEY);
        return res.status(200).json({ success: true, description });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Gemini Server running on port 4000");
});