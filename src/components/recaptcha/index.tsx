'use client';

import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export function ReactRecaptcha() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onReCAPTCHAChange = async (captchaCode: string | null) => {
    if(!captchaCode) {
      return;
    }
    recaptchaRef?.current?.reset();
  };

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      size='invisible'
      sitekey={import.meta.env.RECAPTCHA_KEY || ''}
      onChange={onReCAPTCHAChange}
    />
  )
}

// 1st step - Install react-google-recaptcha and its types then import it in the file you wish to use it
// npm i react-google-recaptcha
// npm i -D @types/react-google-recaptcha

// OBS: ReCAPTCHA requires the 'use client' directive

// 2nd step - Create the reference
// Pass in the useRef as generics the ReCAPTCHA component same name as the import
// const recaptchaRef = useRef<ReCAPTCHA>(null);

// 3rd step - Add the recaptcha component inside the form component and add the reference to it 
{/* <ReCAPTCHA
ref={recaptchaRef}
size='invisible'
sitekey={process.env.NEXT_PUBLIC_KEY_CAPTCHA || ''}
onChange={onReCAPTCHAChange}
/> */}

// 4th step - Put in the sitekey the key provided in Google and by the Backend

// 5th step - Create the function to add in the onChange
// const onReCAPTCHAChange = async (captchaCode: string | null) => {
//   if(!captchaCode) {
//     return;
//   }
//   recaptchaRef?.current?.reset();
// };


// 6th step - Optional - I added it in the Zod Schema and in the type/interface file to validate it, it depends on the project 
// const schema = z.object({
//   email: z.string().nonempty('O email é obrigatório').email('O email não é válido'),
//   password: z
//     .string()
//     .nonempty('A senha é obrigatória')
//     .min(6, 'A senha deve conter 6 ou mais caracteres')
//     .max(20, 'A senha não pode ter mais de 20 caracteres'),
//   reCaptcha: z.string().default(' ')
// });










