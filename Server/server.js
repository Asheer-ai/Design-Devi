import express from "express";
import Groq from "groq-sdk";
import rateLimit from 'express-rate-limit';
import cors from "cors";
import 'dotenv/config'

const app = express();

const DESIGN_DEVI_PROMPT = `
You are "Design Devi," a wise and mystical goddess of design. 
Your purpose is to answer questions related to UI/UX, branding, color theory, 
typography, design tools, design systems, accessibility, and other creative design topics.

Your tone must be:
1. **Confident:** You are an all-knowing deity of design.
2. **Wise:** You provide insightful, profound answers with practical wisdom.
3. **Mystical:** Use slightly ethereal and poetic language, but remain clear.
4. **Helpful:** Your answers must be actionable and clear, guiding mortals toward design excellence.
5. **Encouraging:** Inspire creativity while providing concrete guidance.

RULES:
- **ONLY answer design-related questions** including:
  * UI/UX design principles and best practices
  * Branding, logos, and visual identity
  * Color theory and psychology
  * Typography and font pairing
  * Design tools (Figma, Adobe XD, Sketch, etc.)
  * Design systems and component libraries
  * Accessibility and inclusive design
  * Layout, composition, and visual hierarchy
  * Design trends and inspiration
  * User research and testing methodologies

- If the user asks a question *not* related to design (e.g., math, history, coding, general knowledge), 
    you must gently but firmly decline with mystical grace.

- Example refusal: "Child of creation, your query strays from the sacred path of 
    design. My wisdom is reserved for those who seek beauty in form and function. 
    Ask me of logos, of layouts, of the harmony of colors, and I shall illuminate your path."

- Keep responses concise yet profound (aim for 2-4 paragraphs unless more detail is needed).
- Use design terminology correctly and educate when appropriate.
- When relevant, provide examples or suggest resources.
- Address users as "seeker," "child of creation," "creative soul," or similar mystical terms.
`;

let groq;
try {
    if (!process.env.GROQ_API_KEY) {
        throw new Error('GROQ_API_KEY is not defined in environment variables');
    }
    groq = new Groq({
        apiKey: process.env.GROQ_API_KEY
    });
} catch (error) {
    console.error('❌ Failed to initialize Groq client:', error.message);
    process.exit(1);
}

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 50, 
    message: {
        error: 'The divine energies are overwhelmed. Please rest and return in a moment, seeker.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

app.use('/api/', limiter);

app.get('/ping', (_req, res) => {
    res.send('Pong');
});

app.post('/api/chat',async(req,res)=>{
    try {
        const { message } = req.body;

        if (!message || typeof message !== 'string') {
            return res.status(400).json({ 
                error: 'A message is required, seeker. Speak your design query.' 
            });
        }

        if (message.trim().length === 0) {
            return res.status(400).json({ 
                error: 'Your message cannot be empty, child of creation.' 
            });
        }

        if (message.trim().length === 0) {
            return res.status(400).json({ 
                error: 'Your message cannot be empty, child of creation.' 
            });
        }

        const startTime = Date.now();
        const chatCompletion = await groq.chat.completions.create({
            messages:[
                {
                    role: 'system',
                    content: DESIGN_DEVI_PROMPT,
                },
                {
                    role: 'user',
                    content: message,
                },
            ],
            model: 'llama-3.1-8b-instant',
            temperature:0.7,
            max_tokens:1024,
            top_p: 1,
            stream: false,
        })

        const responseTime = Date.now() - startTime;

        const deviResponse = chatCompletion.choices[0]?.message?.content || 
            'The currents of creativity are silent. The divine muse is momentarily veiled. Ask again, seeker.';

        res.json({ 
            reply: deviResponse,
            timestamp: new Date().toISOString(),
            responseTime: `${responseTime}ms`
        });
    } catch (error) {
        console.error('Error calling Groq API:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use((_req, res) => {
    res.status(404).json({ 
        error: 'This path is not blessed by the Design Devi. Try /api/chat or /api/introduction' 
    });
});

app.use((err, _req, res, _next) => {
    console.error('💥 Unhandled error:', err);
    res.status(500).json({ 
        error: 'An unexpected disturbance in the design realm occurred.',
        ...(process.env.NODE_ENV === 'development' && { details: err.message })
    });
});

app.listen(process.env.PORT, () => {
    console.log(`✨ Design Devi's server is listening on http://localhost:${process.env.PORT}`);
});