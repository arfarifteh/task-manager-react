import { Outlet, Link, useLocation } from 'react-router-dom';
import { ThemeProviderWrapper } from '../theme';

export default function Root() {
  return (
    <ThemeProviderWrapper theme="light">
      <AppLayout />
      <Outlet />
    </ThemeProviderWrapper>
  );
}

function AppLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', 'aria-label': 'Navigate to home page' },
    { path: '/tasks', label: 'Tasks', 'aria-label': 'Navigate to tasks page' },
    {
      path: '/components',
      label: 'Components',
      'aria-label': 'Navigate to component library',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ margin: 0, fontSize: '2rem', color: '#2d3436' }}>
          Task Manager
        </h1>
      </header>

      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          marginBottom: '20px',
          padding: '16px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #dee2e6',
        }}>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '24px',
          }}>
          {navItems.map(item => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  aria-label={item['aria-label']}
                  style={{
                    textDecoration: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontWeight: isActive ? '600' : '400',
                    color: isActive ? '#ffffff' : '#495057',
                    backgroundColor: isActive ? '#0984e3' : 'transparent',
                    transition: 'all 0.2s ease-in-out',
                    border: isActive
                      ? '1px solid #0984e3'
                      : '1px solid transparent',
                  }}
                  className={isActive ? 'active' : ''}
                  onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = '#e9ecef';
                      e.currentTarget.style.color = '#212529';
                    }
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#495057';
                    }
                  }}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
