import About from '@/components/about'
import Divider from '@/components/divider'
import Intro from '@/components/intro'


export default function Home() {
  return (
    <main className='relative top-[6rem] w-full'>
      <Intro />
      <Divider />
      <About />
    </main>
  )
}
