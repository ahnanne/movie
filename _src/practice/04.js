/* eslint-disable no-unused-vars */

// 참고: https://www.npmjs.com/package/vanilla-tilt
import VanillaTilt from 'vanilla-tilt'

/* -------------------------------------------------------------------------- */

// VanillaTilt 초기화 설정
// 참고: https://www.npmjs.com/package/vanilla-tilt#options
const initialVanillaTilt = {
  // 틸트 방향 반전 설정
  reverse: true,
  // 최대 기울기 회전(도)
  max: 20,
  // enter/exit 전환 속도
  speed: 680,
  // 스케일 조정 (2 = 200%, 1.5 = 150%)
  scale: 1.1,
  // 글레어(Glare, 섬광) 효과가 필요한 경우 설정
  // 'glare': true,
  // 최대 글레어 불투명도 (1 = 100%, 0.5 = 50%)
  // 'max-glare': 0.35,
}

/* -------------------------------------------------------------------------- */

const Tilt = ({ children, ...restProps }) => {
  /* 참조 설정 -------------------------------------------------------------------- */
  // React.useRef() 훅을 사용해 tiltRef 참조를 생성합니다.
  //

  /* 사이드 이펙트 설정 --------------------------------------------------------------- */
  // VanillaTilt 라이브러리를 사용해 참조된 실제 DOM 노드에 인터랙션 설정합니다.
  // 실제 DOM 노드 참조에 VanillaTilt 라이브러리를 설정해 초기화(initialVanillaTilt) 합니다.
  // 참고: https://micku7zu.github.io/vanilla-tilt.js
  // 예) VanillaTilt.init(domNode, options)
  //
  // 클린업 함수를 사용해 설정된 VanillaTilt.init을 정리합니다.
  // 참고: https://www.npmjs.com/package/vanilla-tilt#methods
  // 예) domNode.vanillaTilt.destroy()
  //
  // 이펙트의 의존(종속)성 배열을 설정해, 불필요한 재실행을 하지 않도록 [] 설정합니다.

  // .tilt-root 요소에 ref 속성을 추가합니다.
  return (
    <div style={tiltStyles.root} {...restProps}>
      <div style={tiltStyles.child}>{children}</div>
    </div>
  )
}

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
