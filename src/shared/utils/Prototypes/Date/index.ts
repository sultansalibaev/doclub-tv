// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Date {
    getWeekNumber: () => number
    getMonthName: () => string
    get_dmY: () => string
    format: (format: string, bool?: boolean) => string
    plus: (type: string, count: number) => Date
    minus: (type: string, count: number) => Date
}

const dateTypes = {
    hour: 'etHours',
    date: 'etDate',
    'week-day': 'etDay',
    month: 'etMonth',
    year: 'etFullYear'
}

// eslint-disable-next-line no-extend-native
Date.prototype.plus = function (type, count) {
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    this['s' + dateTypes[type]](this['g' + dateTypes[type]]() + count)
    return this
}
// eslint-disable-next-line no-extend-native
Date.prototype.minus = function (type, count) {
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    this['s' + dateTypes[type]](this['g' + dateTypes[type]]() - count)
    return this
}

enum dateFormats {
    Y = 'getFullYear',
    m = 'getMonth',
    d = 'getDate',
    h = 'getHours',
    i = 'getMinutes',
    s = 'getSeconds',
    w = 'getDay'
}
const month_names = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// const weeks = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function getFormatDate(date: number) {
    if (date < 10) {
        return '0' + date.toString()
    }
    return date
}

// eslint-disable-next-line no-extend-native
Date.prototype.getMonthName = function () {
    return month_names[this.getMonth()];
}

const currentYear = new Date().getFullYear();
// eslint-disable-next-line no-extend-native
Date.prototype.get_dmY = function () {
    let dateYear = this.getFullYear();
    return `${this.format('d', true)} ${month_names[this.getMonth()]}` + (
        currentYear != dateYear ? ` ${dateYear}` : ''
    );
}

// eslint-disable-next-line no-extend-native
Date.prototype.format = function (format: string, bool: boolean = false) {
    return Object.keys(dateFormats).reduce((oldFormat: string, dateFormat) => {
        if (oldFormat.includes(dateFormat)) {
            let plus = 0

            if (dateFormat === 'm') {
                plus = 1
            }

            let formatDate

            if (dateFormat === 'w') {
                formatDate = this[dateFormats[dateFormat]]()
                if (formatDate === 0) {
                    formatDate = 7
                }
                formatDate = bool ? weeks[this[dateFormats[dateFormat]]()] : formatDate
            } else {
                // @ts-expect-error
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                const format_view = bool && dateFormat === 'm' ? months[this[dateFormats[dateFormat]]()] : plus + this[dateFormats[dateFormat]]()
                formatDate = format_view
            }

            formatDate = bool && dateFormat == 'd' ? formatDate : getFormatDate(formatDate) as string;

            return oldFormat.replace(dateFormat, formatDate)
        } else {
            return oldFormat
        }
    }, format)
}
