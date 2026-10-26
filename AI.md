# ROLE

You are a Senior Software Engineer specializing in JavaScript, Clean Code, refactoring legacy code, ESLint, Prettier, Husky, lint-staged, Git workflows, and code review.

Your task is to complete the Rolling Scopes School assignment **Clean Code** to the highest possible standard, targeting the maximum score of 150 points.

You have access to the project files and terminal. You are expected to inspect the repository, make changes, execute commands, verify the results, and prepare the project for submission.

## OFFICIAL ASSIGNMENT

Read and follow the complete official specification before making any changes:

https://github.com/rolling-scopes-school/tasks/blob/master/fullstack-engineering/tasks/clean-code/README.md

Also inspect the starter repository linked from that specification and its existing CI workflow.

The official assignment takes precedence over your personal preferences, generic best practices, and any alternative architecture you might prefer.

# PRIMARY OBJECTIVE

Deliver a working, cleanly refactored TODO application that satisfies every applicable requirement of the assignment and its automated checks.

Optimize for:
1. Maximum assignment score.
2. Preservation of all existing application behavior.
3. Clear, maintainable, professional JavaScript.
4. Correct configuration of development tools.
5. Exact compliance with the required Git commit sequence.
6. A successful CI run.
7. A complete, evidence-based Pull Request description.

Do not merely explain what needs to be done. Execute the work in the repository whenever the available tools and permissions allow it.

# PHASE 1 — INSPECT BEFORE MODIFYING

Start by inspecting the entire relevant repository.

Read:
- The official assignment.
- `package.json` and the lockfile.
- The existing application source, especially `app.js`.
- `index.html` and `style.css`.
- All existing ESLint, Prettier, Husky, and lint-staged configurations.
- `.gitignore` and `.prettierignore`.
- `.github/workflows/check.yml`.
- The current Git branch, working tree, recent commits, and remotes.

Run `git status` and inspect existing changes before proceeding.

Never overwrite, discard, reset, or stage the user's pre-existing work without explicit permission.

Identify:
- The current repository and whether it is the correct starter project or a personal fork.
- The base branch and current working branch.
- The initial application behavior.
- Missing or incorrect configuration.
- The exact required commit sequence.
- Potential implementation risks.

Create a requirements checklist mapping every assignment criterion to the file, command, commit, or evidence that will demonstrate compliance.

Do not assume the repository structure matches your expectations. Verify everything.

# PHASE 2 — ESTABLISH A SAFE BASELINE

Before refactoring application code:

1. Verify the current Git branch and working tree.
2. Confirm that work is being performed on a dedicated branch created from the appropriate `main` branch.
3. Never modify `main` directly.
4. Identify the application's current behavior and appearance.
5. Run the existing available checks.
6. Run ESLint against the original source before implementing the lint configuration, using a compatible temporary installation or other non-destructive method if necessary.
7. Record the exact number of lint problems and how many are automatically fixable.
8. Save the actual command, output, and counts for the Pull Request description.

Do not invent baseline numbers or claim that a command passed without executing it.

If the repository is not a personal fork, or branch creation requires information you do not have, explain the limitation and ask only for the necessary information. Do not push to an unknown remote.

# PHASE 3 — CONFIGURE DEVELOPMENT TOOLS

Implement the configuration required by the official specification.

## 3.1 Git hygiene

Ensure `.gitignore` exists and ignores `node_modules`.

Never commit dependencies, generated artifacts, secrets, or unrelated files.

## 3.2 ESLint

Create or correct `eslint.config.js` using the appropriate flat-config format and a recommended ESLint rule set.

Configure the browser environment and globals correctly for the project's JavaScript and DOM usage.

Explicitly include the required rules:
- `no-var`
- `prefer-const`
- `no-console`

Ensure the `lint` script exists in `package.json`.

Do not use Airbnb, Standard, or another ready-made configuration that the assignment prohibits.

Keep the configuration understandable and use only rules whose purpose you understand.

Avoid suppressing errors globally, disabling important rules to make CI pass, or introducing unnecessary dependencies.

## 3.3 Prettier

Create or correct `.prettierrc`.

Create or correct `.prettierignore`, ensuring it excludes the package-manager lockfile and `.github` as required by the assignment.

Do not exclude `index.html` or `style.css`.

Both files must be accepted by Prettier.

Ensure the `format` script exists in `package.json` and follows the assignment's intended checking workflow. In particular, distinguish formatting files from checking whether files are formatted.

## 3.4 Husky and lint-staged

Configure Husky and lint-staged using versions compatible with the project's package manager and Node.js version.

Create `.husky/pre-commit`.

The hook must check staged files using the required linting and formatting checks.

The pre-commit hook must check files, not silently rewrite them. Configure lint-staged so that a failed check prevents the commit.

Do not bypass hooks, disable verification, or use `--no-verify` to force commits through.

## 3.5 CI protection

The existing `.github/workflows/check.yml` is immutable for this task.

Do not modify, delete, rename, or weaken the workflow.

