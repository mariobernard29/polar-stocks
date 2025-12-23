export const WELCOME_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Welcome to Polar Stocks</title>
    <style type="text/css">
        @media (prefers-color-scheme: dark) {
            .email-container { background-color: #141414 !important; border: 1px solid #30333A !important; }
            .dark-bg { background-color: #050505 !important; }
            .dark-text { color: #ffffff !important; }
            .dark-text-secondary { color: #9ca3af !important; }
            .dark-border { border-color: #30333A !important; }
        }
        @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; margin: 0 !important; }
            .mobile-padding { padding: 24px !important; }
            .mobile-title { font-size: 24px !important; }
            .mobile-button a { width: calc(100% - 64px) !important; display: block !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A;">
                    <tr>
                        <td align="left" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/ii7zabwjq/logo.png" alt="Polar Stocks Logo" width="150" style="max-width: 100%; height: auto;">
                        </td>
                    </tr>
                    <tr>
                        <td class="mobile-padding" style="padding: 40px;">
                            <h1 class="dark-text" style="margin: 0 0 30px 0; font-size: 24px; font-weight: 600; color: #60A5FA; line-height: 1.2;">
                                Welcome aboard {{name}}
                            </h1>
                            {{intro}}
                            <p class="dark-text-secondary" style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.6; color: #CCDADC; font-weight: 600;">
                                Here's what you can do right now:
                            </p>
                            <ul class="dark-text-secondary" style="margin: 0 0 30px 0; padding-left: 20px; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                <li style="margin-bottom: 12px;">Set up your watchlist to follow your favorite stocks</li>
                                <li style="margin-bottom: 12px;">Create price and volume alerts so you never miss a move</li>
                                <li style="margin-bottom: 12px;">Explore the dashboard for trends and the latest market news</li>
                            </ul>
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 40px 0; width: 100%;">
                                <tr>
                                    <td align="center">
                                        <a href="https://polarstocks.app" style="display: block; width: 100%; background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; text-align: center;">
                                            Go to Dashboard
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin: 40px 0 0 0; font-size: 14px; color: #6b7280; text-align: center;">
                                Polar Stocks HQ<br>
                                <a href="#" style="color: #60A5FA; text-decoration: underline;">Unsubscribe</a> | © 2025 Polar Stocks
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export const NEWS_SUMMARY_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Market News Summary Today</title>
    <style type="text/css">
        @media (prefers-color-scheme: dark) {
            .email-container { background-color: #141414 !important; border: 1px solid #30333A !important; }
            .dark-text { color: #ffffff !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: sans-serif;">
    <table role="presentation" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="100%" class="email-container" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A;">
                    <tr>
                        <td align="left" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/ii7zabwjq/logo.png" alt="Polar Stocks Logo" width="150">
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <h1 style="margin: 0 0 10px 0; font-size: 24px; color: #60A5FA;">Market News Summary Today</h1>
                            <p style="color: #6b7280; font-size: 14px; margin-bottom: 30px;">{{date}}</p>
                            {{newsContent}}
                            <div style="text-align: center; margin-top: 40px; color: #6b7280; font-size: 12px;">
                                <p>You're receiving this because you subscribed to Polar Stocks news updates.</p>
                                <a href="#" style="color: #60A5FA;">Unsubscribe</a> | <a href="https://polarstocks.app" style="color: #60A5FA;">Visit Polar Stocks</a>
                                <p>© 2025 Polar Stocks</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export const STOCK_ALERT_UPPER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Price Alert: {{symbol}} Hit Upper Target</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: sans-serif;">
    <table role="presentation" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="100%" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A; color: #ffffff;">
                    <tr>
                        <td align="left" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/ii7zabwjq/logo.png" alt="Polar Stocks Logo" width="150">
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 20px 40px;">
                            <div style="background-color: #059669; border-radius: 8px; padding: 20px; text-align: center;">
                                <h1 style="margin: 0; font-size: 24px; color: #ffffff;">📈 Price Above Reached</h1>
                                <p style="margin: 5px 0 0 0; opacity: 0.9;">{{timestamp}}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <div style="text-align: center; padding: 30px; background-color: #212328; border-radius: 8px; margin-bottom: 20px;">
                                <h2 style="margin: 0; font-size: 28px;">{{symbol}}</h2>
                                <p style="color: #6b7280;">{{company}}</p>
                                <p style="font-size: 36px; font-weight: 700; color: #10b981; margin: 10px 0;">{{currentPrice}}</p>
                            </div>
                            <div style="background-color: #212328; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                                <p><strong>Target Price:</strong> {{targetPrice}}</p>
                                <p><strong>Trigger:</strong> Price exceeded your upper threshold</p>
                            </div>
                            <a href="https://polarstocks.app" style="display: block; background-color: #60A5FA; color: #000000; text-decoration: none; padding: 16px; border-radius: 8px; font-weight: bold; text-align: center;">View Dashboard</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export const STOCK_ALERT_LOWER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Price Alert: {{symbol}} Hit Lower Target</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: sans-serif;">
    <table role="presentation" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="100%" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A; color: #ffffff;">
                    <tr>
                        <td align="left" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/ii7zabwjq/logo.png" alt="Polar Stocks Logo" width="150">
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 20px 40px;">
                            <div style="background-color: #dc2626; border-radius: 8px; padding: 20px; text-align: center;">
                                <h1 style="margin: 0; font-size: 24px; color: #ffffff;">📉 Price Below Hit</h1>
                                <p style="margin: 5px 0 0 0; opacity: 0.9;">{{timestamp}}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <div style="text-align: center; padding: 30px; background-color: #212328; border-radius: 8px; margin-bottom: 20px;">
                                <h2 style="margin: 0; font-size: 28px;">{{symbol}}</h2>
                                <p style="color: #6b7280;">{{company}}</p>
                                <p style="font-size: 36px; font-weight: 700; color: #ef4444; margin: 10px 0;">{{currentPrice}}</p>
                            </div>
                            <div style="background-color: #212328; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                                <p><strong>Target Price:</strong> {{targetPrice}}</p>
                                <p><strong>Trigger:</strong> Price dropped below your threshold</p>
                            </div>
                            <a href="https://polarstocks.app" style="display: block; background-color: #60A5FA; color: #000000; text-decoration: none; padding: 16px; border-radius: 8px; font-weight: bold; text-align: center;">View Dashboard</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export const VOLUME_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Volume Alert: {{symbol}}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: sans-serif;">
    <table role="presentation" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="100%" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A; color: #ffffff;">
                    <tr>
                        <td align="left" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/ii7zabwjq/logo.png" alt="Polar Stocks Logo" width="150">
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 20px 40px;">
                            <div style="background-color: #7c3aed; border-radius: 8px; padding: 20px; text-align: center;">
                                <h1 style="margin: 0; font-size: 24px; color: #ffffff;">📊 Volume Alert</h1>
                                <p style="margin: 5px 0 0 0; opacity: 0.9;">{{timestamp}}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <div style="text-align: center; padding: 30px; background-color: #050505; border-radius: 8px; margin-bottom: 30px;">
                                <h2 style="margin: 0;">{{symbol}}</h2>
                                <p style="font-size: 36px; font-weight: 700; color: #7c3aed; margin: 15px 0;">{{currentVolume}}M</p>
                                <p style="color: {{priceColor}};">{{currentPrice}} ({{changePercent}}%)</p>
                            </div>
                            <a href="https://polarstocks.app" style="display: block; background-color: #60A5FA; color: #ffffff; text-decoration: none; padding: 14px; border-radius: 8px; font-weight: 500; text-align: center;">View Dashboard</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

export const INACTIVE_USER_REMINDER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>We Miss You! Your Market Insights Await</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: sans-serif;">
    <table role="presentation" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table role="presentation" width="100%" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A; color: #ffffff;">
                    <tr>
                        <td align="left" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/ii7zabwjq/logo.png" alt="Polar Stocks Logo" width="150">
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px;">
                            <h1 style="margin: 0 0 15px 0; font-size: 28px; background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: #60A5FA;">
                                We Miss You, {{name}}!
                            </h1>
                            <p style="color: #CCDADC; line-height: 1.6;">We noticed you haven't visited Polar Stocks in a while. The markets are moving fast, don't miss out on the action!</p>
                            <div style="background-color: #050505; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin: 30px 0;">
                                <h3 style="color: #60A5FA; margin-top: 0;">Market Update</h3>
                                <p style="font-size: 14px; color: #ccdadc; margin-bottom: 0;">Indices are showing high volatility. Check your watchlists to see how your portfolio is performing.</p>
                            </div>
                            <a href="{{dashboardUrl}}" style="display: block; background: #60A5FA; color: #000000; text-decoration: none; padding: 16px; border-radius: 8px; font-weight: bold; text-align: center;">Return to Dashboard</a>
                            <p style="text-align: center; margin-top: 40px; font-size: 12px; color: #6b7280;">
                                © 2025 Polar Stocks | <a href="{{unsubscribeUrl}}" style="color: #60A5FA;">Unsubscribe</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;