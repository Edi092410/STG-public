export const Mail = ({ token }) => `
  <html>
  <head>
    <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    }
    .header{
      display: flex;
    }

    .header img {
      max-width: 30px;
      max-height: 30px;
      height: auto;
      border-radius: 10px;
    }

    .header h1 {
      font-size: 24px;
      color: #333333;
      margin-left: 10px;
      margin-top: 0;
    }

    .content {
      margin-top: 20px;
      font-size: 16px;
      color: #555555;
    }

    .content a {
      color: #007bff;
      text-decoration: none;
    }

    .footer {
      margin-top: 20px;
      font-size: 14px;
      color: #888888;
    }
  </style>

  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://admin.e-siticom.com/storage/logo.jpeg" alt="Logo" />
        <h1>Санхүүгийн Тооцоолох Групп Компани</h1>
      </div>
      <div class="content">
        <p>Нууц үг сэргээх <a href="https://e-siticom.com/forgetField?token=${token}">холбоос</a> дээр даран нууц үгээ сэргээнэ үү. Хувийн мэдээллээ хамгаалж нууц үгээ бусдад дамжуулахгүй байна уу.</p>
      </div>
      <div class="footer">
        <p>Таныг хүндэтгэсэн, "Санхүүгийн Тооцоолох Групп" компани.</p>
      </div>
    </div>
  </body>
  </html>`;
