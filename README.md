# Tiffany [The Entropy Frontend]
Репозиторий визуальной части проекта, обитель разработчиков интерфейсов.

## Запустить проект

```
npm ci
npm start
```

## Технологический стек

- React 18
- Typescript
- GSAP
- TSS
- Webpack 5

## Структура проекта

Проект современный - пытаемся идти в Feature-sliced design.
Корневая папка - src, в ней можно встретить:

- shared: разделяемые компоненты, хуки переводы и т.д.
- app: уровень конфигурации приложения
- entity: уровень глупых компонентов, специфичных для проекта
- features: уровень компонентов для пользовательского процесса
- widgets: уровень композитных виджетов
- pages: уровень целостных страниц

## Соглашение по написанию кода

Основные правила подсветит вам линтер - не забудьте его учесть в настройке IDE.

В целом, у нас внедрен prettier - потому достаточно прогнать такую команду перед коммитом<br>
Она подкорректирует код под общий формат (отступы, пробелы, и так далее)

```
npm run prettier
```

Классы стилей нет смысла называть длинно - называем коротко, они все равно хэшируются.
Поскольку мы используем MaterialUI, мы можем легко экспортировать стили из js-подобных объектов.

## Быстрые кор-планы на будущее:

- сравнить методику проброски стилей через MUI и через css-модули
- завезти Cypress для code-coverage 

## Как работать?

Ветка продакшн-линии - main.
Основная разработческая ветка - master, пулл-реквесты льем туда!

Название ветки: "TIFFANY-номер_задачи"

Для каждой задачи не забываем создать свою ветку.
После влития в ветку разработки ветку нужно удалить.

По всем вопросам в тг - @Shiniasse
