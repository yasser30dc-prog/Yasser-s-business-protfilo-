import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend with the provided key
// TODO: Move this to environment variables in production for better security
const resend = new Resend('re_4LJATbjJ_DRFG3pTckEjEupFHwGswKLno');

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Contact API Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // 1. Send email to the business owner (Yasser)
        // NOTE: Using onboarding@resend.dev because custom domain is not verified yet.
        // Can only send to the registered email address (yasser30dc@gmail.com).
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['yasser30dc@gmail.com'],
            subject: `New Lead: ${name}`,
            replyTo: email, // Allow Yasser to reply directly to the lead
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        // 2. Send confirmation email to the user
        // NOTE: We cannot send to the user's email (${email}) using onboarding@resend.dev
        // unless it's also the registered email. 
        // SKIPPING confirmation email to user until domain is verified.
        /*
        await resend.emails.send({
            from: 'Yasser Sabek <onboarding@resend.dev>',
            to: [email],
            subject: 'I received your message! 🚀',
            html: `...`
        });
        */

        res.status(200).json({ success: true, message: 'Email sent successfully (Confirmation skipped due to unverified domain)' });
    } catch (error) {
        console.error('Resend Error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }


});

// Handle React routing, return all requests to React app
// Express 5 requires specific syntax for catch-all
app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
