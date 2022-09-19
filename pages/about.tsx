import Profile from "../components/About/Profile";
import ContactForm from "../components/Contact/ContactForm";

import Layout from "../components/Layout/Layout";
import { ReactElement } from 'react'

export default function About() {
  return (
    <>
    <Profile />
    <ContactForm />
    </>
  )
}

About.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}