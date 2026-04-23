// TODO: Import from UI component library when created
// import { Button, Card } from '../components/ui';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Task Manager</h1>
      <div
        style={{
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          marginBottom: '20px',
        }}>
        <h2>UI Component Library</h2>
        <p>Explore our reusable components</p>
        <button
          style={{
            padding: '8px 16px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}>
          View Components
        </button>
      </div>
      <div>
        <h3>Getting Started</h3>
        <p>
          This is a task management application built with React 19, TypeScript,
          and Material UI.
        </p>
      </div>
    </div>
  );
}
