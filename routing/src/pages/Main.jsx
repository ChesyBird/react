import mainPhoto from '../assets/hero.png'

// 첫 페이지를 보여주는 컴포넌트
const Main = () => {
    
    return (
        <div>
            <h2>환영합니다. 메인 페이지 입니다.</h2>
            <div>
                <img src={mainPhoto} alt="메인이미지" />
            </div>
        </div>
    )
}

export default Main;