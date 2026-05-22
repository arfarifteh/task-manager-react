## ADDED Requirements

### Requirement: User can open edit modal from task row

The system SHALL open an Edit Task modal dialog when the user clicks the edit icon on any task row.

#### Scenario: Open edit modal

- **WHEN** user clicks the edit icon button on a task row
- **THEN** a modal dialog appears with the task's current field values pre-filled

#### Scenario: Modal displays correct task data

- **WHEN** the edit modal opens for a task with title "Build Dashboard", priority "high", and due date "2026-04-25"
- **THEN** the title field shows "Build Dashboard", priority select shows "High", and due date shows "2026-04-25"

### Requirement: User can modify task fields in the modal

The system SHALL allow the user to edit title, description, priority, and due date fields within the modal.

#### Scenario: Edit title

- **WHEN** user changes the title field to "Updated Title"
- **THEN** the title field reflects the new value

#### Scenario: Edit priority

- **WHEN** user changes the priority select from "High" to "Medium"
- **THEN** the priority select reflects "Medium"

#### Scenario: Edit due date

- **WHEN** user changes the due date to "2026-06-15"
- **THEN** the due date field reflects the new value

#### Scenario: Edit description

- **WHEN** user clears the description field or enters new text
- **THEN** the description field reflects the change

### Requirement: User can save edited task

The system SHALL persist changes when the user clicks the Save button, provided validation passes.

#### Scenario: Successful save

- **WHEN** user modifies the title to "New Title" and clicks Save
- **THEN** the modal closes, the task list refreshes, and the task row shows "New Title"

#### Scenario: Save updates all modified fields

- **WHEN** user changes title, priority, and due date then clicks Save
- **THEN** all three fields are persisted and reflected in the task row

#### Scenario: Stats update after save

- **WHEN** user saves an edited task
- **THEN** the dashboard stats cards reflect the current data

### Requirement: Edit modal validates required fields

The system SHALL prevent saving when required fields are empty and display validation errors.

#### Scenario: Empty title shows error

- **WHEN** user clears the title field and clicks Save
- **THEN** the modal displays "Title is required" error and does not close

#### Scenario: Empty due date shows error

- **WHEN** user clears the due date field and clicks Save
- **THEN** the modal displays "Due date is required" error and does not close

#### Scenario: Valid form clears errors

- **WHEN** user fixes a validation error and clicks Save again
- **THEN** the error disappears and save proceeds normally

### Requirement: User can cancel editing

The system SHALL discard changes and close the modal when the user cancels.

#### Scenario: Cancel via button

- **WHEN** user clicks the Cancel button in the modal
- **THEN** the modal closes and no changes are persisted

#### Scenario: Cancel via backdrop click

- **WHEN** user clicks outside the modal (backdrop)
- **THEN** the modal closes and no changes are persisted

#### Scenario: Cancel via Escape key

- **WHEN** user presses the Escape key while the modal is open
- **THEN** the modal closes and no changes are persisted

### Requirement: Task status is not editable in the modal

The system SHALL NOT allow editing the task status field through the edit modal. Status transitions use dedicated row actions (Start, Complete).

#### Scenario: Status field not present

- **WHEN** the edit modal is open
- **THEN** there is no status field or dropdown in the form
