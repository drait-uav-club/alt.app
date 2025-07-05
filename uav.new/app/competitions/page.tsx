"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Trophy, Users, Clock, Target } from "lucide-react"
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

export default function CompetitionsPage() {
  const upcomingCompetitions = [
    {
      title: "National UAV Championship 2024",
      date: "March 15-17, 2024",
      location: "Tech University, California",
      category: "Multi-Category",
      prize: "$50,000",
      participants: "200+ Teams",
      image: "/placeholder.svg?height=200&width=300",
      status: "Registration Open",
    },
    {
      title: "Autonomous Flight Challenge",
      date: "April 22-23, 2024",
      location: "Innovation Hub, Texas",
      category: "Autonomous Systems",
      prize: "$25,000",
      participants: "150+ Teams",
      image: "/placeholder.svg?height=200&width=300",
      status: "Coming Soon",
    },
    {
      title: "Search & Rescue Drone Competition",
      date: "May 10-12, 2024",
      location: "Emergency Training Center, Florida",
      category: "Emergency Response",
      prize: "$30,000",
      participants: "100+ Teams",
      image: "/placeholder.svg?height=200&width=300",
      status: "Registration Open",
    },
  ]

  const pastAchievements = [
    {
      title: "International Drone Racing Championship",
      year: "2023",
      position: "1st Place",
      award: "Gold Medal",
      description: "Dominated the racing category with our custom-built speed drone",
    },
    {
      title: "AI-Powered UAV Challenge",
      year: "2023",
      position: "2nd Place",
      award: "Silver Medal",
      description: "Innovative AI navigation system impressed judges",
    },
    {
      title: "Agricultural Drone Innovation Contest",
      year: "2022",
      position: "1st Place",
      award: "Innovation Award",
      description: "Revolutionary crop monitoring solution",
    },
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
              <Trophy className="w-10 h-10 text-orange-500" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-500 to-white bg-clip-text text-transparent"
            >
              COMPETITIONS
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8">
              Showcase your skills and compete with the best UAV teams worldwide
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Competitions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Competitions</h2>
            <p className="text-gray-400 text-lg">Don't miss these exciting opportunities to showcase your skills</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {upcomingCompetitions.map((competition, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="group">
                <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-orange-500 transition-all duration-300 h-full">
                  <div className="relative">
                    <Image
                      src={competition.image || "/placeholder.svg"}
                      alt={competition.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge
                      className={`absolute top-4 right-4 ${
                        competition.status === "Registration Open" ? "bg-green-500" : "bg-orange-500"
                      } text-white`}
                    >
                      {competition.status}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{competition.title}</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                        {competition.date}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                        {competition.location}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Target className="w-4 h-4 mr-2 text-orange-500" />
                        {competition.category}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Trophy className="w-4 h-4 mr-2 text-orange-500" />
                        Prize Pool: {competition.prize}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-2 text-orange-500" />
                        {competition.participants}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      disabled={competition.status === "Coming Soon"}
                    >
                      {competition.status === "Registration Open" ? "Register Now" : "Coming Soon"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Past Achievements */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-gray-400 text-lg">Celebrating our victories and milestones</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-3 gap-8"
          >
            {pastAchievements.map((achievement, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="text-center">
                <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30 p-8">
                  <CardContent className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
                      <Trophy className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    <div className="flex items-center justify-center space-x-4">
                      <Badge className="bg-orange-500 text-white">{achievement.year}</Badge>
                      <Badge variant="outline" className="border-orange-500 text-orange-500">
                        {achievement.position}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                    <div className="text-orange-500 font-semibold">{achievement.award}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Competition Categories</h2>
            <p className="text-gray-400 text-lg">Explore different competition formats and challenges</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Target, title: "Racing", description: "High-speed drone racing competitions" },
              { icon: Trophy, title: "Freestyle", description: "Creative flight pattern challenges" },
              { icon: Users, title: "Team Events", description: "Collaborative multi-drone missions" },
              { icon: Clock, title: "Endurance", description: "Long-duration flight challenges" },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-full mb-4">
                  <category.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/20 to-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Compete?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our team and represent UAV Club in upcoming competitions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Join Competition Team
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                View Training Schedule
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
