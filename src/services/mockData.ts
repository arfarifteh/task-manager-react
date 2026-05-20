import type { Task, ActivityItem, User } from '../types';

export const currentUser: User = {
  id: 'u1',
  name: 'Alireza',
  email: 'alireza@example.com',
};

export const mockTasks: Task[] = [
  {
    id: 't1',
    title: 'Build User Dashboard',
    description:
      'Create the main dashboard layout with stats cards, task list, and activity feed using CSS Grid.',
    status: 'pending',
    priority: 'high',
    dueDate: '2026-04-25',
    createdAt: '2026-04-15T10:00:00Z',
    updatedAt: '2026-04-15T10:00:00Z',
  },
  {
    id: 't2',
    title: 'Fix Mobile Responsiveness',
    description:
      'Ensure sidebar collapses on mobile and task list stacks properly on small screens.',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2026-04-27',
    createdAt: '2026-04-14T09:00:00Z',
    updatedAt: '2026-04-16T14:30:00Z',
  },
  {
    id: 't3',
    title: 'Write API Documentation',
    description:
      'Document all service endpoints and mock data structures for developer reference.',
    status: 'completed',
    priority: 'low',
    dueDate: '2026-04-20',
    createdAt: '2026-04-10T08:00:00Z',
    updatedAt: '2026-04-19T16:00:00Z',
    completedAt: '2026-04-19T16:00:00Z',
  },
  {
    id: 't4',
    title: 'Code Review for Auth Module',
    description:
      'Review the authentication flow including token refresh and session management logic.',
    status: 'pending',
    priority: 'high',
    dueDate: '2026-04-22',
    createdAt: '2026-04-13T11:00:00Z',
    updatedAt: '2026-04-13T11:00:00Z',
  },
  {
    id: 't5',
    title: 'Ember Integration',
    description:
      'Integrate Ember analytics SDK for tracking user interactions and performance metrics.',
    status: 'pending',
    priority: 'medium',
    dueDate: '2026-04-28',
    createdAt: '2026-04-12T07:00:00Z',
    updatedAt: '2026-04-12T07:00:00Z',
  },
  {
    id: 't6',
    title: 'Redux Refactoring',
    description:
      'Migrate legacy Redux slices to React Query for server state and local hooks for UI state.',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-04-30',
    createdAt: '2026-04-11T09:00:00Z',
    updatedAt: '2026-04-17T10:00:00Z',
  },
  {
    id: 't7',
    title: 'API Documentation Update',
    description:
      'Update Swagger docs to reflect new v2 endpoints and deprecation notices.',
    status: 'completed',
    priority: 'low',
    dueDate: '2026-04-18',
    createdAt: '2026-04-08T08:00:00Z',
    updatedAt: '2026-04-18T15:00:00Z',
    completedAt: '2026-04-18T15:00:00Z',
  },
  {
    id: 't8',
    title: 'Setup CI/CD Pipeline',
    description:
      'Configure GitHub Actions for lint, test, build, and deploy stages with environment secrets.',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2026-05-01',
    createdAt: '2026-04-16T10:00:00Z',
    updatedAt: '2026-04-17T12:00:00Z',
  },
];

export const mockActivities: ActivityItem[] = [
  {
    id: 'a1',
    type: 'completed',
    message: 'You completed',
    highlightText: 'Write API Documentation',
    timestamp: '2026-04-19T11:00:00Z',
  },
  {
    id: 'a2',
    type: 'created',
    message: 'New task',
    highlightText: 'Redux Refactoring',
    timestamp: '2026-04-18T09:00:00Z',
  },
  {
    id: 'a3',
    type: 'deadline',
    message: 'Code Review for Auth Module due soon!',
    highlightText: 'Code Review for Auth Module',
    timestamp: '2026-04-17T08:00:00Z',
  },
];
