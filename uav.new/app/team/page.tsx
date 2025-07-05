"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Linkedin, Github, Mail, Award, Rocket, Code, Wrench } from "lucide-react"
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

export default function TeamPage() {
  const leadership = [
    {
      name: "Alex Rodriguez",
      position: "President & Founder",
      department: "Aerospace Engineering",
      year: "Senior",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading UAV innovation with 5+ years of drone development experience",
      achievements: ["National Champion 2023", "Innovation Award Winner"],
      skills: ["Flight Control Systems", "Team Leadership", "Project Management"],
    },
    {
      name: "Sarah Chen",
      position: "Technical Director",
      department: "Computer Science",
      year: "Junior",
      image: "/placeholder.svg?height=300&width=300",
      bio: "AI and autonomous systems specialist driving our technical excellence",
      achievements: ["AI Challenge Winner", "Best Technical Paper"],
      skills: ["Machine Learning", "Computer Vision", "Autonomous Navigation"],
    },
    {
      name: "Michael Johnson",
      position: "Operations Manager",
      department: "Mechanical Engineering",
      year: "Senior",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ensuring smooth operations and coordinating all club activities",
      achievements: ["Leadership Excellence Award", "Event Organizer"],
      skills: ["Project Coordination", "Event Management", "Strategic Planning"],
    },
  ]

  const teams = [
    {
      name: "Hardware Development",
      icon: Wrench,
      description: "Designing and building cutting-edge drone hardware",
      members: 15,
      lead: "Emma Wilson",
      projects: ["Custom Flight Controllers", "Sensor Integration", "Frame Design"],
    },
    {
      name: "Software Engineering",
      icon: Code,
      description: "Developing flight control and AI systems",
      members: 12,
      lead: "David Park",
      projects: ["Autonomous Navigation", "Computer Vision", "Mobile Apps"],
    },
    {
      name: "Competition Team",
      icon: Award,
      description: "Training for and competing in UAV competitions",
      members: 20,
      lead: "Lisa Zhang",
      projects: ["Racing Drones", "Freestyle Training", "Strategy Development"],
    },
    {
      name: "Research & Innovation",
      icon: Rocket,
      description: "Exploring new technologies and applications",
      members: 10,
      lead: "James Miller",
      projects: ["AI Research", "New Materials", "Future Applications"],
    },
  ]

  const members = [
    { name: "Emma Wilson", role: "Hardware Lead", department: "EE", year: "Junior" },
    { name: "David Park", role: "Software Lead", department: "CS", year: "Senior" },
    { name: "Lisa Zhang", role: "Competition Captain", department: "AE", year: "Sophomore" },
    { name: "James Miller", role: "Research Lead", department: "ME", year: "Graduate" },
    { name: "Anna Taylor", role: "Design Specialist", department: "ID", year: "Junior" },
    { name: "Ryan Cooper", role: "Flight Test Engineer", department: "AE", year: "Senior" },
    { name: "Maya Patel", role: "AI Developer", department: "CS", year: "Sophomore" },
    { name: "Tom Anderson", role: "Electronics Engineer", department: "EE", year: "Junior" },
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
              <Users className="w-10 h-10 text-orange-500" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-500 to-white bg-clip-text text-transparent"
            >
              OUR TEAM
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8">
              Meet the passionate individuals driving UAV innovation forward
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400 text-lg">The visionaries leading our mission</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-3 gap-8"
          >
            {leadership.map((leader, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="group">
                <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-orange-500 transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                      <p className="text-orange-500 font-semibold">{leader.position}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="border-orange-500 text-orange-500">
                        {leader.department}
                      </Badge>
                      <Badge className="bg-gray-700 text-white">{leader.year}</Badge>
                    </div>

                    <p className="text-gray-400 mb-4">{leader.bio}</p>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Achievements</h4>
                      <div className="space-y-1">
                        {leader.achievements.map((achievement, i) => (
                          <div key={i} className="text-sm text-gray-400 flex items-center">
                            <Award className="w-3 h-3 mr-2 text-orange-500" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {leader.skills.map((skill, i) => (
                          <Badge key={i} className="bg-orange-500/20 text-orange-500 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                      >
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Specialized Teams</h2>
            <p className="text-gray-400 text-lg">Organized groups focusing on different aspects of UAV development</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-2 gap-8"
          >
            {teams.map((team, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.02 }} className="group">
                <Card className="bg-gray-900 border-gray-800 hover:border-orange-500 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-full">
                        <team.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{team.name}</h3>
                        <p className="text-gray-400">{team.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-2xl font-bold text-orange-500">{team.members}</div>
                        <div className="text-sm text-gray-400">Active Members</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">{team.lead}</div>
                        <div className="text-sm text-gray-400">Team Lead</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Current Projects</h4>
                      <div className="space-y-2">
                        {team.projects.map((project, i) => (
                          <div key={i} className="flex items-center text-gray-400">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                            {project}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Members</h2>
            <p className="text-gray-400 text-lg">The talented individuals making it all possible</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {members.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-orange-500 text-sm mb-2">{member.role}</p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                    {member.department}
                  </Badge>
                  <Badge className="bg-gray-700 text-white text-xs">{member.year}</Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500/20 to-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Ready to be part of something extraordinary? Join our passionate team of UAV enthusiasts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">Apply Now</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
