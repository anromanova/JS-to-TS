import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ResponseNews, ResponseSources } from '../../interfaces/interfase';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data: ResponseNews) => this.view.drawNews(data))
        );
        this.controller.init((data: ResponseNews) => this.view.drawNews(data));
        this.controller.getSources((data: ResponseSources) => this.view.drawSources(data));
    }
}

export default App;
