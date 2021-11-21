import BlogCard from "../comps/BlogCard";
import Button from "../comps/Button/Button";
import Input from "../comps/Input/Input";
import MainContainer from "../comps/MainContainer";
import ToolHeader from "../comps/ToolHeader";
import styles from "../styles/Blog.module.css";
const Blog = () => {
    return (
        <MainContainer>
            <div className={styles.blogList}>
                <ToolHeader />
                <div className={styles.blogSearch}>
                    <Input placeholder="Поиск по постам" />
                </div>
                <BlogCard />
                <BlogCard />
                <BlogCard />

                <div className={styles.blogDownload}>
                    <Button text="Загрузить еще" />
                </div>
            </div>
        </MainContainer>
    );
};

export default Blog;
