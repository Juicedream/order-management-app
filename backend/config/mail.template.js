
export const sendVerificationEmailTemplate = (verificationUrl) => {
    let html = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Verify your email</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:40px auto 40px;background:#ffffff;border-radius:8px;box-shadow:0 4px 20px rgba(16,24,40,0.06);overflow:hidden">
      <tr>
        <td style="padding:24px 28px 0; text-align:center;">
          <!-- Small logo / brand -->
          <div style="display:inline-block;background:#111827;color:#fff;padding:10px 14px;border-radius:8px;font-weight:700;letter-spacing:0.4px;">
            YourApp
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:20px 28px 10px;">
          <h1 style="margin:0 0 8px;font-size:20px;color:#0f172a;">Verify your email address</h1>
          <p style="margin:0;color:#334155;line-height:1.5;">
            Hi there — thanks for creating an account. Confirm your email address by clicking the button below. This helps keep your account secure.
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:18px 28px 20px;text-align:center;">
          <!-- Button -->
          <a
            href="${verificationUrl}"
            style="display:inline-block;padding:12px 20px;background:#2563eb;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:600;box-shadow:0 6px 18px rgba(37,99,235,0.18);"
            target="_blank" rel="noopener noreferrer"
          >
            Verify my email
          </a>
        </td>
      </tr>

      <tr>
        <td style="padding:0 28px 20px;color:#64748b;font-size:13px;line-height:1.5;">
          <p style="margin:0 0 8px;">
            If the button doesn't work, copy and paste the following link into your browser:
          </p>
          <p style="word-break:break-all;margin:0 0 8px;">
            <a href="${verificationUrl}" style="color:#2563eb;text-decoration:underline;" target="_blank" rel="noopener noreferrer">${verificationUrl}</a>
          </p>
          <p style="margin:0;color:#94a3b8;font-size:12px;">
            This link will expire in 24 hours. If you didn't create an account with us, you can safely ignore this email.
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:16px 28px;background:#f8fafc;color:#475569;font-size:13px;text-align:center;">
          <p style="margin:0;">Need help? Reply to this email or contact our support at <a href="mailto:${process.env.SUPPORT_EMAIL || ''}" style="color:#2563eb;text-decoration:underline;">support</a>.</p>
          <p style="margin:8px 0 0;font-size:12px;color:#94a3b8;">© ${new Date().getFullYear()} YourApp. All rights reserved.</p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

    return html;
}


