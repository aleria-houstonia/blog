import React from 'react';
import styles from 'styles/BlogCard.module.css';

export const BlogCard = () => {
    return (
        <div className={styles.blogCard}>
            <div className={styles.blogTitleImg}>
                <img src="http://almode.ru/uploads/posts/2021-03/1615880258_58-p-natsionalnaya-odezhda-mordva-erzya-63.jpg" />
            </div>
            <div className={styles.blogCardTitle}>Мордва</div>
            <div className={styles.blogCardDescription}>
                Мордва — народ, который делится на два субэтноса — мокша и эрзя.
                Самоназвание мокшан — мокшет, эрзян — эрзят. Говорят на
                мокшанском и эрзянском языках, относящихся к мордовской
                подгруппе финно-угорских языков. Точку зрения советской
                этнографии о двух субэтносах не разделяет Финно-угорская
                организация Эстонии (SURI), указывая, что эрзя и мокша являются
                разными народами: «Советская этнография утверждает, что эрзяне и
                мокшане — это субэтносы мордвы.
            </div>
        </div>
    );
};
