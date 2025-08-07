import css from './CatsGrid.module.css'

export const CatsGrid = ({ onSelect, cats, loader }) => {
    return (
        <ul className={css.grid}>
            {loader}
            {cats.map(cat => (
                <li key={cat.id}>
                    <div className={css.card} onClick={() => onSelect(cat)}>
                        <img className={css.image} src={cat.url} alt="Cat photo" />
                    </div>
                </li>
            ))}
        </ul>
    );
};