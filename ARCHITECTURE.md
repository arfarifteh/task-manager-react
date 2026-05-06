# Task Manager React - Architecture Guidelines

> **Rule-Based Architecture Document** - All team members must follow these principles

## Core Philosophy

**Progressive Complexity Principle**

- Start simple, add complexity only when proven necessary
- Local state → Feature state → Global state (in that order)
- Small components → Shared components → Design system (when reused 3+ times)

---

## Rule 1: Feature-Based Structure (MANDATORY)

### Structure

```
src/
├── features/              # Domain features (OWNERSHIP BY DOMAIN)
│   ├── tasks/            # Task management domain
│   │   ├── components/   # Task-specific UI
│   │   ├── hooks/        # Task business logic
│   │   ├── services/     # Task API layer
│   │   └── types.ts      # Task TypeScript definitions
│   └── auth/             # Authentication domain
├── components/ui/        # SHARED design system only
├── shared/               # Cross-cutting concerns
│   ├── hooks/            # Generic hooks (useDebounce, etc.)
│   ├── services/         # API client, error handling
│   └── utils/            # Date, validation, formatting
└── routes/               # React Router co-located routes
```

### Enforcement

- ❌ **FORBIDDEN**: Creating components in random locations
- ❌ **FORBIDDEN**: Cross-feature imports (use shared layer instead)
- ✅ **REQUIRED**: Every feature must have the same internal structure
- ✅ **REQUIRED**: Shared components must be truly reusable (3+ use cases)

---

## Rule 2: Separation of Concerns (MANDATORY)

### Pattern: Container/Presentational

```typescript
// ✅ CORRECT: Presentational Component (Pure UI)
// src/features/tasks/components/TaskCard.tsx
interface TaskCardProps {
  task: Task;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskCard({ task, onComplete, onDelete }: TaskCardProps) {
  return (
    <Card>
      <CardHeader title={task.title} />
      <CardBody>{task.description}</CardBody>
      <CardActions>
        <Button onClick={() => onComplete(task.id)}>Complete</Button>
        <Button onClick={() => onDelete(task.id)} variant="danger">Delete</Button>
      </CardActions>
    </Card>
  );
}

// ✅ CORRECT: Container Component (Business Logic)
// src/features/tasks/components/TaskCardContainer.tsx
export function TaskCardContainer({ taskId }: { taskId: string }) {
  const { data: task, isLoading } = useTask(taskId);
  const completeMutation = useCompleteTask();
  const deleteMutation = useDeleteTask();

  if (isLoading) return <SkeletonCard />;
  if (!task) return <NotFound />;

  return (
    <TaskCard
      task={task}
      onComplete={completeMutation.mutate}
      onDelete={deleteMutation.mutate}
    />
  );
}
```

### Enforcement

- ❌ **FORBIDDEN**: API calls in presentational components
- ❌ **FORBIDDEN**: Business logic in UI components
- ❌ **FORBIDDEN**: Mixing data fetching with UI rendering
- ✅ **REQUIRED**: Presentational components receive data via props only
- ✅ **REQUIRED**: Container components handle all side effects

### Component Size Rule

```typescript
// ✅ CORRECT: Split when >150 lines or multiple responsibilities
// TaskList.tsx (150 lines - keep together)

// ❌ WRONG: Over-splitting (60 lines each, tightly coupled)
// TaskListHeader.tsx + TaskListBody.tsx + TaskListFooter.tsx

// ✅ CORRECT: Split when responsibilities differ
// TaskFilters.tsx (filtering logic)
// TaskList.tsx (display logic)
// TaskPagination.tsx (pagination logic)
```

---

## Rule 3: State Management Strategy (MANDATORY)

### Escalation Rules

