require('colors');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What would you like to do ?',
    choices: [
      {
        value: '1',
        name: `${'1.'.red}. Create task`,
      },
      {
        value: '2',
        name: `${'2.'.red}. List tasks`,
      },
      {
        value: '3',
        name: `${'3.'.red}. List completed tasks`,
      },
      {
        value: '4',
        name: `${'4.'.red}. List pending tasks`,
      },
      {
        value: '5',
        name: `${'5.'.red}. Complete task(s)`,
      },
      {
        value: '6',
        name: `${'6.'.red}. Delete task`,
      },
      {
        value: '0',
        name: `${'0.'.red}. Exit`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('==================='.green);
  console.log('Select an option'.red);
  console.log('===================\n'.green);

  const { option } = await inquirer.prompt(questions);
  return option;
};

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'enter'.red} to continue`,
    },
  ];
  console.log('\n');
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please insert a value';
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
};
