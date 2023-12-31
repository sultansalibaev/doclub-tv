import { reactive, ref } from "vue";
import { NewsCardSchema } from "../types/news-card"

export const news_card_list = reactive(ref<NewsCardSchema[]>([
    {
        src: 'https://go.zvuk.com/thumb/1000x0/filters:quality(75):no_upscale()/imgs/2022/10/27/10/5642711/52a31997af7293b740676eef83ced557d4f8b305.jpg',
        badges: [
            {
                mode: 'new',
                name: 'News',
            },
            {
                mode: 'new',
                name: 'Beginners',
            },
        ],
        title: 'Inflammatory bowel disease and mental disorders found to be linked',
        viewed: false
    },
    {
        src: 'https://health.24tv.ua/resources/photos/news/202111/1802025.jpg?v=1658994764000&w=840&h=472&fit=cover&output=webp&q=50',
        badges: [
            {
                mode: 'new',
                name: 'News',
            },
            {
                mode: 'new',
                name: 'Beginners',
            },
        ],
        title: 'Uzbekistan will strengthen its fight against tuberculosis',
        viewed: false
    },
    {
        src: 'https://overclockers.ru/st/r/800/-/legacy/blog/417293/453122_O.png',
        badges: [
            {
                mode: 'new',
                name: 'News',
            },
            {
                mode: 'new',
                name: 'Research',
            },
        ],
        title: 'Измерение потребительской психологии: исследование мотиваций покупателей',
        viewed: true
    },
    {
        src: 'https://i0.wp.com/beawire.com/wp-content/uploads/2022/08/photo_2022-08-07_22-55-32.jpg?resize=860%2C280&ssl=1',
        badges: [
            {
                mode: 'new',
                name: 'Files',
            },
            {
                mode: 'new',
                name: 'Beginners',
            },
        ],
        title: 'Аналитика и прогнозы основных цифровых трендов на ближайший год. PDF презентация.',
        viewed: false
    },
]))