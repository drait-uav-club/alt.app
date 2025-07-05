"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  Search,
  Plane,
  Trophy,
  Users,
  Rocket,
  Target,
  Zap,
  ArrowRight,
  Play,
} from "lucide-react"
import Link from "next/link"
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

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-4"
            >
              <Plane className="w-full h-full text-orange-500" />
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold text-white mb-2"
          >
            UAV CLUB
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-orange-500 text-lg"
          >
            Soaring Beyond Limits
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Plane className="w-8 h-8 text-orange-500 transform rotate-45" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-bold">UAV CLUB</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-orange-500 hover:text-orange-400 transition-colors">
                HOME
              </Link>
              <Link href="/competitions" className="hover:text-orange-500 transition-colors">
                COMPETITIONS
              </Link>
              <Link href="/team" className="hover:text-orange-500 transition-colors">
                TEAM
              </Link>
              <Link href="/blog" className="hover:text-orange-500 transition-colors">
                BLOG
              </Link>
              <Link href="/projects" className="hover:text-orange-500 transition-colors">
                PROJECTS
              </Link>
              <Link href="/timeline" className="hover:text-orange-500 transition-colors">
                TIMELINE
              </Link>
              <Link href="/about" className="hover:text-orange-500 transition-colors">
                ABOUT US
              </Link>
            </nav>

            {/* Social Icons & Search */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
              </div>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 w-48"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="relative inline-block">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-32 h-32 mx-auto mb-8"
              >
                <div className="relative">
                  <Plane className="w-full h-full text-orange-500 transform rotate-45" />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full opacity-60"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-orange-500 to-white bg-clip-text text-transparent"
          >
            UAV CLUB
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Pioneering the Future of Unmanned Aerial Vehicles
          </motion.p>

          <motion.p variants={fadeInUp} className="text-lg text-orange-500 mb-12 font-semibold">
            SOARING BEYOND LIMITS
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Join Our Mission
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 opacity-30"
        >
          <Rocket className="w-8 h-8 text-orange-500" />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 opacity-30"
        >
          <Target className="w-6 h-6 text-white" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-900/50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Trophy, number: "50+", label: "Competitions Won" },
              { icon: Users, number: "200+", label: "Active Members" },
              { icon: Rocket, number: "100+", label: "Successful Flights" },
              { icon: Zap, number: "25+", label: "Innovation Projects" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our latest innovations in unmanned aerial vehicle technology
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Autonomous Surveillance Drone",
                description: "AI-powered surveillance system with real-time object detection",
                image: "/placeholder.svg?height=200&width=300",
                badge: "AI Powered",
              },
              {
                title: "Search & Rescue UAV",
                description: "Emergency response drone with thermal imaging capabilities",
                image: "/placeholder.svg?height=200&width=300",
                badge: "Emergency Response",
              },
              {
                title: "Agricultural Monitoring System",
                description: "Precision agriculture solution for crop health monitoring",
                image: "/placeholder.svg?height=200&width=300",
                badge: "AgriTech",
              },
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="group">
                <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-orange-500 transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white">{project.badge}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Button
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-orange-500/20 to-red-500/20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Take Flight?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our community of innovators and help shape the future of unmanned aerial vehicles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Become a Member
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="w-6 h-6 text-orange-500 transform rotate-45" />
                <span className="text-xl font-bold text-white">UAV CLUB</span>
              </div>
              <p className="text-gray-400">
                Pioneering the future of unmanned aerial vehicles through innovation and excellence.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="text-gray-400 hover:text-orange-500 block">
                  About Us
                </Link>
                <Link href="/projects" className="text-gray-400 hover:text-orange-500 block">
                  Projects
                </Link>
                <Link href="/competitions" className="text-gray-400 hover:text-orange-500 block">
                  Competitions
                </Link>
                <Link href="/team" className="text-gray-400 hover:text-orange-500 block">
                  Team
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <Link href="/blog" className="text-gray-400 hover:text-orange-500 block">
                  Blog
                </Link>
                <Link href="/timeline" className="text-gray-400 hover:text-orange-500 block">
                  Timeline
                </Link>
                <Link href="/gallery" className="text-gray-400 hover:text-orange-500 block">
                  Gallery
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 block">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} UAV Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
