import React from 'react';
import styles from './Searcher.module.css';

const Searcher = () => {
    return (
        <div className={styles.buscador}>
            <form className={styles.searchForm}>
                <input type="text" className={styles.searcherInput}  placeholder="Search..." required />
                <button className={styles.searchButton} type="submit">
                    <i className="fa fa-search fa-1x" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    );
};

export default Searcher;