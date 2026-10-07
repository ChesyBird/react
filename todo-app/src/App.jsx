import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, text: '운동 하기', comlpeted: false},
    {id: 2, text: '영화 보기', comlpeted: false}
  ])

  const [inputValue, setInputValue] = useState('')

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value)
    
  }

  const handleAddTodo = () => {
    if(inputValue.trim() !== '') {
      const newTodo = {
        id: todos.length +1,
        text: inputValue,
        comlpeted: false
      }

      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  }

  // 할일 완료
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, comlpeted: !todo.comlpeted} : todo
      )
    )
  }

  // 할일 삭제
  const handleDeleteTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  

  return (
    <>
      <div className='container'>
        <h2>Todo List</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder='할 일을 입력하세요'
        />
        <button onClick={handleAddTodo}>추가</button>

        {/* 할 일 목록 */}
        <ul className='todo-list'>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.comlpeted ? 'completed' : ''}>
               <input
                type="checkbox"
                checked={todo.comlpeted}
                onChange={()=>handleToggleComplete(todo.id)}
               />
              {todo.text}
              <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App