# IT-Cards

Веб-приложение для создания и изучения флеш-карточек (decks & cards). Позволяет создавать колоды, добавлять карточки с вопросом и ответом, просматривать, редактировать и удалять их, а также проходить обучение по колоде.

🚀 **Деплой:** [https://it-cards.vercel.app](https://it-cards.vercel.app)

## Технологический стек

**Основные технологии:**

- [TypeScript](https://www.typescriptlang.org/) — статическая типизация
- [React 18](https://react.dev/) — библиотека пользовательского интерфейса
- [Vite 5](https://vitejs.dev/) — сборка и dev-сервер (SWC-плагин)

**Состояние и данные:**

- [Redux Toolkit](https://redux-toolkit.js.org/) / [React Redux](https://react-redux.js.org/) — управление состоянием и RTK Query для работы с API

**Роутинг и формы:**

- [React Router DOM 6](https://reactrouter.com/) — маршрутизация
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — работа с формами и валидация

**UI:**

- [Radix UI](https://www.radix-ui.com/) — доступные примитивы (Checkbox, Dialog, Dropdown, Select, Slider, Tabs, Radio Group)
- [SCSS / Sass](https://sass-lang.com/) — стилизация (CSS-модули)
- [React Toastify](https://fkhadra.github.io/react-toastify/) — уведомления
- [Fontsource Roboto](https://fontsource.org/fonts/roboto) — шрифт

**Разработка и качество кода:**

- [Storybook 8](https://storybook.js.org/) — разработка и документация UI-компонентов
- [ESLint](https://eslint.org/) + [@it-incubator/eslint-config](https://www.npmjs.com/package/@it-incubator/eslint-config) — линтинг JavaScript/TypeScript
- [Stylelint](https://stylelint.io/) + [@it-incubator/stylelint-config](https://www.npmjs.com/package/@it-incubator/stylelint-config) — линтинг стилей
- [Prettier](https://prettier.io/) + [@it-incubator/prettier-config](https://www.npmjs.com/package/@it-incubator/prettier-config) — форматирование кода
- [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) — pre-commit проверки
- [pnpm](https://pnpm.io/) — менеджер пакетов

## Архитектура

Проект организован по методологии **Feature-Sliced Design (FSD)**:

| Слой       | Назначение                                                             |
| ---------- | ---------------------------------------------------------------------- |
| `app/`     | Инициализация приложения: провайдеры, роутер, стор, глобальные стили    |
| `pages/`   | Страницы приложения                                                     |
| `widgets/` | Крупные композиционные блоки (таблица карточек, фильтры, хедеры)         |
| `features/`| Пользовательские сценарии (модалки карточек, формы авторизации, меню)   |
| `entities/`| Бизнес-сущности (auth, card, deck, user)                                |
| `shared/`  | Переиспользуемый код: UI-компоненты, API, хуки, утилиты, ассеты          |

## Установка и запуск

Убедитесь, что установлен [Node.js](https://nodejs.org/) и [pnpm](https://pnpm.io/).

```bash
# Установка зависимостей
pnpm install

# Запуск dev-сервера
pnpm dev
```

Приложение будет доступно по адресу: http://localhost:5173

## Доступные скрипты

| Команда             | Описание                                        |
| ------------------- | ----------------------------------------------- |
| `pnpm dev`          | Запуск dev-сервера Vite                         |
| `pnpm build`        | Сборка production-версии (tsc + vite build)     |
| `pnpm preview`      | Локальный просмотр production-сборки            |
| `pnpm lint`         | Запуск ESLint и Stylelint с автоисправлением    |
| `pnpm format`       | Форматирование кода через Prettier              |
| `pnpm storybook`    | Запуск Storybook на порту 6006                  |
| `pnpm build-storybook` | Статическая сборка Storybook                 |
