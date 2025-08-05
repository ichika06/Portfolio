"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  ArrowDown,
  Download,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"

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

const projects = [
  {
    id: 0,
    title: "TeachTask",
    description: "A tool helper for teacher daily task management with AI integration to help teachers daily plans.",
    image: "/teachtask.jpg?height=300&width=500",
    tech: ["Next.js", "Supabase", "Vercel", "Tailwind CSS"],
    github: "#",
    live: "https://teachtask.vercel.app/",
  },
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations and responsive design using Framer Motion.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Workout Synchronous",
    description: "Real-time workout tracking app with exercise logging and progress visualization.",
    image: "/Workout.png?height=300&width=500",
    tech: ["Html", "JavaScript", "CSS3", "Fitness API", "Weather API"],
    github: "https://github.com/ichika06/Workout-Synchronous",
    live: "https://ichika06.github.io/Workout-Synchronous/",
  },
  {
    id: 3,
    title: "Nextgenpemss",
    description: "Attendance Tracker and Event Management System.",
    image: "/nextgen.png?height=300&width=500",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/ichika06/NextGenPemss",
    live: "https://nextgenpemss.me/",
  },
]

const skills = [
  { name: "Frontend Development", icon: Code, description: "React, Next.js, JavaScript, Vue.js" },
  { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe XD, Responsive Design" },
  { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter, iOS/Android" },
  { name: "Web Technologies", icon: Globe, description: "HTML5, CSS3, JavaScript, Node.js" },
]

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState("hero")
  const [sectionLoading, setSectionLoading] = useState(false)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleSectionNavigation = (sectionId) => {
    setSectionLoading(true)
    setCurrentSection(sectionId)

    // Simulate loading time for section transition
    setTimeout(() => {
      setSectionLoading(false)
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 200)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Section Loading Overlay */}
      <AnimatePresence>
        {sectionLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"
              />
              <p className="text-purple-400 text-lg">Loading...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-purple-400 cursor-pointer"
            onClick={() => handleSectionNavigation("hero")}
          >
            Portfolio
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleSectionNavigation(item.id)}
                whileHover={{ color: "#dfa3ff" }}
                className={`hover:text-purple-400 transition-colors cursor-pointer ${
                  currentSection === item.id ? "text-purple-400" : ""
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
          <Button
            variant="outline"
            className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-200"
            asChild
          >
            <a href="/JM_RESUME.docx" download>
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.1),transparent_50%)]" />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <motion.div
              className="w-32 h-32 mx-auto mb-8 relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-purple-500 rounded-full flex items-center justify-center">
                <Image
                  src="/pfp.jpg?height=128&width=128"
                  alt="Profile"
                  width={130}
                  height={130}
                  className="rounded-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6">
            John Mark <span className="text-purple-400">Estareja</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & UI/UX Designer creating beautiful, functional web experiences with modern
            technologies
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-purple-800 text-gray-200 hover:bg-purple-700"
              onClick={() => handleSectionNavigation("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 hover:border-purple-400 text-gray-800"
              onClick={() => handleSectionNavigation("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center space-x-6 mt-12">
            {[
              { Icon: Github, href: "https://github.com/ichika06" },
              { Icon: Linkedin, href: "www.linkedin.com/in/jm-estareja-0a410816a" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={ href }
                whileHover={{ scale: 1.2, color: "#8c20ff" }}
                className="text-gray-400 hover:text-purple-900 transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => handleSectionNavigation("about")}
        >
          <ArrowDown className="text-purple-400" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-purple-400">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I&apos;m a passionate full-stack developer with some of experience creating digital solutions that make a
              difference. I specialize in modern web technologies and love bringing ideas to life through clean,
              efficient code.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">My Journey</h3>
              <p className="text-gray-300 mb-6">
              Started as a curious student exploring HTML and CSS, I&apos;ve evolved into a full-stack developer who thrives on solving complex problems and creating seamless user experiences. I enjoy collaborating with teams to deliver outstanding projects and enhance user interactions.
            </p>
            <p className="text-gray-300 mb-6">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I&apos;m always eager to discuss frameworks and recent works, so feel free to reach out!
            </p>
              <div className="flex flex-wrap gap-3">
                {["Problem Solver", "Continuous Learner", "Open Source Contributor"].map((trait) => (
                  <Badge key={trait} variant="outline" className="border-purple-400 text-purple-400">
                    {trait}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-400/20 to-transparent rounded-2xl p-8">
                <Image
                  src="/pfp.jpg"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-purple-400">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I work with a diverse set of technologies to bring your ideas to life
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 mx-auto mb-4 bg-purple-400/10 rounded-full flex items-center justify-center"
                    >
                      <skill.icon className="w-8 h-8 text-purple-400" />
                    </motion.div>
                    <h3 className="text-xl text-white font-bold mb-3">{skill.name}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-purple-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <Card className="bg-gray-900/80 cursor-grab border-gray-800 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/next.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button size="sm" variant="outline" className="border-purple-400 text-purple-400">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="bg-purple-400 text-gray-200 hover:bg-purple-500"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-200">{project.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s <span className="text-purple-400">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your next project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-purple-400">Get In Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-200">jmestareja06@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Github className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-200">github.com/ichika06</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Linkedin className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-200">www.linkedin.com/in/jm-estareja-0a410816a</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 John Mark. Built with Next.js.</p>
        </div>
      </footer>
    </div>
  )
}
