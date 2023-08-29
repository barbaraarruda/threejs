import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png' 
              alt="threejs logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                VAMOS <br className="xl:block hidden"/> FAZER ISSO.
              </h1>
            </motion.div>
            <motion.div 
              {...headContentAnimation}
              className="flex flex-col gap-5"
            />
           
            <motion.div>
              <p className="max-w-md font-normal text-gray-600 text-base">
                Crie sua exclusiva e única camiseta com a nossa
                ferramenta de personalização 3D. <strong>DÊ ASAS A SUA IMAGINAÇÃO</strong>{" "}
                e crie a camiseta que você sempre quis.
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home