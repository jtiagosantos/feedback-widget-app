export interface SendEmailData {
  subject: string;
  body: string;
}

export interface EmailAdapter {
  sendEmail: (data: SendEmailData) => Promise<void>;
}
