import React from 'react';

import styles from 'styles/BlogDesc.module.css';
import ToolBlogList from 'Components/ToolBlogList';

export default function BlogDesciption() {
    return (
        <div className={styles.blogDesc}>
            <ToolBlogList />
            <div className={styles.blogDescImg}>
                <img
                    className="main-img"
                    src="http://almode.ru/uploads/posts/2021-03/1615880258_58-p-natsionalnaya-odezhda-mordva-erzya-63.jpg"
                />
            </div>
            <div className={styles.blogDescTitle}>Мордва</div>
            <div className={styles.blogDescText}>
                Мордва — народ, который делится на два субэтноса — мокша и эрзя.
                Самоназвание мокшан — мокшет, эрзян — эрзят. Говорят на
                мокшанском и эрзянском языках, относящихся к мордовской
                подгруппе финно-угорских языков. Точку зрения советской
                этнографии о двух субэтносах не разделяет Финно-угорская
                организация Эстонии (SURI), указывая, что эрзя и мокша являются
                разными народами: «Советская этнография утверждает, что эрзяне и
                мокшане — это субэтносы мордвы.
            </div>
            <div className={styles.blogDescTitle}>Традиции и обычаи</div>
            <div className={styles.blogDescText}>
                Обрядово-праздничный цикл всегда начинался зимней порой. По
                мнению некоторых учёных, задолго до крещения у мордвы появился
                праздник роштовань кудо. К этому дню строился или снимался
                специальный дом, где молодёжь устраивала игры, пляски, а также
                занималась магическими обрядами, большая часть из которых носила
                весьма фривольный характер… С приходом христианства обычаи
                приняли существенно более целомудренный, но не менее веселый
                характер. Словом калядань-чи мордва называет рождественский
                сочельник. Этот день ассоциировался и у эрзя, и у мокша с
                нарождением солнца после долгой зимы и сулил рачительным
                хозяевам благополучие. Во время празднования калядань-чи дети с
                весёлыми песнями ходили по домам деревенских жителей, которые
                угощали их специальными пирожками, называвшимися у эрзян
                калядань прякат, а у мокшан – пярякат.
            </div>
        </div>
    );
}
