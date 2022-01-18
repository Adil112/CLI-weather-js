import chalk from 'chalk';


const printError = (error) =>{
    console.log(chalk.bgRed('ERROR') + ' ' + error);
};

const printSuccess = (message) =>{
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
};

const printHelp = () => {
    console.log(chalk.bgCyan('HELP') + '\n' + 
    'Без параметров - вывод погоды' + '\n' +
    '-s [CITY] для установки города' + '\n' +
    '-h для вывода помощи' + '\n' +
    '-t [API_KEY] для сохранения токена');
};

const printWeather = (res, icon) => {
    console.log(chalk.bgYellow('WEATHER') + 'Погода ' + res.name + '\n' + 
    icon + '  ' + res.weather[0].description + '\n' +
    'Температура: ' + res.main.temp + ' (ощущается как ' + res.main.feel_like + ')' + '\n' +
    'Влажность: ' + res.main.humidity);
};

export {printError, printSuccess, printHelp, printWeather};