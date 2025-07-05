"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Rocket, Eye, Leaf, Shield, Zap, Cpu, Github, ExternalLink, Calendar, Users, Star } from "lucide-react"
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

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: "Autonomous Surveillance System",
      description: "AI-powered surveillance drone with real-time object detection and tracking capabilities",
      image: "/placeholder.svg?height=300&width=400",
      category: "AI & Surveillance",
      status: "Active",
      technologies: ["Computer Vision", "Machine Learning", "Python", "OpenCV"],
      team: ["Sarah Chen", "David Park", "Maya Patel"],
      duration: "8 months",
      completion: 85,
      features: [
        "Real-time object detection",
        "Autonomous flight patterns",
        "Live video streaming",
        "Alert system integration",
      ],
    },
    {
      title: "Search & Rescue UAV",
      description: "Emergency response drone equipped with thermal imaging and GPS tracking for rescue operations",
      image: "/placeholder.svg?height=300&width=400",
      category: "Emergency Response",
      status: "Completed",
      technologies: ["Thermal Imaging", "GPS", "Emergency Protocols", "C++"],
      team: ["Michael Johnson", "Lisa Zhang", "Ryan Cooper"],
      duration: "6 months",
      completion: 100,
      features: [
        "Thermal imaging camera",
        "Emergency beacon detection",
        "Weather-resistant design",
        "Extended flight time",
      ],
    },
    {
      title: "Agricultural Monitoring Platform",
      description: "Precision agriculture solution for crop health monitoring and yield optimization",
      image: "/placeholder.svg?height=300&width=400",
      category: "Agriculture",
      status: "Active",
      technologies: ["IoT Sensors", "Data Analytics", "Mobile App", "Cloud Computing"],
      team: ["Emma Wilson", "James Miller", "Anna Taylor"],
      duration: "10 months",
      completion: 70,
      features: ["Crop health analysis", "Irrigation optimization", "Pest detection", "Yield prediction"],
    },
  ]

  const allProjects = [
    {
      title: "Racing Drone Prototype",
      description: "High-speed racing drone with custom flight controller",
      category: "Racing",
      status: "Active",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Custom PCB", "Flight Control", "Carbon Fiber"],
    },
    {
      title: "Delivery Drone System",
      description: "Autonomous package delivery system for campus logistics",
      category: "Logistics",
      status: "Planning",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Route Planning", "Package Handling", "Safety Systems"],
    },
    {
      title: "Environmental Monitoring",
      description: "Air quality and environmental data collection platform",
      category: "Environment",
      status: "Active",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Environmental Sensors", "Data Logging", "Weather Station"],
    },
    {
      title: "Swarm Intelligence",
      description: "Multi-drone coordination and swarm behavior research",
      category: "Research",
      status: "Research",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Swarm Algorithms", "Communication Protocols", "Coordination"],
    },
    {
      title: "Inspection Drone",
      description: "Infrastructure inspection drone for bridges and buildings",
      category: "Inspection",
      status: "Completed",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["High-Res Camera", "Structural Analysis", "Report Generation"],
    },
    {
      title: "Educational Platform",
      description: "Learning platform for drone programming and control",
      category: "Education",
      status: "Active",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Educational Software", "Simulation", "Interactive Learning"],
    },
  ]

  const categories = [
    { name: "All", icon: Rocket, count: allProjects.length + featuredProjects.length },
    { name: "AI & Surveillance", icon: Eye, count: 2 },
    { name: "Agriculture", icon: Leaf, count: 1 },
    { name: "Emergency Response", icon: Shield, count: 1 },
    { name: "Racing", icon: Zap, count: 1 },
    { name: "Research", icon: Cpu, count: 2 },
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
              <Rocket className="w-10 h-10 text-orange-500" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-500 to-white bg-clip-text text-transparent"
            >
              PROJECTS
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8">
              Innovative UAV solutions pushing the boundaries of technology
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Our most impactful and innovative UAV solutions</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-orange-500 text-white">{project.category}</Badge>
                    <Badge
                      variant="outline"
                      className={`${
                        project.status === "Completed"
                          ? "border-green-500 text-green-500"
                          : "border-blue-500 text-blue-500"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 text-lg mb-6">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="flex items-center text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                        Duration: {project.duration}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-2 text-orange-500" />
                        Team: {project.team.length} members
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-2">Progress</div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.completion}%` }}
                        />
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{project.completion}% Complete</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-gray-400">
                          <Star className="w-3 h-3 mr-2 text-orange-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} className="bg-gray-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Projects</h2>
            <p className="text-gray-400 text-lg">Explore our complete portfolio of UAV innovations</p>
          </motion.div>

          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 bg-gray-800">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <Badge className="ml-2 bg-gray-700 text-xs">{category.count}</Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="All">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {allProjects.map((project, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="group">
                    <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-orange-500 transition-all duration-300 h-full">
                      <div className="relative">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge
                          className={`absolute top-4 right-4 ${
                            project.status === "Completed"
                              ? "bg-green-500"
                              : project.status === "Active"
                                ? "bg-blue-500"
                                : project.status === "Research"
                                  ? "bg-purple-500"
                                  : "bg-orange-500"
                          } text-white`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="border-orange-500 text-orange-500">
                            {project.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} className="bg-gray-700 text-gray-300 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white flex-1">
                            View Project
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Other tab contents would be filtered versions of the same grid */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {allProjects
                    .filter((project) => project.category === category.name)
                    .map((project, index) => (
                      <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="group">
                        <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-orange-500 transition-all duration-300 h-full">
                          <div className="relative">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <Badge
                              className={`absolute top-4 right-4 ${
                                project.status === "Completed"
                                  ? "bg-green-500"
                                  : project.status === "Active"
                                    ? "bg-blue-500"
                                    : project.status === "Research"
                                      ? "bg-purple-500"
                                      : "bg-orange-500"
                              } text-white`}
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline" className="border-orange-500 text-orange-500">
                                {project.category}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>

                            <div className="mb-4">
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.map((tech, i) => (
                                  <Badge key={i} className="bg-gray-700 text-gray-300 text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex space-x-2">
                              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white flex-1">
                                View Project
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                              >
                                <Github className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Rocket, number: "25+", label: "Active Projects" },
              { icon: Users, number: "50+", label: "Contributors" },
              { icon: Star, number: "15+", label: "Completed Projects" },
              { icon: Github, number: "100+", label: "Code Commits" },
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/20 to-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Have a Project Idea?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our team and help bring innovative UAV solutions to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Propose a Project
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                Join Development Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
