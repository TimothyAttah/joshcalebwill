import { useTransform, useScroll, motion } from 'framer-motion'
import styled from 'styled-components'

const ScrollContainer = styled(motion.div)`
	background-color: var(--main-color-o);
	width: 100%;
	height: 80vh;
	padding-top: 100px;
	position: relative;
`;

const MoveText = () => {
  return (
    <div>MoveText</div>
  )
}

export default MoveText
