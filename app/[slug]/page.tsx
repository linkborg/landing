import { notFound } from 'next/navigation'
import Markdown from 'markdown-to-jsx'
import { getPageData, getAllPages } from '@/lib/markdown'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './page.css'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const pages = getAllPages()
  return pages.map((slug) => ({ slug }))
}

export default function Page({ params }: PageProps) {
  try {
    const { content, title } = getPageData(params.slug)

    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        <main className="container mx-auto px-4 py-20">
          <article className="prose dark:prose-invert max-w-3xl mx-auto">
            <h1>{title}</h1>
            <Markdown>{content}</Markdown>
          </article>
        </main>
        <Footer />
      </div>
    )
  } catch (error) {
    notFound()
  }
}