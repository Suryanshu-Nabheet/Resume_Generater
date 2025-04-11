"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  FileText,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Plus,
  Download,
  FileDown,
  FileType2,
  Check,
  PlusCircle,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import ResumePreview from "@/components/resume-preview"
import ScoreCard from "@/components/score-card"

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState("personal")
  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    experience: [
      {
        id: "exp1",
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ],
    education: [
      {
        id: "edu1",
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    skills: [
      { id: "skill1", name: "" },
      { id: "skill2", name: "" },
      { id: "skill3", name: "" },
    ],
    customSections: [
      {
        id: "custom1",
        title: "Projects",
        items: [
          {
            id: "item1",
            title: "",
            subtitle: "",
            date: "",
            description: "",
          },
        ],
      },
    ],
  })

  const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [downloadFormat, setDownloadFormat] = useState("pdf")

  const handlePersonalChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      personal: {
        ...formData.personal,
        [name]: value,
      },
    })
  }

  const handleExperienceChange = (id, field, value) => {
    const updatedExperience = formData.experience.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [field]: value }
      }
      return exp
    })

    setFormData({
      ...formData,
      experience: updatedExperience,
    })
  }

  const handleEducationChange = (id, field, value) => {
    const updatedEducation = formData.education.map((edu) => {
      if (edu.id === id) {
        return { ...edu, [field]: value }
      }
      return edu
    })

    setFormData({
      ...formData,
      education: updatedEducation,
    })
  }

  const handleSkillChange = (id, value) => {
    const updatedSkills = formData.skills.map((skill) => {
      if (skill.id === id) {
        return { ...skill, name: value }
      }
      return skill
    })

    setFormData({
      ...formData,
      skills: updatedSkills,
    })
  }

  const handleCustomSectionTitleChange = (sectionId, value) => {
    const updatedCustomSections = formData.customSections.map((section) => {
      if (section.id === sectionId) {
        return { ...section, title: value }
      }
      return section
    })

    setFormData({
      ...formData,
      customSections: updatedCustomSections,
    })
  }

  const handleCustomItemChange = (sectionId, itemId, field, value) => {
    const updatedCustomSections = formData.customSections.map((section) => {
      if (section.id === sectionId) {
        const updatedItems = section.items.map((item) => {
          if (item.id === itemId) {
            return { ...item, [field]: value }
          }
          return item
        })
        return { ...section, items: updatedItems }
      }
      return section
    })

    setFormData({
      ...formData,
      customSections: updatedCustomSections,
    })
  }

  const addExperience = () => {
    const newId = `exp${formData.experience.length + 1}`
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          id: newId,
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    })
  }

  const removeExperience = (id) => {
    if (formData.experience.length > 1) {
      setFormData({
        ...formData,
        experience: formData.experience.filter((exp) => exp.id !== id),
      })
    }
  }

  const addEducation = () => {
    const newId = `edu${formData.education.length + 1}`
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          id: newId,
          institution: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    })
  }

  const removeEducation = (id) => {
    if (formData.education.length > 1) {
      setFormData({
        ...formData,
        education: formData.education.filter((edu) => edu.id !== id),
      })
    }
  }

  const addSkill = () => {
    const newId = `skill${formData.skills.length + 1}`
    setFormData({
      ...formData,
      skills: [...formData.skills, { id: newId, name: "" }],
    })
  }

  const removeSkill = (id) => {
    if (formData.skills.length > 1) {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill.id !== id),
      })
    }
  }

  const addCustomSection = () => {
    const newId = `custom${formData.customSections.length + 1}`
    setFormData({
      ...formData,
      customSections: [
        ...formData.customSections,
        {
          id: newId,
          title: "New Section",
          items: [
            {
              id: `item1-${newId}`,
              title: "",
              subtitle: "",
              date: "",
              description: "",
            },
          ],
        },
      ],
    })
  }

  const removeCustomSection = (id) => {
    if (formData.customSections.length > 0) {
      setFormData({
        ...formData,
        customSections: formData.customSections.filter((section) => section.id !== id),
      })
    }
  }

  const addCustomItem = (sectionId) => {
    const section = formData.customSections.find((s) => s.id === sectionId)
    const newId = `item${section.items.length + 1}-${sectionId}`

    const updatedCustomSections = formData.customSections.map((section) => {
      if (section.id === sectionId) {
        return {
          ...section,
          items: [
            ...section.items,
            {
              id: newId,
              title: "",
              subtitle: "",
              date: "",
              description: "",
            },
          ],
        }
      }
      return section
    })

    setFormData({
      ...formData,
      customSections: updatedCustomSections,
    })
  }

  const removeCustomItem = (sectionId, itemId) => {
    const section = formData.customSections.find((s) => s.id === sectionId)
    if (section.items.length > 1) {
      const updatedCustomSections = formData.customSections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.filter((item) => item.id !== itemId),
          }
        }
        return section
      })

      setFormData({
        ...formData,
        customSections: updatedCustomSections,
      })
    }
  }

  const calculateScore = () => {
    let score = 0

    // Personal info completeness
    const personalFields = Object.values(formData.personal)
    const filledPersonalFields = personalFields.filter((val) => val.trim() !== "").length
    score += (filledPersonalFields / personalFields.length) * 20

    // Experience quality
    const hasExperience = formData.experience.some((exp) => exp.company && exp.position && exp.description)
    if (hasExperience) score += 20

    // Education completeness
    const hasEducation = formData.education.some((edu) => edu.institution && edu.degree)
    if (hasEducation) score += 20

    // Skills presence
    const skillsCount = formData.skills.filter((skill) => skill.name.trim() !== "").length
    score += Math.min(skillsCount * 4, 20)

    // Custom sections
    const hasCustomContent = formData.customSections.some(
      (section) => section.title && section.items.some((item) => item.title || item.description),
    )
    if (hasCustomContent) score += 20

    return Math.round(score)
  }

  const nextTab = () => {
    if (activeTab === "personal") setActiveTab("experience")
    else if (activeTab === "experience") setActiveTab("education")
    else if (activeTab === "education") setActiveTab("skills")
    else if (activeTab === "skills") setActiveTab("custom")
    else if (activeTab === "custom") setActiveTab("preview")
  }

  const prevTab = () => {
    if (activeTab === "preview") setActiveTab("custom")
    else if (activeTab === "custom") setActiveTab("skills")
    else if (activeTab === "skills") setActiveTab("education")
    else if (activeTab === "education") setActiveTab("experience")
    else if (activeTab === "experience") setActiveTab("personal")
  }

  const generateFile = (format) => {
    // In a real implementation, this would generate and download the file in the specified format
    alert(`In a real implementation, this would download your resume as a ${format.toUpperCase()} file`)
  }

  return (
    <div className="flex flex-col min-h-screen bg-navy-950">
      <header className="border-b border-navy-800 bg-navy-900">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-white">ResumeAI</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/templates" className="text-sm font-medium text-gray-300 hover:text-white">
              Templates
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-10 bg-navy-950">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Resume Builder</h1>
            <p className="text-gray-300">Fill in the information below to create your professional resume</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8">
            <div className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="bg-navy-900 border border-navy-800 mb-6">
                  <TabsTrigger
                    value="personal"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-700 data-[state=active]:to-primary-600 data-[state=active]:text-white"
                  >
                    Personal
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-700 data-[state=active]:to-primary-600 data-[state=active]:text-white"
                  >
                    Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-700 data-[state=active]:to-primary-600 data-[state=active]:text-white"
                  >
                    Education
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-700 data-[state=active]:to-primary-600 data-[state=active]:text-white"
                  >
                    Skills
                  </TabsTrigger>
                  <TabsTrigger
                    value="custom"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-700 data-[state=active]:to-primary-600 data-[state=active]:text-white"
                  >
                    Custom
                  </TabsTrigger>
                  <TabsTrigger
                    value="preview"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary-700 data-[state=active]:to-primary-600 data-[state=active]:text-white"
                  >
                    Preview
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-4">
                  <Card className="bg-navy-900 border-navy-800">
                    <CardContent className="pt-6">
                      <div className="grid gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-white">
                              Full Name
                            </Label>
                            <Input
                              id="fullName"
                              name="fullName"
                              value={formData.personal.fullName}
                              onChange={handlePersonalChange}
                              placeholder="John Doe"
                              className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="jobTitle" className="text-white">
                              Job Title
                            </Label>
                            <Input
                              id="jobTitle"
                              name="jobTitle"
                              value={formData.personal.jobTitle}
                              onChange={handlePersonalChange}
                              placeholder="Software Engineer"
                              className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.personal.email}
                              onChange={handlePersonalChange}
                              placeholder="john.doe@example.com"
                              className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-white">
                              Phone
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.personal.phone}
                              onChange={handlePersonalChange}
                              placeholder="(123) 456-7890"
                              className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location" className="text-white">
                            Location
                          </Label>
                          <Input
                            id="location"
                            name="location"
                            value={formData.personal.location}
                            onChange={handlePersonalChange}
                            placeholder="New York, NY"
                            className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="summary" className="text-white">
                            Professional Summary
                          </Label>
                          <Textarea
                            id="summary"
                            name="summary"
                            value={formData.personal.summary}
                            onChange={handlePersonalChange}
                            placeholder="Experienced software engineer with a passion for developing innovative solutions..."
                            className="min-h-[120px] bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience" className="space-y-4">
                  {formData.experience.map((exp, index) => (
                    <Card key={exp.id} className="bg-navy-900 border-navy-800">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium text-white">Work Experience {index + 1}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeExperience(exp.id)}
                            disabled={formData.experience.length === 1}
                            className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                        <div className="grid gap-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`company-${exp.id}`} className="text-white">
                                Company
                              </Label>
                              <Input
                                id={`company-${exp.id}`}
                                value={exp.company}
                                onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                                placeholder="Company Name"
                                className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`position-${exp.id}`} className="text-white">
                                Position
                              </Label>
                              <Input
                                id={`position-${exp.id}`}
                                value={exp.position}
                                onChange={(e) => handleExperienceChange(exp.id, "position", e.target.value)}
                                placeholder="Job Title"
                                className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`start-date-${exp.id}`} className="text-white">
                                Start Date
                              </Label>
                              <Input
                                id={`start-date-${exp.id}`}
                                value={exp.startDate}
                                onChange={(e) => handleExperienceChange(exp.id, "startDate", e.target.value)}
                                placeholder="MM/YYYY"
                                className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`end-date-${exp.id}`} className="text-white">
                                End Date
                              </Label>
                              <Input
                                id={`end-date-${exp.id}`}
                                value={exp.endDate}
                                onChange={(e) => handleExperienceChange(exp.id, "endDate", e.target.value)}
                                placeholder="MM/YYYY or Present"
                                className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`description-${exp.id}`} className="text-white">
                              Description
                            </Label>
                            <Textarea
                              id={`description-${exp.id}`}
                              value={exp.description}
                              onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                              placeholder="Describe your responsibilities and achievements..."
                              className="min-h-[120px] bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    onClick={addExperience}
                    variant="outline"
                    className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Another Experience
                  </Button>
                </TabsContent>

                <TabsContent value="education" className="space-y-4">
                  {formData.education.map((edu, index) => (
                    <Card key={edu.id} className="bg-navy-900 border-navy-800">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium text-white">Education {index + 1}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeEducation(edu.id)}
                            disabled={formData.education.length === 1}
                            className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`institution-${edu.id}`} className="text-white">
                              Institution
                            </Label>
                            <Input
                              id={`institution-${edu.id}`}
                              value={edu.institution}
                              onChange={(e) => handleEducationChange(edu.id, "institution", e.target.value)}
                              placeholder="University or School Name"
                              className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`degree-${edu.id}`} className="text-white">
                                Degree
                              </Label>
                              <Input
                                id={`degree-${edu.id}`}
                                value={edu.degree}
                                onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                                placeholder="Bachelor of Science"
                                className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`field-${edu.id}`} className="text-white">
                                Field of Study
                              </Label>
                              <Input
                                id={`field-${edu.id}`}
                                value={edu.field}
                                onChange={(e) => handleEducationChange(edu.id, "field", e.target.value)}
                                placeholder="Computer Science"
                                className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`edu-start-date-${edu.id}`} className="text-white">
                                Start Date
                              </Label>
                              <Input
                                id={`edu-start-date-${edu.id}`}
                                value={edu.startDate}
                                onChange={(e) => handleEducationChange(edu.id, "startDate", e.target.value)}
                                placeholder="MM/YYYY"
                                className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`edu-end-date-${edu.id}`} className="text-white">
                                End Date
                              </Label>
                              <Input
                                id={`edu-end-date-${edu.id}`}
                                value={edu.endDate}
                                onChange={(e) => handleEducationChange(edu.id, "endDate", e.target.value)}
                                placeholder="MM/YYYY or Present"
                                className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    onClick={addEducation}
                    variant="outline"
                    className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Another Education
                  </Button>
                </TabsContent>

                <TabsContent value="skills" className="space-y-4">
                  <Card className="bg-navy-900 border-navy-800">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white mb-2">Skills</h3>
                        <div className="grid gap-4">
                          {formData.skills.map((skill, index) => (
                            <div key={skill.id} className="flex items-center gap-3">
                              <Input
                                value={skill.name}
                                onChange={(e) => handleSkillChange(skill.id, e.target.value)}
                                placeholder={`Skill ${index + 1}`}
                                className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                              />
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeSkill(skill.id)}
                                disabled={formData.skills.length === 1}
                                className="shrink-0 bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300"
                              >
                                <Trash2 className="h-5 w-5" />
                              </Button>
                            </div>
                          ))}
                        </div>
                        <Button
                          onClick={addSkill}
                          variant="outline"
                          className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300"
                        >
                          <Plus className="mr-2 h-4 w-4" /> Add Another Skill
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="custom" className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-white">Custom Sections</h3>
                    <Button
                      onClick={addCustomSection}
                      variant="outline"
                      className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300"
                    >
                      <PlusCircle className="mr-2 h-4 w-4" /> Add New Section
                    </Button>
                  </div>

                  {formData.customSections.map((section) => (
                    <Card key={section.id} className="bg-navy-900 border-navy-800">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-4">
                          <div className="space-y-2 flex-1 mr-4">
                            <Label htmlFor={`section-title-${section.id}`} className="text-white">
                              Section Title
                            </Label>
                            <Input
                              id={`section-title-${section.id}`}
                              value={section.title}
                              onChange={(e) => handleCustomSectionTitleChange(section.id, e.target.value)}
                              placeholder="Projects, Certifications, etc."
                              className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeCustomSection(section.id)}
                            className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300 mt-6"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>

                        <div className="space-y-6 mt-6">
                          {section.items.map((item, itemIndex) => (
                            <div key={item.id} className="border border-navy-800 p-4 rounded-md">
                              <div className="flex justify-between items-center mb-4">
                                <h4 className="text-md font-medium text-white">Item {itemIndex + 1}</h4>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeCustomItem(section.id, item.id)}
                                  disabled={section.items.length === 1}
                                  className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </Button>
                              </div>

                              <div className="grid gap-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor={`item-title-${item.id}`} className="text-white">
                                      Title
                                    </Label>
                                    <Input
                                      id={`item-title-${item.id}`}
                                      value={item.title}
                                      onChange={(e) =>
                                        handleCustomItemChange(section.id, item.id, "title", e.target.value)
                                      }
                                      placeholder="Project Name, Certification, etc."
                                      className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor={`item-subtitle-${item.id}`} className="text-white">
                                      Subtitle
                                    </Label>
                                    <Input
                                      id={`item-subtitle-${item.id}`}
                                      value={item.subtitle}
                                      onChange={(e) =>
                                        handleCustomItemChange(section.id, item.id, "subtitle", e.target.value)
                                      }
                                      placeholder="Organization, Issuer, etc."
                                      className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                                    />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`item-date-${item.id}`} className="text-white">
                                    Date
                                  </Label>
                                  <Input
                                    id={`item-date-${item.id}`}
                                    value={item.date}
                                    onChange={(e) =>
                                      handleCustomItemChange(section.id, item.id, "date", e.target.value)
                                    }
                                    placeholder="MM/YYYY or date range"
                                    className="bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor={`item-description-${item.id}`} className="text-white">
                                    Description
                                  </Label>
                                  <Textarea
                                    id={`item-description-${item.id}`}
                                    value={item.description}
                                    onChange={(e) =>
                                      handleCustomItemChange(section.id, item.id, "description", e.target.value)
                                    }
                                    placeholder="Describe this item..."
                                    className="min-h-[100px] bg-navy-900 border border-navy-800 focus:border-primary-600 focus:ring-1 focus:ring-primary-600/50 shadow-inner text-white"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}

                          <Button
                            onClick={() => addCustomItem(section.id)}
                            variant="outline"
                            className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300 w-full"
                          >
                            <Plus className="mr-2 h-4 w-4" /> Add Another Item
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="preview" className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-white">Resume Preview</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300">
                          <Download className="mr-2 h-4 w-4" /> Download Resume
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-navy-900 border border-navy-800">
                        <DropdownMenuItem
                          className="flex items-center cursor-pointer hover:bg-navy-800 text-white"
                          onClick={() => generateFile("pdf")}
                        >
                          <FileDown className="mr-2 h-4 w-4 text-primary-400" />
                          <span>Download as PDF</span>
                          {downloadFormat === "pdf" && <Check className="ml-2 h-4 w-4 text-primary-400" />}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center cursor-pointer hover:bg-navy-800 text-white"
                          onClick={() => generateFile("docx")}
                        >
                          <FileType2 className="mr-2 h-4 w-4 text-primary-400" />
                          <span>Download as DOCX</span>
                          {downloadFormat === "docx" && <Check className="ml-2 h-4 w-4 text-primary-400" />}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-lg overflow-auto max-h-[800px]">
                    <ResumePreview template={selectedTemplate} data={formData} />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-between mt-6">
                <Button
                  onClick={prevTab}
                  variant="outline"
                  disabled={activeTab === "personal"}
                  className="bg-transparent border border-primary-600 text-primary-400 hover:bg-primary-900/30 shadow-[0_0_5px_rgba(0,128,255,0.2)] transition-all duration-300"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button
                  onClick={nextTab}
                  disabled={activeTab === "preview"}
                  className="bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300"
                >
                  {activeTab === "custom" ? "Preview Resume" : "Next"} <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-navy-900 border-navy-800">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium text-white mb-4">Template Selection</h3>
                  <div className="grid gap-3">
                    <div
                      className={`p-3 border rounded-lg cursor-pointer ${
                        selectedTemplate === "modern"
                          ? "border-primary-500 bg-navy-800 shadow-[0_0_10px_rgba(0,128,255,0.3)]"
                          : "border-navy-700 hover:bg-navy-800"
                      }`}
                      onClick={() => setSelectedTemplate("modern")}
                    >
                      <div className="text-white font-medium mb-1">Modern</div>
                      <div className="text-gray-300 text-sm">Clean and professional layout with a sidebar</div>
                    </div>
                    <div
                      className={`p-3 border rounded-lg cursor-pointer ${
                        selectedTemplate === "classic"
                          ? "border-primary-500 bg-navy-800 shadow-[0_0_10px_rgba(0,128,255,0.3)]"
                          : "border-navy-700 hover:bg-navy-800"
                      }`}
                      onClick={() => setSelectedTemplate("classic")}
                    >
                      <div className="text-white font-medium mb-1">Classic</div>
                      <div className="text-gray-300 text-sm">Traditional layout with a focus on experience</div>
                    </div>
                    <div
                      className={`p-3 border rounded-lg cursor-pointer ${
                        selectedTemplate === "creative"
                          ? "border-primary-500 bg-navy-800 shadow-[0_0_10px_rgba(0,128,255,0.3)]"
                          : "border-navy-700 hover:bg-navy-800"
                      }`}
                      onClick={() => setSelectedTemplate("creative")}
                    >
                      <div className="text-white font-medium mb-1">Creative</div>
                      <div className="text-gray-300 text-sm">Unique design for creative professionals</div>
                    </div>
                    <div
                      className={`p-3 border rounded-lg cursor-pointer ${
                        selectedTemplate === "minimalist"
                          ? "border-primary-500 bg-navy-800 shadow-[0_0_10px_rgba(0,128,255,0.3)]"
                          : "border-navy-700 hover:bg-navy-800"
                      }`}
                      onClick={() => setSelectedTemplate("minimalist")}
                    >
                      <div className="text-white font-medium mb-1">Minimalist</div>
                      <div className="text-gray-300 text-sm">Clean, simple design with plenty of whitespace</div>
                    </div>
                    <div
                      className={`p-3 border rounded-lg cursor-pointer ${
                        selectedTemplate === "technical"
                          ? "border-primary-500 bg-navy-800 shadow-[0_0_10px_rgba(0,128,255,0.3)]"
                          : "border-navy-700 hover:bg-navy-800"
                      }`}
                      onClick={() => setSelectedTemplate("technical")}
                    >
                      <div className="text-white font-medium mb-1">Technical</div>
                      <div className="text-gray-300 text-sm">Developer-focused layout with code-like styling</div>
                    </div>
                    <div
                      className={`p-3 border rounded-lg cursor-pointer ${
                        selectedTemplate === "timeline"
                          ? "border-primary-500 bg-navy-800 shadow-[0_0_10px_rgba(0,128,255,0.3)]"
                          : "border-navy-700 hover:bg-navy-800"
                      }`}
                      onClick={() => setSelectedTemplate("timeline")}
                    >
                      <div className="text-white font-medium mb-1">Timeline</div>
                      <div className="text-gray-300 text-sm">
                        Visual timeline format highlighting career progression
                      </div>
                    </div>
                    <div
                      className={`p-3 border rounded-lg cursor-pointer ${
                        selectedTemplate === "ats-optimized"
                          ? "border-primary-500 bg-navy-800 shadow-[0_0_10px_rgba(0,128,255,0.3)]"
                          : "border-navy-700 hover:bg-navy-800"
                      }`}
                      onClick={() => setSelectedTemplate("ats-optimized")}
                    >
                      <div className="text-white font-medium mb-1">ATS-Optimized</div>
                      <div className="text-gray-300 text-sm">
                        Simple format designed to pass applicant tracking systems
                      </div>
                    </div>
                    <div
                      className={`p-3 border rounded-lg cursor-pointer ${
                        selectedTemplate === "executive"
                          ? "border-primary-500 bg-navy-800 shadow-[0_0_10px_rgba(0,128,255,0.3)]"
                          : "border-navy-700 hover:bg-navy-800"
                      }`}
                      onClick={() => setSelectedTemplate("executive")}
                    >
                      <div className="text-white font-medium mb-1">Executive</div>
                      <div className="text-gray-300 text-sm">
                        Premium design for senior professionals and executives
                      </div>
                    </div>
                    <div
                      className={`p-3 border rounded-lg cursor-pointer ${
                        selectedTemplate === "infographic"
                          ? "border-primary-500 bg-navy-800 shadow-[0_0_10px_rgba(0,128,255,0.3)]"
                          : "border-navy-700 hover:bg-navy-800"
                      }`}
                      onClick={() => setSelectedTemplate("infographic")}
                    >
                      <div className="text-white font-medium mb-1">Infographic</div>
                      <div className="text-gray-300 text-sm">
                        Visual resume with charts and graphics to showcase skills
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <ScoreCard score={calculateScore()} />
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 bg-navy-950 border-t border-navy-800 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <p className="text-sm">© {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="text-xs hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs hover:text-white">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
