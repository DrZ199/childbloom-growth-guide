import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from 'src/lib/seo'
import ReadingProgress from 'src/components/articles/reading-progress'
import BackToTop from 'src/components/articles/back-to-top'
import TableOfContents from 'src/components/articles/table-of-contents'
import RelatedArticles from 'src/components/articles/related-articles'

export const Route = createFileRoute('/articles/fine-motor-skills-development/')({
  component: FineMotorSkillsDevelopment,
  head: () => {
    const url = 'https://childbloom.site/articles/fine-motor-skills-development/'
    return seo({
      title: 'Fine Motor Skills Development: Complete Guide for Ages 0-5 | ChildBloom',
      description: 'Age-by-age fine motor milestones, activities, and red flags. From grasping to writing, learn how to support your child\'s hand-eye coordination and dexterity with expert-backed strategies.',
      url,
      type: 'article',
      publishedTime: '2025-04-15',
      modifiedTime: '2025-06-10',
      author: 'ChildBloom Medical Team',
      image: 'https://childbloom.site/images/articles/fine-motor-skills-development-og.jpg',
    })
  },
})

function FineMotorSkillsDevelopment() {
  const tableOfContents = [
    { id: 'what-are-fine-motor-skills', title: 'What Are Fine Motor Skills?' },
    { id: 'milestones-by-age', title: 'Milestones by Age' },
    { id: 'activities-by-age', title: 'Activities to Build Fine Motor Skills' },
    { id: 'toys-tools', title: 'Best Toys & Tools for Fine Motor Development' },
    { id: 'red-flags', title: 'Red Flags: When to Seek Help' },
    { id: 'common-concerns', title: 'Common Concerns & FAQs' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const relatedArticles = [
    { title: 'Child Development Milestones', slug: '/articles/child-development-milestones/' },
    { title: 'Best Educational Toys', slug: '/articles/best-educational-toys/' },
    { title: 'Baby Milestones by Month', slug: '/articles/baby-milestones-by-month/' },
    { title: 'Speech Development Guide', slug: '/articles/speech-development-guide/' },
    { title: 'Gross Motor Skills Development', slug: '/articles/gross-motor-skills-development/' },
  ]

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <header className="mb-10">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-pink-600 transition-colors">Home</Link>
              <span>/