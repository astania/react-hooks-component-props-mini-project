import React from "react";
import Article from "./Article"

function ArticleList({ posts }) {
    return <main>
        <Article posts={posts} />
    </main>
}
export default ArticleList