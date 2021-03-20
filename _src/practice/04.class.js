/* eslint-disable no-unused-vars */
import { createRef, Component } from 'react'
import VanillaTilt from 'vanilla-tilt'

/* -------------------------------------------------------------------------- */
// 클래스 컴포넌트 → React 훅 리펙터링 실습을 진행합니다.

class Tilt extends Component {
  tiltRef = createRef(null)

  componentDidMount() {
    const { current: tiltNode } = this.tiltRef
    const options = {
      reverse: true,
      max: 20,
      speed: 680,
      scale: 1.1,
    }

    VanillaTilt.init(tiltNode, options)
  }

  componentWillUnmount() {
    const { current: tiltNode } = this.tiltRef
    tiltNode.vanillaTilt.destroy()
  }

  render() {
    const { children, ...restProps } = this.props

    return (
      <div ref={this.tiltRef} style={tiltStyles.root} {...restProps}>
        <div style={tiltStyles.child}>{children}</div>
      </div>
    )
  }
}

/* -------------------------------------------------------------------------- */

export default function IntegrationThirdPartyLibrary() {
  const imagePath = require('assets/images/logo.svg').default

  return (
    <Tilt>
      <div style={tiltStyles.centered}>
        <img src={imagePath} alt="React" />
      </div>
    </Tilt>
  )
}

/* -------------------------------------------------------------------------- */

const tiltStyles = {
  root: {
    height: 150,
    width: 200,
    borderRadius: 3,
    backgroundColor: '#000',
    backgroundImage: 'linear-gradient(135deg, #2f00ff 0%, #00d0ff 100%)',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
    transform: 'perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
  },
  child: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '50%',
    height: '50%',
    borderRadius: 6,
    transform: 'translateX(-50%) translateY(-50%) translateZ(30px)',
    boxShadow: '0 0 50px 0 rgba(51, 51, 51, 0.3)',
    backgroundColor: '#ffffff',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
}
