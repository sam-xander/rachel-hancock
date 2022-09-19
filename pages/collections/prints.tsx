import Layout from '../../components/Layout/Layout'
import { ReactElement } from 'react'

export default function Prints() {
    return (
        <>
        </>
    )
}

Prints.getLayout = function getLayout(page:ReactElement){
    return <Layout>{page}</Layout>
  }