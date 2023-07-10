import React,{useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
const Contact = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  // // const onSubmit = (data, e) => {
  // //   e.target.reset();
  // //   console.log('Message submited: ' + JSON.stringify(data));
  // // };
  const form = useRef();

  const sendEmail = () => {
   

    emailjs
      .sendForm(
        "service_od26rmf",
        "template_2hkll4h",
        form.current,
        "eOkU9o3llmQcLKZUN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

  };
//   const form = useRef();

//   const sendEmail = async(e) => {

//     const isValid = await trigger();
// if (isValid)
// {
//   emailjs.sendForm('service_od26rmf', 'template_2hkll4h', form.current, 'eOkU9o3llmQcLKZUN')
//   .then(response => {
//     console.log('SUCCESS!', response);
   
//     setStatus('SUCCESS');
//   }, error => {
//     console.log('FAILED...', error);
//   });
// }
    
//   };
 

  return (
    <>
      <form 
        className='contactform'
        // onSubmit={handleSubmit(onSubmit)}
        ref={form} onSubmit={handleSubmit(sendEmail)}
      
      
       
      >
        <div dir='rtl' className='row '>
          <div className='col-12 col-md-6'>
            <div className='form-group'>
              <input
                {...register('name', { required: true })}
                type='text'
                name='name'
                placeholder='اسمك الكريم'
              />
               {errors.name && errors.name.type === 'required' && (
                <span className='invalid-feedback'>الإســـم مطلوب.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className='col-12 col-md-6 '>
            <div className='form-group'>
              <input
                {...register(
                  'email',
                  {
                    required: 'البريد الالكتروني مطلوب',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'صيغة بريد الكتروني غير صالحة',
                    },
                  },
                  { required: true }
                )}
                type='email'
                name='email'
                placeholder='البريد الالكتروني'
              />
              {errors.email && (
                <span className='invalid-feedback'>{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className='col-12 col-md-12'>
            <div className='form-group'>
              <input
                {...register('subject', { required: true })}
                type='text'
                name='subject'
                placeholder='الموضوع'
              />
              {errors.subject && (
                <span className='invalid-feedback'>الموضوع مطلوب.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className='col-12'>
            <div className='form-group'>
              <textarea
                {...register('message', { required: true })}
                name='message'
                placeholder='رســالتك'
              ></textarea>
             {errors.message && (
                <span className='invalid-feedback'>الرسالة مطلوبة.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className='col-12 text-center'>
            <button type='submit'  className='button tajawalFont'>
              <span className='button-text'> إرسال Send</span>
              <span className='button-icon fa fa-send'></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
