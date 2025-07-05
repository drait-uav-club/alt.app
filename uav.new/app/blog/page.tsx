"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Calendar,
  User,
  Clock,
  Search,
  ArrowRight,
  TrendingUp,
  MessageCircle,
  Heart,
  Share2,
} from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Autonomous UAVs: AI-Powered Flight Control Systems",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing drone autonomy and opening new possibilities for unmanned aerial vehicles in various industries.",
    author: "Sarah Chen",
    date: "December 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Technology",
    likes: 124,
    comments: 18,
    shares: 32,
  }

  const recentPosts = [
    {
      title: "Building Your First Racing Drone: A Complete Guide",
      excerpt: "Step-by-step tutorial on assembling a high-performance racing drone from scratch.",
      author: "Michael Johnson",
      date: "December 10, 2023",
      readTime: "12 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Tutorial",
      likes: 89,
      comments: 24,
    },
    {
      title: "UAV Regulations: What Every Drone Pilot Should Know",
      excerpt: "Understanding the latest FAA regulations and compliance requirements for drone operations.",
      author: "Lisa Zhang",
      date: "December 8, 2023",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Regulations",
      likes: 67,
      comments: 15,
    },
    {
      title: "Precision Agriculture: How Drones Are Transforming Farming",
      excerpt: "Examining the impact of UAV technology on modern agricultural practices and crop management.",
      author: "James Miller",
      date: "December 5, 2023",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Agriculture",
      likes: 156,
      comments: 31,
    },
    {
      title: "Emergency Response Drones: Saving Lives from Above",
      excerpt: "How UAVs are being deployed in search and rescue operations and disaster response scenarios.",
      author: "Emma Wilson",
      date: "December 3, 2023",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Emergency Response",
      likes: 203,
      comments: 42,
    },
    {
      title: "The Science Behind Drone Swarms: Collective Intelligence",
      excerpt: "Understanding the algorithms and coordination mechanisms that enable multiple drones to work together.",
      author: "David Park",
      date: "November 30, 2023",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Research",
      likes: 98,
      comments: 19,
    },
    {
      title: "Drone Photography: Capturing the World from New Perspectives",
      excerpt: "Tips and techniques for aerial photography and videography using UAVs.",
      author: "Anna Taylor",
      date: "November 28, 2023",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Photography",
      likes: 134,
      comments: 28,
    },
  ]

  const categories = [
    { name: "All", count: 25 },
    { name: "Technology", count: 8 },
    { name: "Tutorial", count: 6 },
    { name: "Research", count: 4 },
    { name: "Regulations", count: 3 },
    { name: "Agriculture", count: 2 },
    { name: "Photography", count: 2 },
  ]

  const trendingTopics = [
    "Autonomous Flight",
    "AI in Drones",
    "Racing Drones",
    "Agricultural UAVs",
    "Drone Regulations",
    "Emergency Response",
    "Swarm Technology",
    "Aerial Photography",
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-8"
            >
              <BookOpen className="w-10 h-10 text-orange-500" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-500 to-white bg-clip-text text-transparent"
            >
              BLOG
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8">
              Insights, tutorials, and the latest developments in UAV technology
            </motion.p>

            <motion.div variants={fadeInUp} className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Search articles..."
                className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 pr-12"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-orange-500 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-500 text-white">{featuredPost.category}</Badge>
                </div>

                <CardContent className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>

                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-orange-500" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-orange-500" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1 text-red-500" />
                          {featuredPost.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
                          {featuredPost.comments}
                        </div>
                        <div className="flex items-center">
                          <Share2 className="w-4 h-4 mr-1 text-green-500" />
                          {featuredPost.shares}
                        </div>
                      </div>
                    </div>

                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Recent Articles</h2>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                className="grid md:grid-cols-2 gap-8"
              >
                {recentPosts.map((post, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="group">
                    <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-orange-500 transition-all duration-300 h-full">
                      <div className="relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-orange-500 text-white">{post.category}</Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center space-x-3 text-xs text-gray-400 mb-4">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1 text-orange-500" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1 text-orange-500" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1 text-orange-500" />
                            {post.readTime}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-xs text-gray-400">
                            <div className="flex items-center">
                              <Heart className="w-3 h-3 mr-1 text-red-500" />
                              {post.likes}
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="w-3 h-3 mr-1 text-blue-500" />
                              {post.comments}
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                          >
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              <div className="text-center mt-12">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <h3 className="text-lg font-bold text-white">Categories</h3>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2 px-3 rounded hover:bg-gray-800 cursor-pointer transition-colors"
                        >
                          <span className="text-gray-300">{category.name}</span>
                          <Badge className="bg-orange-500/20 text-orange-500">{category.count}</Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Trending Topics */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <h3 className="text-lg font-bold text-white flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                        Trending Topics
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {trendingTopics.map((topic, index) => (
                          <Badge
                            key={index}
                            className="bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
                          >
                            #{topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
                      <p className="text-gray-300 text-sm mb-4">Get the latest UAV insights delivered to your inbox</p>
                      <div className="space-y-3">
                        <Input
                          type="email"
                          placeholder="Your email"
                          className="bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                        />
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Subscribe</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/20 to-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Want to Contribute?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Share your UAV knowledge and experiences with our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Write an Article
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                Join Our Writers
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
