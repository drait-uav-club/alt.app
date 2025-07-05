"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, Users, Lightbulb, Shield, Globe } from "lucide-react"
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

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing the boundaries of UAV technology through creative problem-solving and cutting-edge research.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Fostering teamwork and knowledge sharing across disciplines to achieve extraordinary results.",
    },
    {
      icon: Shield,
      title: "Safety",
      description:
        "Prioritizing safety in all our operations and maintaining the highest standards of responsible flying.",
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Creating solutions that make a positive difference in communities and industries worldwide.",
    },
  ]

  const achievements = [
    {
      number: "200+",
      label: "Active Members",
      description: "Passionate individuals from diverse backgrounds",
    },
    {
      number: "50+",
      label: "Projects Completed",
      description: "Innovative solutions across multiple domains",
    },
    {
      number: "15+",
      label: "Awards Won",
      description: "Recognition for excellence and innovation",
    },
    {
      number: "5+",
      label: "Years of Excellence",
      description: "Continuous growth and achievement",
    },
  ]

  const leadership = [
    {
      name: "Dr. Sarah Mitchell",
      position: "Faculty Advisor",
      department: "Aerospace Engineering",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Leading UAV research with 15+ years of experience in autonomous systems",
    },
    {
      name: "Prof. Michael Chen",
      position: "Technical Mentor",
      department: "Computer Science",
      image: "/placeholder.svg?height=200&width=200",
      bio: "AI and machine learning expert specializing in drone applications",
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Industry Liaison",
      department: "Mechanical Engineering",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Bridging academia and industry for real-world UAV solutions",
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
              <Heart className="w-10 h-10 text-orange-500" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-500 to-white bg-clip-text text-transparent"
            >
              ABOUT US
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8">
              Pioneering the future of unmanned aerial vehicles through innovation, collaboration, and excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    To advance the field of unmanned aerial vehicles through innovative research, practical
                    applications, and collaborative learning. We strive to develop cutting-edge UAV technologies that
                    solve real-world problems and create positive impact across industries and communities.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    To be the leading student organization in UAV innovation, recognized globally for our contributions
                    to autonomous systems, artificial intelligence, and sustainable technology solutions. We envision a
                    future where our graduates become industry leaders and our research shapes the next generation of
                    aerial robotics.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="UAV Club Team"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Innovation in Action</h3>
                  <p className="text-gray-200">Our team working on next-generation UAV systems</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="text-center">
                <Card className="bg-gray-900 border-gray-800 hover:border-orange-500 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-6">
                      <value.icon className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-gray-400 text-lg">Numbers that reflect our commitment to excellence</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6">
                  <span className="text-2xl font-bold text-white">{achievement.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.label}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Faculty & Advisors */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Faculty & Advisors</h2>
            <p className="text-gray-400 text-lg">Expert guidance from industry and academic leaders</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-3 gap-8"
          >
            {leadership.map((leader, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="text-center">
                <Card className="bg-gray-900 border-gray-800 hover:border-orange-500 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        width={200}
                        height={200}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-orange-500/20 to-transparent" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-orange-500 font-semibold mb-2">{leader.position}</p>
                    <p className="text-gray-400 text-sm mb-4">{leader.department}</p>
                    <p className="text-gray-300 text-sm">{leader.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Founded in 2020 by a group of passionate engineering students, UAV Club began as a small initiative to
                  explore the potential of unmanned aerial vehicles. What started with just 25 founding members and a
                  shared vision has grown into one of the most recognized student organizations in the field.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, from our first successful autonomous flight in
                  2022 to winning the National UAV Championship in 2023. We've established partnerships with leading
                  aerospace companies and contributed to groundbreaking research in AI-powered flight systems.
                </p>
                <p>
                  Today, we continue to push boundaries, mentor the next generation of engineers, and develop solutions
                  that address real-world challenges across industries from agriculture to emergency response.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Early days"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Team growth"
                  width={300}
                  height={250}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Competition success"
                  width={300}
                  height={250}
                  className="rounded-lg"
                />
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Current team"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/20 to-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Mission</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Be part of a community that's shaping the future of UAV technology and making a real impact
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
      </section>
    </div>
  )
}
