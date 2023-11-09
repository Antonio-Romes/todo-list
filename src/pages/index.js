import { useState } from "react"; 
import  Todo from '@/components/Todo'
import TodoForm from "@/components/TodoForm";
import Search from "@/components/Search";
import Filter from "@/components/Filter";

export default function Home() {

  const [todos, setTodos] = useState(
    [
      {
      id: '1',
      text: 'Criar Funcionalidade X no Sistema',
      category: "Trabalho",
      isCompleted: false,
      },
      {
        id: '2',
        text: 'Ir para a academia',
        category: "Pessoal",
        isCompleted: false,
      },
      {
        id: '3',
        text: 'Estudar React',
        category: "Estudo",
        isCompleted: false,
      },
      {
        id: '4',
        text: 'Estudar Javascript',
        category: "Estudo",
        isCompleted: true,
      },
    ]
  ); 
  const addTodo = (text,category) =>{
    const newTodo = [...todos,
      {
        id: Math.random().toString(),
        text,
        category,
        isCompleted:false
      },
    ];
    setTodos(newTodo);
    }
  
  const removeTodo = (id) => { 
     const filteredTodos = [...todos].filter((todo)=>{ 
      if(todo.id != id){
        return todo;
      }
    });

    setTodos(filteredTodos);
    }  

    const completeTodo = (id) => { 
      const newTodo = [...todos].map((todo)=>{ 
        if(todo.id == id){
          todo.isCompleted = true;
        } 
        return todo;
     });
 
     setTodos(newTodo);
     } 

     const [search, setSearch] = useState("");

     const [filter, setFilter] = useState("All");
     const [sort, setSort] = useState("Asc"); 

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {
          todos
          .filter((todo) => 
          filter === "All"
          ? true 
          : filter === "Completed"
          ? todo.isCompleted
          : !todo.isCompleted 
          )          
          .filter((todo) => 
               todo.text.toLowerCase().includes(search.toLowerCase())
           )
           .sort((a,b) => sort === "Asc" ?
                a.text.localeCompare(b.text) :
                b.text.localeCompare(a.text) )
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}
