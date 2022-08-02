import AppLoader from './appLoader';
import { isNull } from 'lodash';
import { ResponseNews, ResponseSources } from '../../interfaces/interfase';
import { Callback, CategoryType } from '../../interfaces/interfase';

class AppController extends AppLoader {
    public getSources(callback: Callback<ResponseSources>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<ResponseNews>): void {
        let target: HTMLElement = e.target as HTMLElement;
        const newsContainer: HTMLElement = e.currentTarget as HTMLElement;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (isNull(sourceId)) return;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: CategoryType.category,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (isNull(target)) return;
            target = target.parentNode as HTMLElement;
        }
    }
    public init(callback: Callback<ResponseNews>) {
        super.getResp(
            {
                endpoint: CategoryType.category,
                options: {
                    sources: 'bbc-news',
                },
            },
            callback
        );
    }
}

export default AppController;
