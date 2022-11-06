import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {



	const[showAddTask, setShowAddTask]  = useState(false)

	const [tasks, setTasks] = useState( [

         {

                        'id':1,
                        'text':'buy food',
                        'day':'today',
                        'reminder':true,


                },

                {


                        'id':2,
                        'text':'travel',
                        'day':'tomorrow',
                        'reminder':true,



                },

                {

                        'id':3,
                        'text':'movies',
                        'day':'day after tomorrow',
                        'reminder':false,
                }

])


	//addtask
	const addTask = (task) => {

		const id = Math.floor(Math.random() * 10000) + 1
		const newTask = {id, ...task}
		setTasks([...tasks, newTask])

	}



	//deletetask

	const deleteTask = (id) =>{
		setTasks(tasks.filter((task) =>task.id !== id ))
	}


		const toggleReminder = (id) =>

		{
	
			setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task ))

		}

  return (
    <div className="container">
    
	  <Header title="TaskApp"  onAdd ={() =>setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
 
	  {showAddTask && <AddTask onAdd={addTask} />}



	  {tasks.length > 0 ?  (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show')}
    </div>
  );
}

export default App; 
