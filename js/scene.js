const SceneManager = {
    init() {
        console.log("SceneManager: Ініціалізація AR-сцени та перевірка WebGL компонента.");
        const sceneEl = document.querySelector('a-scene');

        if (sceneEl.hasLoaded) {
            this.onSceneReady();
        } else {
            sceneEl.addEventListener('loaded', () => this.onSceneReady());
        }
    },

    onSceneReady() {
        console.log("SceneManager: AR-сцену успішно завантажено.");
    }
};