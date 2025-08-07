import css from './CatModal.module.css';
import { useEffect } from 'react';

export const CatModal = ({ onClose, cat }) => {
    useEffect(() => {
    const handleKeyboard = (e) => {
        if (e.code === 'Escape')
            onClose();
        };

        document.addEventListener("keydown", handleKeyboard);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
            document.body.style.overflow = "";
        };

    }, [onClose]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose()
    };

    return (
        <div className={css.dialog} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
        <div className={css.modal} >
            <button className={css.closeBtn} aria-label="Close modal" onClick={onClose}>&times;</button>
            <img className={css.image} src={cat.url} alt={cat.id} />
            <div></div>
    </div>
</div>)
    
}