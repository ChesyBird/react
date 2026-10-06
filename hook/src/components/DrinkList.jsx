// Drinks의 하위 컴포넌트 정의
const DrinkList = ({drinklist}) => {

    return (
        <div>
            <h2>음료 리스트</h2>
            <ul>
                {drinklist.map((drink, index)=>(
                    <li key={index}>{drink}</li>
                ))}
            </ul>
        </div>
    )
}

export default DrinkList;