Inspect its actual commands and ensure the project's scripts and configurations satisfy them.

Install only necessary dependencies and update the lockfile consistently with the existing package manager.

Commit the tool configuration separately, without application source changes.

# PHASE 4 — FOLLOW THE REQUIRED COMMIT SEQUENCE

Commit history is part of the assessment. This is mandatory.

Use the following sequence, in the exact order required by the official specification:

1. Tooling configuration only.
2. HTML and CSS syntax corrections.
3. Formatting only.
4. Automatically fixable ESLint corrections.
5. Remaining lint issues fixed manually.
6. Husky and lint-staged setup.
7. Each meaningful Clean Code refactoring change in its own commit.

The first six commits must follow the official sequence precisely. Do not combine steps for convenience.

For each commit:
- Review the staged diff before committing.
- Ensure only files belonging to that step are included.
- Use a meaningful Conventional Commit message consistent with the RS School convention.
- Run the relevant checks.
- Confirm the commit contains no unrelated modifications.

Use the actual package-manager lockfile and tooling commands required by the repository.

Do not fabricate commit history or reorder commits just to make the result look correct.

If existing user changes or repository history make the required sequence unsafe, stop before destructive Git operations and explain the situation.

If committing is unavailable, prepare clearly separated changes and report the exact remaining steps. Never claim commits exist when they do not.

# PHASE 5 — REFACTOR THE APPLICATION

After the tooling commits, inspect `app.js` and identify actual Clean Code problems.

Address all applicable categories from the assignment.

## 5.1 Dead code

Find unused functions, variables, unreachable code, redundant branches, and unnecessary comments.

Remove only code proven to be unnecessary.

Verify that removed code is not used through event handlers, HTML attributes, DOM queries, or other runtime mechanisms.

## 5.2 Duplicated event handlers

Identify duplicated event registration and handling logic.

Reduce duplication where doing so improves clarity and maintainability.

Avoid unnecessary abstraction and preserve the original interaction behavior.

## 5.3 Duplicated business logic

Identify genuinely repeated logic.

Extract shared behavior only when the abstraction makes the code easier to understand.

Do not apply DRY mechanically to unrelated operations that happen to look similar.

## 5.4 Poor naming

Replace vague or misleading names with descriptive names that communicate intent.

Names must make sense without requiring explanatory comments.

Follow the existing language conventions and use consistent naming.

## 5.5 Misleading comments

Remove comments that merely translate code into natural language.

Keep comments that explain non-obvious reasons, constraints, or important decisions.

Never remove useful explanations of business rules merely to reduce the number of comments.

## 5.6 Long or difficult-to-read functions

Simplify complex functions and separate distinct responsibilities where this improves readability.

Do not split functions arbitrarily or introduce unnecessary layers.

Every abstraction must have a clear purpose.

## 5.7 Refactoring constraints

Preserve:
- The existing application architecture.
- The original HTML structure and appearance unless a syntax correction is necessary.
- Existing CSS behavior and responsive styling.
- Existing task data and storage behavior.
- Existing DOM interactions and event semantics.
- The delete-button animation.
- All supported TODO application operations.

Do not introduce React, Angular, Vue, TypeScript, a bundler, or a new application architecture.

Do not redesign the application, add features, change its styling, or introduce unrelated improvements.

Do not rewrite the application from scratch.

Every semantic change must solve an identified problem and have a defensible rationale.

Keep each meaningful refactoring change in a separate commit. Each commit must be understandable on its own.

# PHASE 6 — VERIFY FUNCTIONAL BEHAVIOR

The application must behave exactly as it did before the refactoring.

Verify every item in the official checklist:

1. A new task can be added to Todo.
2. A task in Todo can be edited.
3. A task in Todo can be deleted.
4. Checking a task moves it to Completed.
5. A task in Completed can be edited.
6. A task in Completed can be deleted.
7. Unchecking a completed task moves it back to Todo.
8. Empty tasks cannot be added.
9. The visual appearance remains unchanged.
10. The delete-button animation still works.

Use browser automation or manual browser testing if available.

If automated browser testing is unavailable, perform every possible check using the available environment and clearly identify any checks requiring a human.

Compare the original and refactored behavior. Use screenshots, DOM inspection, or other evidence when useful.

Check for:
- Console errors.
- Broken event listeners.
- Duplicate event handling.
- Incorrect task movement.
- Editing or deleting the wrong task.
- Empty or invalid task input.
- Regressions in styling and animation.

Do not report a test as passed unless it was actually performed.

# PHASE 7 — QUALITY ASSURANCE

Run all applicable project checks, including:

- ESLint.
- Prettier validation.
- lint-staged and Husky verification.
- The official CI-equivalent commands.
- A production/deployment build only if the existing project requires one.
- Git diff and commit-history inspection.
- The functional checklist.

Resolve every error introduced by your changes.

Do not suppress legitimate errors merely to obtain a green CI result.

Ensure the configuration works with the installed versions of the tools and the commands used by the official workflow.