```typescript
// LEVEL 1: Local State (ALWAYS START HERE)
// Use when: Component-only state, no sharing needed
function TaskInput() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  return <input value={value} onChange={setValue} />;
}

// LEVEL 2: Feature State (ESCALATE WHEN: 2+ components need it)
// Use when: Multiple components in same feature need state
// src/features/tasks/hooks/useTaskForm.ts
export function useTaskForm() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  const addTask = (task: Omit<Task, 'id'>) => {
    setTasks(prev => [...prev, { ...task, id: crypto.randomUUID() }]);
  };

  const filteredTasks = tasks.filter(t =>
    filter === 'all' ? true : t.status === filter
  );

  return { tasks: filteredTasks, addTask, filter, setFilter };
}

// LEVEL 3: Global State (ESCALATE WHEN: Cross-feature needed)
// Use when: Multiple features need same state OR persistent state
// src/shared/stores/useAuthStore.ts (Zustand)
// src/shared/stores/useThemeStore.ts (Zustand)
```

### Decision Matrix

| Scenario                  | State Level | Example                                |
| ------------------------- | ----------- | -------------------------------------- |
| Input value, local UI     | **Local**   | `useState` in component                |
| Form data within feature  | **Feature** | Custom hook in `features/tasks/hooks/` |
| User auth, theme, sidebar | **Global**  | Zustand store in `shared/stores/`      |
| Server data caching       | **Server**  | React Query / TanStack Query           |

### Prop Drilling Rule

```typescript
// ❌ FORBIDDEN: 3+ levels of prop drilling
<App tasks={tasks} setTasks={setTasks} />
  → <Dashboard tasks={tasks} setTasks={setTasks} />
    → <TaskList tasks={tasks} setTasks={setTasks} />
      → <TaskItem tasks={tasks} setTasks={setTasks} />

// ✅ REQUIRED: Use Context or Feature Hook at 3rd level
// src/features/tasks/context/TaskContext.tsx
// OR
// src/features/tasks/hooks/useTasks.ts (with internal state)
```

---

## Rule 4: Consistency & Patterns (MANDATORY)

### File Naming Convention

```typescript
// ✅ REQUIRED: Consistent naming
// Components: PascalCase.tsx
TaskCard.tsx;
TaskList.tsx;
TaskForm.tsx;

// Hooks: camelCase starting with 'use'
useTasks.ts;
useTaskForm.ts;
useTaskMutations.ts;

// Services: camelCase
// API calls
taskApi.ts;
authApi.ts;

// Types: PascalCase with 'Types' suffix (optional)
// OR just types.ts for feature-level
taskTypes.ts;
userTypes.ts;

// Utils: camelCase
formatDate.ts;
validateTask.ts;
```

### Feature Structure Rule

Every feature MUST follow this exact structure:

```
features/[feature-name]/
├── components/           # React components
│   ├── index.ts         # Barrel export
│   └── [Component].tsx  # PascalCase
├── hooks/               # Feature-specific hooks
│   ├── index.ts
│   └── use[Hook].ts     # camelCase
├── services/            # API layer
│   └── [feature]Api.ts
├── types.ts            # Feature types
└── utils/              # Feature utilities (optional)
    └── [utility].ts
```

### Import Order Rule

```typescript
// ✅ REQUIRED: Import order (enforced by ESLint)
import React from 'react'; // 1. React
import { useQuery } from '@tanstack/react-query'; // 2. External libraries
import { Button } from '@/components/ui/Button'; // 3. Shared components
import { useTasks } from '../hooks/useTasks'; // 4. Feature imports
import { TaskCard } from './TaskCard'; // 5. Relative imports
import styles from './TaskList.module.css'; // 6. Styles/assets
```

### Component Structure Rule

```typescript
// ✅ REQUIRED: Component organization
export function TaskCard({ task, onComplete }: TaskCardProps) {
  // 1. Hooks (always at top)
  const theme = useTheme();
  const { data } = useRelatedTasks(task.id);

  // 2. Derived state / memoized values
  const isOverdue = useMemo(() =>
    new Date(task.dueDate) < new Date(),
    [task.dueDate]
  );

  // 3. Event handlers
  const handleComplete = () => {
    onComplete(task.id);
  };

  // 4. Early returns
  if (!task) return null;

  // 5. Render
  return (
    <Card>
      {/* Component JSX */}
    </Card>
  );
}

// 6. Types at bottom (or separate file)
interface TaskCardProps {
  task: Task;
  onComplete: (taskId: string) => void;
}
```

