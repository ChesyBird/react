import { useState } from "react";

// 회원 가입 폼 컴포넌트 정의
const SignUp = () => {

    // 폼 데이터 상태관리
    const [formData, setFormData] = useState({
        name: "", // 이름
        job: "회사원", // 직업
        gender: "male", // 성별
        memo: "" // 자기소개
    })

    // 모든 필드 입력값 변경 함수
    const handleInputChange = (e) => {
        const {name, value} = e.target; // e.target.value, e.target.name  구조분해할당

        setFormData({...formData, [name]: value});
    }

    // 폼 제출 처리 함수
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본동작 막기
        console.log("제출 데이터 : ", formData);
        
    }

    return (
        <div className="sign-up">
            <h2>회원 가입</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>이름</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="이름을 입력하세요"
                        />
                    </li>
                    <li>
                        <label>직업</label>
                        <select
                            name="job"
                            value={formData.job}
                            onChange={handleInputChange}
                        >
                            <option value="employee">회사원</option>
                            <option value="student">학생</option>
                            <option value="freelancer">프리랜서</option>
                        </select>
                    </li>
                    <li>
                        <label>성별</label>
                        <label><input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleInputChange}
                        /> 남자</label>
                        <label><input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleInputChange}
                        /> 여자</label>
                    </li>
                    <li>
                        <label>자기소개</label>
                        <textarea
                            name="memo"
                            rows={5}
                            cols={20}
                            value={formData.memo}
                            onChange={handleInputChange}
                        ></textarea>
                    </li>
                    <li>
                        {/* 서버에 전송이 되는 부분 : submit 사용 */}
                        <button type="submit">가입</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default SignUp;