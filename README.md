# WebAR GitHub Pages Demo

Минимальное Vite + React + TypeScript приложение для проверки `<model-viewer>` и AR на телефоне.

## Модели

Положите тестовые файлы в `public/models`:

- `demo.glb`
- `demo.usdz`

Если используется GitHub Pages project site, Vite добавит имя репозитория в URL автоматически через `base`.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Деплой на GitHub Pages

1. Создайте GitHub-репозиторий и отправьте код.
2. Убедитесь, что в `package.json` есть зависимости после `npm install`.
3. Запустите:

```bash
npm run deploy
```

Скрипт соберет `dist` и опубликует его через пакет `gh-pages`.

В `vite.config.ts` `base` берется из `GITHUB_REPOSITORY`. В GitHub Actions и при стандартном окружении GitHub Pages это даст путь вида `/repo-name/`. Локально используется `/`.
