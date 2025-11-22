import { Resend } from 'resend';

const resend = new Resend('re_4LJATbjJ_DRFG3pTckEjEupFHwGswKLno');

async function sendTestEmail() {
    console.log("Attempting to send email to yasser30dc@gmail.com via onboarding@resend.dev...");
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['yasser30dc@gmail.com'], // This MUST be the registered email
            subject: 'Test Email from Script (Corrected)',
            html: '<p>If you see this, the API key works for yasser30dc@gmail.com!</p>'
        });
        console.log("Success:", data);
    } catch (error) {
        console.error("Failed:", error);
    }
}

sendTestEmail();
