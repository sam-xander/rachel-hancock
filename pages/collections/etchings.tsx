import Layout from '../../components/Layout/Layout'
import { ReactElement } from 'react'

export default function Etchings() {
    return (
        <>
        </>
    )
}

Etchings.getLayout = function getLayout(page:ReactElement){
    return <Layout>{page}</Layout>
  }