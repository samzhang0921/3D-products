import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../components/Scene'
import style from '../styles/Home.module.css'

export default function App() {
  return (
    <>
      <div >
        <Image
          src="/header.png"
          alt="header"
          className={style.header}
          width={3584}
          height={338}
          priority
        />
      </div>
      <div className={style.main}>
        <div className={style.left}>

          <Canvas className={style.canvas}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <spotLight position={[20, 20, 20]} angle={0.75} penumbra={3} />
            <pointLight position={[-10, -10, -10]} />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls />
          </Canvas>
        </div>
        <div className={style.right}>
        <Image
          src="/detail.png"
          alt="detail"
          className={style.detail}
          width={700}
          height={1034}
          priority
        />
        </div>
      </div>

    </>
  )
}