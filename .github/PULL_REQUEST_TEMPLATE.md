## Description

<!-- Provide a brief description of the changes -->

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Refactoring/architecture improvement

## Architecture Review Checklist

<!-- All items must be checked before merging -->

### Rule 1: Feature-Based Structure

- [ ] New components are in appropriate feature folder (or `components/ui/` if shared)
- [ ] No cross-feature imports (using shared layer instead)
- [ ] Feature follows standard structure: `components/`, `hooks/`, `services/`, `types.ts`

### Rule 2: Separation of Concerns

- [ ] Presentational components don't contain API calls or business logic
- [ ] Container components handle all side effects and data fetching
- [ ] Props are properly typed with interfaces
- [ ] Components are < 150 lines OR documented reason for exception

### Rule 3: State Management

- [ ] State escalation follows: Local → Feature → Global (proven need)
- [ ] No prop drilling beyond 2 levels (using Context or hooks instead)
- [ ] Server state uses React Query/TanStack Query (not manual fetch + useState)

### Rule 4: Consistency & Patterns

- [ ] File naming follows convention (PascalCase for components, camelCase for hooks)
- [ ] Import order is correct: React → Libs → Shared → Feature → Relative
- [ ] Component structure follows template (hooks → derived state → handlers → render)
- [ ] Types are properly exported and reused

### Rule 5: Shared Layer Governance

- [ ] Components added to `components/ui/` have 3+ use cases (or documented future use)
- [ ] Shared hooks are truly generic (not feature-specific)
- [ ] No feature logic leaked into shared layer

### Rule 6: Code Quality

- [ ] All type checks pass (`pnpm type-check`)
- [ ] All lint checks pass (`pnpm lint`)
- [ ] All tests pass (`pnpm test:ci`)
- [ ] No console errors or warnings
- [ ] Accessibility considerations (ARIA labels, semantic HTML)

## Testing

<!-- Describe the testing strategy -->

- [ ] Unit tests added/updated for presentational components
- [ ] Integration tests added for container components (if applicable)
- [ ] Manual testing performed
- [ ] Tested in different browsers (if UI changes)

## Screenshots/Videos

<!-- If applicable, add screenshots or videos to help explain your changes -->

## Additional Notes

<!-- Any additional information that reviewers should know -->

### Architecture Exception Request

**If any architecture rule was not followed, explain why:**

- Rule violated:
- Reason:
- Tech Lead Approval: [ ] (Required for exceptions)

---

**Reviewers**: Please verify all architecture checklist items are complete before approving.
