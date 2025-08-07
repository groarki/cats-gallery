import css from "./Loader.module.css"

export const Loader = () => {
    return <div className={css.loader}>
        <p className={css.content}>Your cats for today...</p>
    </div>
}