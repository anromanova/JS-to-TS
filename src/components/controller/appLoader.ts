import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '30c064abd0544897b16c8e835996d88d', // получите свой ключ https://newsapi.org/ 'https://newsapi.org/v2/'
        });
    }
}

export default AppLoader;
