import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const pagesDirectory = path.join(process.cwd(), 'content')

export function getPageData(slug: string) {
  const fullPath = path.join(pagesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    ...data,
  }
}

export function getAllPages() {
  const files = fs.readdirSync(pagesDirectory)
  return files.map((file) => file.replace(/\.md$/, ''))
}