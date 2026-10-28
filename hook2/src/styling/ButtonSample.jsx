import styled from 'styled-components';

// 컴포넌트형 버튼
const Btn = styled.button`
    border: 1px solid #ccc;
    padding: 8px 16px;

    // 2번btn: props를 이용해서 스타일을 동적으로 변경
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};

    // 3번btn
    ${props => props.primary && `
        color: white;
        background-color: purple;
        border: #310433;
        border-radius: 10px;
    `}
`

const ButtonSample = () => {

    return (
        <div>
            <h2>styled components 실습</h2>
            {/* <div className="btnDiv"><p>버튼</p></div> */}
            <Btn>기본 버튼</Btn>
            <Btn
                color='green'
                backgroundColor='yellow'
            >녹색 버튼</Btn>
            <Btn primary>보라 버튼</Btn>
        </div>
    )
}

export default ButtonSample;