"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Rocket, Users, Award, Target, Zap, Star, CheckCircle } from "lucide-react"

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

export default function TimelinePage() {
  const timelineEvents = [
    {
      year: "2024",
      title: "AI Integration Milestone",
      description:
        "Successfully integrated advanced AI systems into our autonomous flight platform, achieving 95% accuracy in object detection and navigation.",
      icon: Zap,
      type: "achievement",
      date: "March 2024",
      details: [
        "Deployed computer vision algorithms",
        "Implemented machine learning models",
        "Achieved autonomous waypoint navigation",
      ],
    },
    {
      year: "2023",
      title: "National Championship Victory",
      description:
        "Won first place at the National UAV Championship, competing against 200+ teams from across the country.",
      icon: Trophy,
      type: "competition",
      date: "November 2023",
      details: [
        "First place in autonomous category",
        "Innovation award for AI implementation",
        "Media coverage and recognition",
      ],
    },
    {
      year: "2023",
      title: "Research Partnership",
      description:
        "Established partnership with leading aerospace companies for advanced UAV research and development projects.",
      icon: Target,
      type: "partnership",
      date: "September 2023",
      details: ["Collaboration with Boeing", "Joint research initiatives", "Funding for advanced projects"],
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Grew our team to over 200 active members across multiple disciplines and specializations.",
      icon: Users,
      type: "milestone",
      date: "June 2023",
      details: ["200+ active members", "15 specialized teams", "Cross-disciplinary collaboration"],
    },
    {
      year: "2022",
      title: "Agricultural Innovation Award",
      description:
        "Received recognition for our precision agriculture UAV system that revolutionized crop monitoring techniques.",
      icon: Award,
      type: "achievement",
      date: "October 2022",
      details: ["Precision agriculture platform", "Crop health monitoring system", "Yield optimization algorithms"],
    },
    {
      year: "2022",
      title: "First Autonomous Flight",
      description:
        "Achieved our first fully autonomous flight mission, marking a significant milestone in our development journey.",
      icon: Rocket,
      type: "milestone",
      date: "April 2022",
      details: ["Fully autonomous navigation", "GPS-independent flight", "Real-time obstacle avoidance"],
    },
    {
      year: "2021",
      title: "International Competition Debut",
      description:
        "Made our international debut at the Global UAV Challenge, placing in the top 10 among 150+ international teams.",
      icon: Star,
      type: "competition",
      date: "August 2021",
      details: ["Top 10 international ranking", "Technical excellence award", "Global recognition"],
    },
    {
      year: "2020",
      title: "UAV Club Foundation",
      description: "Official establishment of the UAV Club with founding members and initial project goals.",
      icon: CheckCircle,
      type: "foundation",
      date: "January 2020",
      details: ["Club charter established", "Initial 25 founding members", "First project initiatives launched"],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "achievement":
        return "bg-green-500"
      case "competition":
        return "bg-orange-500"
      case "partnership":
        return "bg-blue-500"
      case "milestone":
        return "bg-purple-500"
      case "foundation":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "achievement":
        return "Achievement"
      case "competition":
        return "Competition"
      case "partnership":
        return "Partnership"
      case "milestone":
        return "Milestone"
      case "foundation":
        return "Foundation"
      default:
        return "Event"
    }
  }

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
              <Calendar className="w-10 h-10 text-orange-500" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-500 to-white bg-clip-text text-transparent"
            >
              TIMELINE
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8">
              Our journey of innovation, achievements, and milestones in UAV technology
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500" />

              <motion.div variants={staggerContainer} initial="initial" whileInView="animate" className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div key={index} variants={fadeInUp} className="relative flex items-start space-x-8">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full ${getTypeColor(event.type)} flex items-center justify-center shadow-lg`}
                      >
                        <event.icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Connecting Line to Card */}
                      <div className="absolute top-8 left-16 w-8 h-0.5 bg-gray-700" />
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 pb-8">
                      <Card className="bg-gray-900 border-gray-800 hover:border-orange-500 transition-all duration-300">
                        <CardContent className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center space-x-3 mb-2">
                                <Badge className={`${getTypeColor(event.type)} text-white`}>
                                  {getTypeLabel(event.type)}
                                </Badge>
                                <span className="text-gray-400 text-sm">{event.date}</span>
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                            </div>
                            <div className="text-3xl font-bold text-orange-500 opacity-50">{event.year}</div>
                          </div>

                          <p className="text-gray-400 mb-6 text-lg">{event.description}</p>

                          <div>
                            <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                            <div className="space-y-2">
                              {event.details.map((detail, i) => (
                                <div key={i} className="flex items-center text-gray-300">
                                  <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                                  {detail}
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey in Numbers</h2>
            <p className="text-gray-400 text-lg">Quantifying our progress and achievements</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Calendar, number: "5", label: "Years of Innovation", suffix: "+" },
              { icon: Trophy, number: "15", label: "Competitions Won", suffix: "+" },
              { icon: Users, number: "200", label: "Team Members", suffix: "+" },
              { icon: Rocket, number: "50", label: "Successful Projects", suffix: "+" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Looking Ahead</h2>
            <p className="text-gray-400 text-lg">Our vision for the future of UAV technology</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "2025 Goals",
                items: [
                  "Launch commercial UAV platform",
                  "Expand to 300+ members",
                  "International competition victories",
                  "Industry partnerships",
                ],
              },
              {
                title: "2026 Vision",
                items: [
                  "AI-powered swarm technology",
                  "Sustainable drone solutions",
                  "Global research collaborations",
                  "Educational outreach programs",
                ],
              },
              {
                title: "Long-term Impact",
                items: [
                  "Transform UAV industry standards",
                  "Pioneer new applications",
                  "Mentor next generation",
                  "Drive technological innovation",
                ],
              },
            ].map((goal, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6">{goal.title}</h3>
                    <div className="space-y-3">
                      {goal.items.map((item, i) => (
                        <div key={i} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 mr-3 text-orange-500 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/20 to-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Be Part of Our Story</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join us as we continue to push the boundaries of UAV technology and create the future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-md font-semibold transition-colors"
              >
                Join Our Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg rounded-md font-semibold transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
