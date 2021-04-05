import SceneDrop from './SceneDrop'

export default class Stage {
    constructor() {
        this.setup()

        this.onResize()

        this.bindEvents()
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.onResize()
        })
    }

    setup() {
        this.mainScene = new SceneDrop()
    }

    /* Handlers
    --------------------------------------------------------- */

    onResize() {
        const scl = APP.Layout.isMobile ? 0.7 : 1

        this.mainScene.scene.scale.set(scl, scl, scl)
    }

    /* Actions
    --------------------------------------------------------- */

    /* Values
    --------------------------------------------------------- */
}
