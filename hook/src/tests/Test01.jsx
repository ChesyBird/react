const Test01 = () => {

    const users = [
        {id:1, name: "홍길동"},
        {id:2, name: "이순신"}
    ];

    return (
        <div>
            <h2>Test01</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default Test01;