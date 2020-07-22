# dxxglas.xyz

## About

project to create a personal portfolio, using React and Typescript.

## Development

### To create new branches

- In this repository, the branches must follow this model:
    - `main`: production
    - `develop`: development
    - `feature-issue`: developing issues
    - `bugfix-issue`: adjustment issues

- Commits must be made in English, following the model:
    - **[first-letter]-issue** + : + description = `f-issue: it was done`

### To run this project

1. Clone this repository.
2. Run `$ npm install` and `$ npm start`
3. The project will be displayed in `http://localhost:3000`

### To create pull requests

1. In your **branch-child**, the one you want to join with the main branch, run `$ git push` to update it in the remote repository.
2. Execute `$ git checkout branch-main` and then `$ git pull` to update **main branch** in the local repository.
3. Run `$ git checkout branch-child` and then `$ git pull` to confirm that the **child branch** is updated in the local repository.
4. In **child branch**, run `$ git rebase branch-main` to start **rebase**.
5. If there are conflicts:
    1. Open *VS Code* to check conflicts and make adjustments
    2. Run `$ git add .` to *add* changes
    3. Confirm modified files with `$ git status`
    4. Run `$ git rebase --continue` to continue the rebase
    5. If there are new conflicts, repeat the previous steps
6. Run `$ git push` to update the remote repository with rebase changes
7. Open the `Pull Request` from the **child branch** to the **main branch**
