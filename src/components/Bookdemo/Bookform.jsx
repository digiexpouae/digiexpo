import React from 'react'
import Content from './Content'
import ContactUsFormMuz from '@/forms/contact-us-form-muz'
import HeaderFive from '../../layout/headers/header-5'
import Form from './Form'
const Bookform = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',padding:'180px 50px'}}>
    <Content />
        <Form />
 </div>)
}

export default Bookform