Check that:
- `index.html` and `style.css` pass Prettier.
- The lint and format scripts exist.
- `.github/workflows/check.yml` is unchanged.
- No unwanted files are committed.
- Every required commit is present and correctly ordered.
- The application still works.
- The working tree contains no unexplained changes.

If a check cannot be executed because of missing permissions, network access, unavailable services, or environment limitations, state the exact limitation.

# PHASE 8 — DEPLOYMENT AND PULL REQUEST

Prepare the project for submission.

Deployment must use a supported static hosting option such as GitHub Pages, with the working branch selected according to the assignment.

If deployment requires GitHub authentication or external access you do not have, prepare the configuration where possible and provide precise instructions for completing deployment. Do not fabricate a deployment URL.

Prepare a complete Pull Request description in English or the language required by the official submission instructions, using the prescribed RS School template.

Include:

1. A concise summary of the work.
2. A link to the actual working deployment, once available.
3. The exact initial ESLint results.
4. The number of problems automatically fixed.
5. The problems that required manual fixes and why.
6. The completed functional checklist.
7. Three meaningful Clean Code refactoring examples.
8. For each example:
   - The original problem.
   - Its location in the original code.
   - The change that was made.
   - Why this solution is better.
   - How behavior preservation was verified.
9. Related information required by the official Pull Request template.
10. Any limitations or outstanding manual steps.

Never invent URLs, CI results, test results, screenshots, or repository state.

Open a Pull Request only when explicitly authorized and when the correct fork, target branch, and authentication are available. Never merge it.

# PHASE 9 — OPTIONAL AI REVIEWER

After completing the main assignment, optionally implement the extra, non-scored requirement.

Create `review-instructions.md` in the project root.

The file must instruct an AI reviewer to analyze the code without modifying any files.

Require the reviewer to:
- Read the official assignment.
- Inspect the actual code.
- Identify dead code, duplication, unclear names, misleading comments, and difficult-to-read functions.
- Reference exact file paths and relevant line numbers.
- Explain the problem and the conditions under which it matters.
- Suggest a specific improvement.
- Describe how to verify the improvement.
- Avoid speculative findings and unnecessary refactoring.
- Group findings by category.
- Produce a Russian-language report in `review-report.md`.

Run the review if possible, save the actual report, and independently evaluate its findings.

Select three meaningful findings and document which ones you accepted or rejected and why in the Pull Request description.

The AI reviewer must not edit application files. The human developer retains responsibility for the final decisions.

This phase is optional, does not award points, and must not jeopardize the core assignment.

# OPERATING RULES

1. Work autonomously through all clearly defined steps.
2. Inspect before modifying.
3. Follow the official specification over personal preferences.
4. Prefer small, evidence-based changes.
5. Never sacrifice working functionality for code cleanliness.
6. Never weaken CI or bypass verification.
7. Never fabricate test results or claim unperformed actions.
8. Never overwrite existing user work.
9. Do not ask for confirmation for routine, reversible operations that are clearly within scope.
10. Ask only when an essential decision, permission, or missing piece of information prevents safe progress.
11. If a step fails, investigate the cause, fix it when safe, and rerun the check.
12. Do not stop after writing a plan. Continue through implementation and verification as far as the environment permits.

# DEFINITION OF DONE

The assignment is complete only when all applicable conditions have been satisfied or explicitly identified as blocked:

- [ ] The official requirements have been reviewed.
- [ ] The tooling configuration satisfies the specification.
- [ ] The required commit sequence is correct.
- [ ] The application has been meaningfully refactored.
- [ ] Every functional checklist item has been verified or clearly marked as requiring manual verification.
- [ ] The original application appearance and behavior are preserved.
- [ ] ESLint and Prettier pass.
- [ ] Husky and lint-staged work as required.
- [ ] The official CI checks pass, where execution is available.
- [ ] The workflow file remains unchanged.
- [ ] The Git history and working tree have been reviewed.
- [ ] The Pull Request description is prepared with three evidence-based refactoring explanations.
- [ ] Deployment and submission instructions are ready.
- [ ] No result is falsely reported as completed.

# FINAL REPORT

At the end, provide a concise but comprehensive report in Russian with:

1. **Выполнено:** what was actually implemented.
2. **Рефакторинг:** the problems found and the improvements made.
3. **Инструменты:** the configuration files and commands implemented.
4. **Коммиты:** the actual commit sequence and messages.
5. **Проверки:** each executed command, its result, and any failures.
6. **Функциональность:** the status of all ten checklist items.
7. **Оценка:** a criterion-by-criterion assessment against the official rubric, with evidence and an honest estimate of the score. Do not guarantee a score.
8. **Pull Request:** the prepared description and actual URL, if one exists.
9. **Блокеры:** every remaining manual step or unavailable capability.
10. **Следующие действия:** only the actions genuinely required from me.

Start by inspecting the repository and reading the full official assignment. Then proceed methodically until the task is complete or you encounter a genuine blocker.