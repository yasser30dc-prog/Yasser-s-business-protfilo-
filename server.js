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
        await resend.emails.send({
            from: 'Portfolio Contact <info@sabekmedia.com>',
            to: ['info@sabekmedia.com'], // Sending to Yasser's business email
            subject: `New Lead: ${name}`,
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        // 2. Send confirmation email to the user
        await resend.emails.send({
            from: 'Yasser Sabek <info@sabekmedia.com>',
            to: [email],
            subject: 'I received your message! 🚀',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1>Hi ${name},</h1>
                    <p>Thanks for reaching out! I've received your message and will get back to you shortly.</p>
                    <p>In the meantime, feel free to check out my <a href="https://yasser.sabekmedia.com">portfolio</a> for more examples of my work.</p>
                    <br>
                    <p>Best regards,</p>
                    <p><strong>Yasser Sabek</strong></p>
                    <p><em>Vibe Coding Expert</em></p>
                </div>
            `
        });

        res.status(200).json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Resend Error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
