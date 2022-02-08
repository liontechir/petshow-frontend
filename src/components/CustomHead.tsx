import Head from 'next/head'

interface HeaderProps {
  title: string
}

const CustomHead = ({ title }: HeaderProps) => {
  return (
    <Head>
      <title>Petshow | {title}</title>
      <meta name='description" content="Application for manage pets' />
    </Head>
  )
}

export default CustomHead
