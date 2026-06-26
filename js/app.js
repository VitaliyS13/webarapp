document.addEventListener('DOMContentLoaded', () => {
    console.log("App: Запуск системи створення мультимаркерних WebAR-застосунків...");

    SceneManager.init();
    MarkersManager.init();
    InteractionManager.init();

    console.log("App: Всі модулі успішно ініціалізовано.");
});