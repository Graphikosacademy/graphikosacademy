import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  const { emailfrom, name, mobilenumber } = await req.json();
  const emailto = "graphi.kosacademy@gmail.com"
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD, // Change "password" to "pass" (correct property)
    },
    tls: {
      rejectUnauthorized: false, // This allows using self-signed certificates
    },
  });

  try {
    await transporter.sendMail({

      from: emailfrom,
      to: emailto,
      subject: `New Message from ${name}`,
      text: `Inquiry From ${name} and ${mobilenumber}`,
    });
    return new Response(
      JSON.stringify({ message: "Email sent Successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 500 } // Use 500 for internal server error
    );
  }
};