---

## Rule 5: Shared Layer Governance (MANDATORY)

### Promotion Rules

```typescript
// ❌ FORBIDDEN: Adding to shared layer without 3+ use cases
// Adding Button to components/ui/ when only used in 1 feature

// ✅ REQUIRED: Prove reusability before promotion
// Step 1: Create in feature
// features/tasks/components/Button.tsx (initially)

// Step 2: Use in multiple features
// features/auth/components/Button.tsx (copy)
// features/settings/components/Button.tsx (copy)

// Step 3: Extract to shared layer
// components/ui/Button.tsx (when 3+ use cases confirmed)
```

### Shared Layer Structure

```
shared/                    # Cross-cutting concerns
├── components/ui/        # Design system (REUSABLE ONLY)
│   ├── Button/
│   ├── Card/
│   ├── Input/
│   └── index.ts
├── hooks/                # Generic hooks
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   └── useWindowSize.ts
├── services/             # API infrastructure
│   ├── apiClient.ts     # Axios/fetch config
│   ├── errorHandler.ts
│   └── queryClient.ts   # React Query config
└── utils/                # Utilities
    ├── date.ts
    ├── validation.ts
    └── formatting.ts
```

---

## Rule 6: Code Quality Gates (MANDATORY)

### Pre-Commit Requirements

```bash
# All checks must pass before commit
pnpm type-check    # TypeScript compilation
pnpm lint          # ESLint rules
pnpm test:ci       # Unit tests (if applicable)
```

### PR Review Checklist

- [ ] Feature structure follows Rule 1
- [ ] Presentational/Container separation follows Rule 2
- [ ] State management follows Rule 3 escalation
- [ ] Naming conventions follow Rule 4
- [ ] Shared layer governance follows Rule 5
- [ ] No cross-feature imports (use shared layer)
- [ ] Component < 150 lines OR documented reason for exception

---

## Anti-Patterns (STRICTLY FORBIDDEN)

### ❌ Feature Sprawl

```typescript
// DON'T: Create features for minor functionality
features/
├── user-create/
├── user-edit/
├── user-delete/
└── user-profile/

// DO: Group related domains
features/
└── user-management/
    ├── components/
    │   ├── UserCreate.tsx
    │   ├── UserEdit.tsx
    │   └── UserProfile.tsx
```

### ❌ Over-Engineering

```typescript
// DON'T: Abstractions without 2-3 use cases
// Creating a generic "ResourceCard" for just Task and Project

// DO: Wait for duplication
// TaskCard.tsx
// ProjectCard.tsx
// → THEN extract ResourceCard.tsx when patterns emerge
```

### ❌ State Management FOMO

```typescript
// DON'T: Jump to Redux immediately
function App() {
  const [user, setUser] = useState(); // Start here
}

// DO: Escalate progressively
// 1. Local state (useState)
// 2. Feature state (custom hook)
// 3. Global state (Zustand - when proven needed)
```

---

## Migration Path

### For Existing Code

1. **Phase 1**: New features follow rules strictly
2. **Phase 2**: Refactor old features during feature work
3. **Phase 3**: Dedicated refactoring sprint for critical paths

### Gradual Adoption

```typescript
// Legacy code (allowed temporarily)
src/
├── components/          # Old structure
├── pages/              # Old structure
└── features/           # New structure (new code here)

// Goal: Move everything to features/ over time
```

---

## Success Metrics

- **Consistency**: 90%+ of features follow structure exactly
- **Testability**: Presentational components have 80%+ test coverage
- **Reusability**: Shared components used in 3+ locations
- **Simplicity**: Average component size < 100 lines
- **Performance**: Minimal re-renders (React DevTools Profiler)

---

## Questions & Exceptions

**Who approves exceptions?**

- Tech Lead approval required
- Document reason in PR description
- Review in next architecture meeting

**When to update this document?**

- Quarterly review
- When patterns prove problematic
- When new best practices emerge

---

**Document Owner**: Alireza Farifteh  
**Last Updated**: April 15, 2026  
**Version**: 1.0  
**Enforcement**: Pre-commit hooks + PR reviews
