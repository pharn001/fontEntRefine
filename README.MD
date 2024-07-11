# Boilerplate for RAD frontend

the application using refinejs, nextjs, storybook and tailwindcss

### Create .env File

To set up the environment variables for this project, create a `.env` file from the `.env.example` file by running the following command in your terminal:

    cp .env.example .env

### Install dependency

    npm install

## Run app

    npm run dev

and go url: <http://localhost:3000/>

## Run story book

    npm run storybook

### Run storybook testing code coverage

    npm run test-storybook -- --coverage

### Generate report

    npx nyc report --reporter=lcov -t coverage/storybook --report-dir coverage/storybook

and go url: <http://localhost:6006/>

## Quality Control

### Check

    npm run lint

### Fix automatically

    npm run lint -- --fix

### Duplicaiton

    jscpd --pattern "src/**/*.ts*"

### line of code

    sloc --details --format cli-table --keys total,source,comment src/app  >> app_loc.txt
