import React, { useState } from 'react';

//include images into your bundle

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');
	const [hovered, setHovered] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (newTask) {
			setTasks([...tasks, newTask]);
			setNewTask('');
		}
	}

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleSubmit(event);
		}
	}

	const handleDelete = (index) => {
		setTasks(tasks.filter((task, i) => i !== index));
	}

	return (
		<div className='container parent'>
			<form className="form-group" onSubmit={handleSubmit}>
				<input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={handleKeyPress} placeholder="Add a task" />
			</form>
			{tasks.length > 0 ? (
				<ul>
					{tasks.map((task, index) => (
						
						<li key={index} onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(-1)}>
							<i class="fa-solid fa-star icono"></i> {task}
							<a className={index === hovered ? 'show' : 'd-none'} onClick={() => handleDelete(index)}><i className="fa-regular fa-trash-can"></i></a>
						</li>
					))}
				</ul>
			) : (
				<p>No tasks, add a task</p>
			)}
		</div>
	);
}

export default Home;
