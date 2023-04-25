import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'


const postsDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostsData(){
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove .md from file name to get id
        const id = fileName.replace(/\.md$/,'');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        //Use gray-matter to parse the post meta data section
        const matterResults = matter(fileContent);

        const blogPost : BlogPost = {
            id,
            title: matterResults.data.title,
            date: matterResults.data.date,
        }

        return blogPost
    });

    // Sort posts by date
    return allPostsData.sort((a,b) => a.date < b.date ? 1 : -1)
}


export async function getPostData(id:string){
    const fullPath = path.join(postsDirectory,`${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResults = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResults.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML:BlogPost & {contentHtml : string} = {
        id,
        title : matterResults.data.title,
        date : matterResults.data.date,
        contentHtml
    }

    return blogPostWithHTML;
}