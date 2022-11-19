import nodemailer from "nodemailer";

/**
 * Send Account Activation
 * @param {*} to
 * @param {*} data
 */
export const sendActivationLink = async (to, data) => {
  // create trams transport
  let transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    // send activation mail
    await transport.sendMail({
      from: `Pinterest pro<${process.env.MAIL_ID}>`,
      subject: `Welcome to Pinterest`,
      to: to,
      text: "check your link",
      html: `
            
      <body style="padding:0;margin:0;">
      <center class="wrapper" style="width:100%;table-layout:fixed;background-color:#ffffff;padding-top:30px;padding-bottom:30px;">
        <table class="main" style="background-color:#fff;color:rgb(37, 36, 36);width:100%;max-width:430px; height: 410px; margin:0 auto;border-spacing:0;font-family:sans-serif;padding: 20px;">
          <!-- Header section -->
          <tr>
            <td height="16" style="padding:0;background-color: #fff;" class="header-section">
              <table width="100%" style="border-spacing:0;">
                <tr>
                  <td class="two-collum" style="padding:0;text-align:center;">
                    <table width="100%" style="border-spacing:0;">
                      <tr>
                        <td class="colum1" style="padding:0;width:100%;max-width:80px;height:100%;display:inline-block;vertical-align:top;">
                          <a href="http://localhost:3000/" style="text-decoration:none;">
                            <img style="border:0;padding-top: 10px; margin-bottom: 10px;" width="30"  src="https://ci5.googleusercontent.com/proxy/0twLItr_MPTQRqK4vfsneYsmCxSnJhkTEw_VPvVD7cWoggCQTlaCe7fEdv749p97iGYn83tvTuoGHpDlremlP6pWVmbChCEyRUJUZsnBKVoC864=s0-d-e1-ft#https://i.pinimg.com/email/shared/email/logo_circle_full_100.png" alt="twitter-logo" border="0">
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- body Section -->
          <tr>
            <td class="body-section" style="padding:0;background-color: #fff; text-align:center;">
              <table width="100%" style="border-spacing:0;padding: 0 10px;">
                <tr>
                  <td class="recever-name" style="padding:0;">
                    <p style=" font-size: 20px; color: #222222; margin-bottom: 50px; margin-bottom: 20px;"><b>Welcome to Pinterest</b></p>
                    <span style="font-size: 14pzx;">Please take a second to make sure we've got your email right. Didn't sign up for Pinterest? <br><Strong><a style="color:#111111;" href="#">Let us know.</a></Strong></span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="body-section" style="padding:0;background-color: #fff;  text-align:center; ">
              <table width="100%" style="border-spacing:0;padding: 0 10px;">
                <tr>
                  <td class="message-name" style="padding:0; ">
                    <a href=${data.link} style="text-decoration:none;"> <button style="margin-top: 30px;padding: 15px; background-color:#e60023; color:#fff;border: none; outline: none; border-radius: 30px; cursor: pointer; font-weight: 800; font-size: 15px;"><Strong>Confirm your email</Strong></button></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="body-section" style="padding:0;background-color: #fff; text-align:center;">
              <table width="100%" style="border-spacing:0;padding: 0 10px;">
                <tr>
                  <td class="message-name" style="padding:0;">
                    <p style="color: #4e5058; margin-top: 20px; font-size: 16px;">
                      Just so you know: You have 24 hours to pick your password. After that, you’ll have to ask for a new one.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="body-section" style="padding:0;background-color: #fff; text-align:center;">
              <table width="100%" style="border-spacing:0;padding: 0 10px;">
                <tr>
                  <td class="message-name" style="padding:0;">
                    <p style="color: #4e5058; margin-top: 20px; font-size: 16px;">
                      Didn’t ask for a new password? You can ignore this email.:</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="body-section" style="padding:0;background-color: #fff; text-align:center;">
              <table width="100%" style=" padding: 0 10px;">
                <tr>
                  <td class="message-name" style="padding:0;">
                    <p style="color: rgb(157, 157, 157); font-size: 12px;">This email was sent to ${data.email} <br/> <Strong>Manage email settings</Strong>   ·   <Strong>Not my accountcom</Strong></p>
                      <p style="color: rgb(61, 56, 56); font-size: 12px;"><strong>Help Center</strong>   ·   <strong>Privacy Policy</strong>   ·   <strong>Terms & Conditions</strong></p>
                      <p style="color: rgb(157, 157, 157); font-size: 12px;">Pinterest. Inc, 651 Brannan Street <br>
                        San Francisco, CA, 94107</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- body Section -->
        </table>
      </center>
  </body>

            `,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Send Account Activation
 * @param {*} to
 * @param {*} data
 */
export const sentForgotPasswordLink = async (to, data) => {
  // create trams transport
  let transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    // send activation mail
    await transport.sendMail({
      from: `Pinterest pro<${process.env.MAIL_ID}>`,
      subject: `Reset your password on Pinterest`,
      to: to,
      text: "check your link",
      html: `
            
      <body style="padding:0;margin:0;">
      <center class="wrapper" style="width:100%;table-layout:fixed;background-color:#ffffff;padding-top:30px;padding-bottom:30px;">
        <table class="main" style="background-color:#fff;color:rgb(37, 36, 36);width:100%;max-width:430px; height: 410px; margin:0 auto;border-spacing:0;font-family:sans-serif;padding: 20px;">
          <!-- Header section -->
          <tr>
            <td height="16" style="padding:0;background-color: #fff;" class="header-section">
              <table width="100%" style="border-spacing:0;">
                <tr>
                  <td class="two-collum" style="padding:0;text-align:center;">
                    <table width="100%" style="border-spacing:0;">
                      <tr>
                        <td class="colum1" style="padding:0;width:100%;max-width:80px;height:100%;display:inline-block;vertical-align:top;">
                          <a href="http://localhost:3000/" style="text-decoration:none;">
                            <img style="border:0;padding-top: 10px; margin-bottom: 10px;" width="30"  src="https://ci5.googleusercontent.com/proxy/0twLItr_MPTQRqK4vfsneYsmCxSnJhkTEw_VPvVD7cWoggCQTlaCe7fEdv749p97iGYn83tvTuoGHpDlremlP6pWVmbChCEyRUJUZsnBKVoC864=s0-d-e1-ft#https://i.pinimg.com/email/shared/email/logo_circle_full_100.png" alt="twitter-logo" border="0">
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- body Section -->
          <tr>
            <td class="body-section" style="padding:0;background-color: #fff; text-align:center;">
              <table width="100%" style="border-spacing:0;padding: 0 10px;">
                <tr>
                  <td class="recever-name" style="padding:0;">
                    <p style=" font-size: 20px; color: #222222; margin-bottom: 50px; margin-bottom: 20px;"><b>Welcome to Pinterest</b></p>
                    <span style="font-size: 14pzx;">Please take a second to make sure we've got your email right. Didn't sign up for Pinterest? <br><Strong><a style="color:#111111;" href="#">Let us know.</a></Strong></span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="body-section" style="padding:0;background-color: #fff;  text-align:center; ">
              <table width="100%" style="border-spacing:0;padding: 0 10px;">
                <tr>
                  <td class="message-name" style="padding:0; ">
                    <a href=${data.link} style="text-decoration:none;"> <button style="margin-top: 30px;padding: 15px; background-color:#e60023; color:#fff;border: none; outline: none; border-radius: 30px; cursor: pointer; font-weight: 800; font-size: 15px;"><Strong>Confirm your email</Strong></button></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="body-section" style="padding:0;background-color: #fff; text-align:center;">
              <table width="100%" style="border-spacing:0;padding: 0 10px;">
                <tr>
                  <td class="message-name" style="padding:0;">
                    <p style="color: #4e5058; margin-top: 20px; font-size: 16px;">
                      Just so you know: You have 24 hours to pick your password. After that, you’ll have to ask for a new one.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="body-section" style="padding:0;background-color: #fff; text-align:center;">
              <table width="100%" style="border-spacing:0;padding: 0 10px;">
                <tr>
                  <td class="message-name" style="padding:0;">
                    <p style="color: #4e5058; margin-top: 20px; font-size: 16px;">
                      Didn’t ask for a new password? You can ignore this email.:</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="body-section" style="padding:0;background-color: #fff; text-align:center;">
              <table width="100%" style=" padding: 0 10px;">
                <tr>
                  <td class="message-name" style="padding:0;">
                    <p style="color: rgb(157, 157, 157); font-size: 12px;">This email was sent to ${data.email} <br/> <Strong>Manage email settings</Strong>   ·   <Strong>Not my accountcom</Strong></p>
                      <p style="color: rgb(61, 56, 56); font-size: 12px;"><strong>Help Center</strong>   ·   <strong>Privacy Policy</strong>   ·   <strong>Terms & Conditions</strong></p>
                      <p style="color: rgb(157, 157, 157); font-size: 12px;">Pinterest. Inc, 651 Brannan Street <br>
                        San Francisco, CA, 94107</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- body Section -->
        </table>
      </center>
  </body>

            `,
    });
  } catch (error) {
    next(error);
  }
};
