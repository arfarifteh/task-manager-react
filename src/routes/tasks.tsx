// import { Link } from 'react-router-dom'; // Future use for task detail links

// Future data loading capability
// export async function loader({ request }) {
//   const response = await fetch('/api/tasks');
//   return { tasks: await response.json() };
// }

export default function TaskManagerPage() {
  // const { tasks } = useLoaderData();

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Manage your tasks efficiently with our intuitive interface.</p>
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
        }}>
        <h2>Tasks</h2>
        <p>No tasks yet. Task management features coming soon!</p>
        {/* Future: 
        {tasks.map(task => (
          <Link key={task.id} to={`/tasks/${task.id}`}>
            {task.title}
          </Link>
        ))}
        */}
      </div>
    </div>
  );
}
