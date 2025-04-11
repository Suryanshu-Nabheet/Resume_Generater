"use client"

interface ResumePreviewProps {
  template: string
  data: any
}

export default function ResumePreview({ template, data }: ResumePreviewProps) {
  // Helper function to calculate proper timeline item positions
  const getTimelinePosition = (index, count) => {
    if (count === 0) return 0
    const itemHeight = 180
    const topOffset = 24
    return index * itemHeight + topOffset
  }

  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return (
          <div className="font-sans">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="bg-navy-900 text-white p-6 md:w-1/3">
                {data.personal.photo && (
                  <div className="flex justify-center mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/10">
                      <img
                        src={data.personal.photo || "/placeholder.svg"}
                        alt={data.personal.fullName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className="mb-6">
                  <h1 className="text-2xl font-bold">{data.personal.fullName || "Your Name"}</h1>
                  <p className="text-gray-300">{data.personal.jobTitle || "Your Job Title"}</p>
                </div>

                <div className="mb-6">
                  <h2 className="font-bold text-lg border-b border-primary pb-1 mb-3">Contact</h2>
                  {data.personal.email && <p className="mb-1 text-sm">Email: {data.personal.email}</p>}
                  {data.personal.phone && <p className="mb-1 text-sm">Phone: {data.personal.phone}</p>}
                  {data.personal.location && <p className="mb-1 text-sm">Location: {data.personal.location}</p>}
                </div>

                <div className="mb-6">
                  <h2 className="font-bold text-lg border-b border-primary pb-1 mb-3">Skills</h2>
                  <ul className="list-disc list-inside">
                    {data.skills.map(
                      (skill) =>
                        skill.name && (
                          <li key={skill.id} className="text-sm mb-1">
                            {skill.name}
                          </li>
                        ),
                    )}
                  </ul>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 md:w-2/3">
                {data.personal.summary && (
                  <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">Professional Summary</h2>
                    <p className="text-sm">{data.personal.summary}</p>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">Work Experience</h2>
                  {data.experience.map(
                    (exp) =>
                      exp.company && (
                        <div key={exp.id} className="mb-4">
                          <div className="flex justify-between">
                            <h3 className="font-semibold">{exp.position}</h3>
                            <div className="text-sm">
                              {exp.startDate} - {exp.endDate || "Present"}
                            </div>
                          </div>
                          <p className="text-sm font-medium mb-1">{exp.company}</p>
                          <p className="text-sm">{exp.description}</p>
                        </div>
                      ),
                  )}
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">Education</h2>
                  {data.education.map(
                    (edu) =>
                      edu.institution && (
                        <div key={edu.id} className="mb-4">
                          <div className="flex justify-between">
                            <h3 className="font-semibold">
                              {edu.degree} {edu.field && `in ${edu.field}`}
                            </h3>
                            <div className="text-sm">
                              {edu.startDate} - {edu.endDate || "Present"}
                            </div>
                          </div>
                          <p className="text-sm font-medium">{edu.institution}</p>
                        </div>
                      ),
                  )}
                </div>

                {/* Custom Sections */}
                {data.customSections.map(
                  (section) =>
                    section.title &&
                    section.items.some((item) => item.title || item.description) && (
                      <div key={section.id} className="mb-6">
                        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">{section.title}</h2>
                        {section.items.map(
                          (item) =>
                            (item.title || item.description) && (
                              <div key={item.id} className="mb-4">
                                <div className="flex justify-between">
                                  <h3 className="font-semibold">{item.title}</h3>
                                  {item.date && <div className="text-sm">{item.date}</div>}
                                </div>
                                {item.subtitle && <p className="text-sm font-medium mb-1">{item.subtitle}</p>}
                                {item.description && <p className="text-sm">{item.description}</p>}
                              </div>
                            ),
                        )}
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
        )

      case "classic":
        return (
          <div className="font-serif p-8">
            <div className="text-center mb-6">
              {data.personal.photo && (
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
                    <img
                      src={data.personal.photo || "/placeholder.svg"}
                      alt={data.personal.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              <h1 className="text-3xl font-bold mb-1">{data.personal.fullName || "Your Name"}</h1>
              {data.personal.jobTitle && <p className="text-lg mb-2">{data.personal.jobTitle}</p>}
              <div className="flex justify-center gap-4 text-sm">
                {data.personal.email && <p>{data.personal.email}</p>}
                {data.personal.phone && <p>{data.personal.phone}</p>}
                {data.personal.location && <p>{data.personal.location}</p>}
              </div>
            </div>

            {data.personal.summary && (
              <div className="mb-6">
                <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-3">Summary</h2>
                <p className="text-sm">{data.personal.summary}</p>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-3">Experience</h2>
              {data.experience.map(
                (exp) =>
                  exp.company && (
                    <div key={exp.id} className="mb-4">
                      <div className="flex justify-between">
                        <h3 className="font-bold">{exp.position}</h3>
                        <div className="text-sm">
                          {exp.startDate} - {exp.endDate || "Present"}
                        </div>
                      </div>
                      <p className="text-sm italic mb-1">{exp.company}</p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  ),
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-3">Education</h2>
              {data.education.map(
                (edu) =>
                  edu.institution && (
                    <div key={edu.id} className="mb-4">
                      <div className="flex justify-between">
                        <h3 className="font-bold">
                          {edu.degree} {edu.field && `in ${edu.field}`}
                        </h3>
                        <div className="text-sm">
                          {edu.startDate} - {edu.endDate || "Present"}
                        </div>
                      </div>
                      <p className="text-sm italic">{edu.institution}</p>
                    </div>
                  ),
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map(
                  (skill) =>
                    skill.name && (
                      <div key={skill.id} className="bg-gray-100 px-3 py-1 text-sm rounded">
                        {skill.name}
                      </div>
                    ),
                )}
              </div>
            </div>

            {/* Custom Sections */}
            {data.customSections.map(
              (section) =>
                section.title &&
                section.items.some((item) => item.title || item.description) && (
                  <div key={section.id} className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-3">{section.title}</h2>
                    {section.items.map(
                      (item) =>
                        (item.title || item.description) && (
                          <div key={item.id} className="mb-4">
                            <div className="flex justify-between">
                              <h3 className="font-bold">{item.title}</h3>
                              {item.date && <div className="text-sm">{item.date}</div>}
                            </div>
                            {item.subtitle && <p className="text-sm italic mb-1">{item.subtitle}</p>}
                            {item.description && <p className="text-sm">{item.description}</p>}
                          </div>
                        ),
                    )}
                  </div>
                ),
            )}
          </div>
        )

      case "creative":
        return (
          <div className="font-sans">
            <div className="bg-primary/20 p-8">
              <div className="flex items-center gap-6">
                {data.personal.photo && (
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/50 flex-shrink-0">
                    <img
                      src={data.personal.photo || "/placeholder.svg"}
                      alt={data.personal.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-3xl font-bold mb-1">{data.personal.fullName || "Your Name"}</h1>
                  {data.personal.jobTitle && <p className="text-xl mb-2">{data.personal.jobTitle}</p>}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 p-6">
              <div className="col-span-1">
                <div className="mb-6">
                  <h2 className="font-bold text-lg border-b border-primary pb-1 mb-3">Contact</h2>
                  {data.personal.email && <p className="mb-1 text-sm">{data.personal.email}</p>}
                  {data.personal.phone && <p className="mb-1 text-sm">{data.personal.phone}</p>}
                  {data.personal.location && <p className="mb-1 text-sm">{data.personal.location}</p>}
                </div>

                <div>
                  <h2 className="font-bold text-lg border-b border-primary pb-1 mb-3">Skills</h2>
                  {data.skills.map(
                    (skill) =>
                      skill.name && (
                        <div key={skill.id} className="mb-2">
                          <div className="bg-gray-200 h-2 rounded-full mb-1">
                            <div className="bg-primary h-2 rounded-full w-4/5"></div>
                          </div>
                          <p className="text-sm">{skill.name}</p>
                        </div>
                      ),
                  )}
                </div>
              </div>

              <div className="col-span-2">
                {data.personal.summary && (
                  <div className="mb-6">
                    <h2 className="text-lg font-bold text-primary mb-3">About Me</h2>
                    <p className="text-sm">{data.personal.summary}</p>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-lg font-bold text-primary mb-3">Experience</h2>
                  {data.experience.map(
                    (exp) =>
                      exp.company && (
                        <div
                          key={exp.id}
                          className="mb-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-200"
                        >
                          <div className="absolute w-3 h-3 bg-primary rounded-full left-[-3px] top-1"></div>
                          <h3 className="font-semibold">{exp.position}</h3>
                          <p className="text-sm font-medium">{exp.company}</p>
                          <p className="text-xs mb-1">
                            {exp.startDate} - {exp.endDate || "Present"}
                          </p>
                          <p className="text-sm">{exp.description}</p>
                        </div>
                      ),
                  )}
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold text-primary mb-3">Education</h2>
                  {data.education.map(
                    (edu) =>
                      edu.institution && (
                        <div key={edu.id} className="mb-4">
                          <h3 className="font-semibold">
                            {edu.degree} {edu.field && `in ${edu.field}`}
                          </h3>
                          <p className="text-sm font-medium">{edu.institution}</p>
                          <p className="text-xs">
                            {edu.startDate} - {edu.endDate || "Present"}
                          </p>
                        </div>
                      ),
                  )}
                </div>

                {/* Custom Sections */}
                {data.customSections.map(
                  (section) =>
                    section.title &&
                    section.items.some((item) => item.title || item.description) && (
                      <div key={section.id} className="mb-6">
                        <h2 className="text-lg font-bold text-primary mb-3">{section.title}</h2>
                        {section.items.map(
                          (item) =>
                            (item.title || item.description) && (
                              <div
                                key={item.id}
                                className="mb-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-200"
                              >
                                <div className="absolute w-3 h-3 bg-primary rounded-full left-[-3px] top-1"></div>
                                <h3 className="font-semibold">{item.title}</h3>
                                {item.subtitle && <p className="text-sm font-medium">{item.subtitle}</p>}
                                {item.date && <p className="text-xs mb-1">{item.date}</p>}
                                {item.description && <p className="text-sm">{item.description}</p>}
                              </div>
                            ),
                        )}
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
        )

      case "minimalist":
        return (
          <div className="font-sans p-8 bg-white">
            <div className="mb-8">
              <div className="flex items-center gap-4">
                {data.personal.photo && (
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                    <img
                      src={data.personal.photo || "/placeholder.svg"}
                      alt={data.personal.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-3xl font-light mb-1">{data.personal.fullName || "Your Name"}</h1>
                  {data.personal.jobTitle && <p className="text-lg text-gray-600 mb-2">{data.personal.jobTitle}</p>}
                  <div className="flex gap-4 text-sm text-gray-600">
                    {data.personal.email && <p>{data.personal.email}</p>}
                    {data.personal.phone && <p>{data.personal.phone}</p>}
                    {data.personal.location && <p>{data.personal.location}</p>}
                  </div>
                </div>
              </div>
            </div>

            {data.personal.summary && (
              <div className="mb-8">
                <p className="text-sm leading-relaxed">{data.personal.summary}</p>
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-lg font-light text-gray-800 mb-4">Experience</h2>
              {data.experience.map(
                (exp) =>
                  exp.company && (
                    <div key={exp.id} className="mb-6">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-medium">{exp.position}</h3>
                        <div className="text-sm text-gray-600">
                          {exp.startDate} - {exp.endDate || "Present"}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{exp.company}</p>
                      <p className="text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ),
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-light text-gray-800 mb-4">Education</h2>
              {data.education.map(
                (edu) =>
                  edu.institution && (
                    <div key={edu.id} className="mb-4">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-medium">
                          {edu.degree} {edu.field && `in ${edu.field}`}
                        </h3>
                        <div className="text-sm text-gray-600">
                          {edu.startDate} - {edu.endDate || "Present"}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{edu.institution}</p>
                    </div>
                  ),
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-light text-gray-800 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {data.skills.map(
                  (skill) =>
                    skill.name && (
                      <p key={skill.id} className="text-sm">
                        {skill.name}
                      </p>
                    ),
                )}
              </div>
            </div>

            {/* Custom Sections */}
            {data.customSections.map(
              (section) =>
                section.title &&
                section.items.some((item) => item.title || item.description) && (
                  <div key={section.id} className="mb-8">
                    <h2 className="text-lg font-light text-gray-800 mb-4">{section.title}</h2>
                    {section.items.map(
                      (item) =>
                        (item.title || item.description) && (
                          <div key={item.id} className="mb-4">
                            <div className="flex justify-between items-baseline">
                              <h3 className="font-medium">{item.title}</h3>
                              {item.date && <div className="text-sm text-gray-600">{item.date}</div>}
                            </div>
                            {item.subtitle && <p className="text-sm text-gray-600 mb-1">{item.subtitle}</p>}
                            {item.description && <p className="text-sm leading-relaxed">{item.description}</p>}
                          </div>
                        ),
                    )}
                  </div>
                ),
            )}
          </div>
        )

      case "technical":
        return (
          <div className="font-mono bg-white">
            <div className="bg-navy-900 text-white p-6">
              <div className="flex items-center gap-4">
                {data.personal.photo && (
                  <div className="w-16 h-16 rounded-md overflow-hidden border-2 border-primary-400/50 flex-shrink-0">
                    <img
                      src={data.personal.photo || "/placeholder.svg"}
                      alt={data.personal.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-2xl font-bold mb-1">{data.personal.fullName || "Your Name"}</h1>
                  {data.personal.jobTitle && <p className="text-md mb-2">{data.personal.jobTitle}</p>}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm mt-3">
                {data.personal.email && (
                  <p className="flex items-center gap-1">
                    <span className="text-primary-400">@</span> {data.personal.email}
                  </p>
                )}
                {data.personal.phone && (
                  <p className="flex items-center gap-1">
                    <span className="text-primary-400">#</span> {data.personal.phone}
                  </p>
                )}
                {data.personal.location && (
                  <p className="flex items-center gap-1">
                    <span className="text-primary-400">~</span> {data.personal.location}
                  </p>
                )}
              </div>
            </div>

            <div className="p-6">
              {data.personal.summary && (
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-2 flex items-center">
                    <span className="text-primary-600 mr-2">{">"}</span> Summary
                  </h2>
                  <div className="border-l-2 border-gray-300 pl-4">
                    <p className="text-sm">{data.personal.summary}</p>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2 flex items-center">
                  <span className="text-primary-600 mr-2">{">"}</span> Skills
                </h2>
                <div className="border-l-2 border-gray-300 pl-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {data.skills.map(
                      (skill) =>
                        skill.name && (
                          <div key={skill.id} className="text-sm bg-gray-100 px-3 py-1 rounded border border-gray-200">
                            {skill.name}
                          </div>
                        ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2 flex items-center">
                  <span className="text-primary-600 mr-2">{">"}</span> Experience
                </h2>
                <div className="border-l-2 border-gray-300 pl-4">
                  {data.experience.map(
                    (exp) =>
                      exp.company && (
                        <div key={exp.id} className="mb-4">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                            <h3 className="font-bold">{exp.position}</h3>
                            <div className="text-sm text-gray-600">
                              {exp.startDate} - {exp.endDate || "Present"}
                            </div>
                          </div>
                          <p className="text-sm font-medium text-primary-600 mb-1">{exp.company}</p>
                          <p className="text-sm">{exp.description}</p>
                        </div>
                      ),
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2 flex items-center">
                  <span className="text-primary-600 mr-2">{">"}</span> Education
                </h2>
                <div className="border-l-2 border-gray-300 pl-4">
                  {data.education.map(
                    (edu) =>
                      edu.institution && (
                        <div key={edu.id} className="mb-4">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                            <h3 className="font-bold">
                              {edu.degree} {edu.field && `in ${edu.field}`}
                            </h3>
                            <div className="text-sm text-gray-600">
                              {edu.startDate} - {edu.endDate || "Present"}
                            </div>
                          </div>
                          <p className="text-sm text-primary-600">{edu.institution}</p>
                        </div>
                      ),
                  )}
                </div>
              </div>

              {/* Custom Sections */}
              {data.customSections.map(
                (section) =>
                  section.title &&
                  section.items.some((item) => item.title || item.description) && (
                    <div key={section.id} className="mb-6">
                      <h2 className="text-lg font-bold mb-2 flex items-center">
                        <span className="text-primary-600 mr-2">{">"}</span> {section.title}
                      </h2>
                      <div className="border-l-2 border-gray-300 pl-4">
                        {section.items.map(
                          (item) =>
                            (item.title || item.description) && (
                              <div key={item.id} className="mb-4">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                  <h3 className="font-bold">{item.title}</h3>
                                  {item.date && <div className="text-sm text-gray-600">{item.date}</div>}
                                </div>
                                {item.subtitle && (
                                  <p className="text-sm font-medium text-primary-600 mb-1">{item.subtitle}</p>
                                )}
                                {item.description && <p className="text-sm">{item.description}</p>}
                              </div>
                            ),
                        )}
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        )

      case "timeline":
        return (
          <div className="font-sans bg-white p-6">
            <div className="flex items-center justify-center mb-8 gap-6">
              {data.personal.photo && (
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-500/20 flex-shrink-0">
                  <img
                    src={data.personal.photo || "/placeholder.svg"}
                    alt={data.personal.fullName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-1">{data.personal.fullName || "Your Name"}</h1>
                {data.personal.jobTitle && <p className="text-xl text-gray-600 mb-2">{data.personal.jobTitle}</p>}
                <div className="flex justify-center gap-4 text-sm text-gray-600">
                  {data.personal.email && <p>{data.personal.email}</p>}
                  {data.personal.phone && <p>{data.personal.phone}</p>}
                  {data.personal.location && <p>{data.personal.location}</p>}
                </div>
              </div>
            </div>

            {data.personal.summary && (
              <div className="mb-8 max-w-2xl mx-auto">
                <p className="text-center text-sm leading-relaxed">{data.personal.summary}</p>
              </div>
            )}

            <div className="relative max-w-4xl mx-auto">
              {/* Experience Section */}
              <div className="text-center mb-8">
                <h2 className="inline-block text-lg font-bold bg-primary-600 text-white px-4 py-1 rounded">
                  Experience
                </h2>
              </div>

              <div className="relative pb-8">
                {/* Timeline center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-primary-600"></div>

                {/* Timeline items */}
                {data.experience.map(
                  (exp, index) =>
                    exp.company && (
                      <div key={exp.id} className="relative mb-8">
                        {/* Circle marker */}
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full z-10"
                          style={{ top: "18px" }}
                        ></div>

                        <div className={`flex w-full ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                          <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                            <h3 className="font-bold text-lg">{exp.position}</h3>
                            <p className="text-primary-600 mb-1">{exp.company}</p>
                            <p className="text-sm text-gray-600 mb-2">
                              {exp.startDate} - {exp.endDate || "Present"}
                            </p>
                            <p className="text-sm">{exp.description}</p>
                          </div>
                        </div>
                      </div>
                    ),
                )}
              </div>

              {/* Education Section */}
              <div className="text-center mb-8 mt-16">
                <h2 className="inline-block text-lg font-bold bg-primary-600 text-white px-4 py-1 rounded">
                  Education
                </h2>
              </div>

              <div className="relative pb-8">
                {/* Timeline center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-primary-600"></div>

                {/* Timeline items */}
                {data.education.map(
                  (edu, index) =>
                    edu.institution && (
                      <div key={edu.id} className="relative mb-8">
                        {/* Circle marker */}
                        <div
                          className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full z-10"
                          style={{ top: "18px" }}
                        ></div>

                        <div className={`flex w-full ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                          <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                            <h3 className="font-bold">
                              {edu.degree} {edu.field && `in ${edu.field}`}
                            </h3>
                            <p className="text-primary-600 mb-1">{edu.institution}</p>
                            <p className="text-sm text-gray-600">
                              {edu.startDate} - {edu.endDate || "Present"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ),
                )}
              </div>

              {/* Custom Sections */}
              {data.customSections.map(
                (section, sectionIndex) =>
                  section.title &&
                  section.items.some((item) => item.title || item.description) && (
                    <div key={section.id} className="mt-16">
                      <div className="text-center mb-8">
                        <h2 className="inline-block text-lg font-bold bg-primary-600 text-white px-4 py-1 rounded">
                          {section.title}
                        </h2>
                      </div>

                      <div className="relative pb-8">
                        {/* Timeline center line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-primary-600"></div>

                        {/* Timeline items */}
                        {section.items.map(
                          (item, index) =>
                            (item.title || item.description) && (
                              <div key={item.id} className="relative mb-8">
                                {/* Circle marker */}
                                <div
                                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full z-10"
                                  style={{ top: "18px" }}
                                ></div>

                                <div className={`flex w-full ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                                    <h3 className="font-bold">{item.title}</h3>
                                    {item.subtitle && <p className="text-primary-600 mb-1">{item.subtitle}</p>}
                                    {item.date && <p className="text-sm text-gray-600 mb-2">{item.date}</p>}
                                    {item.description && <p className="text-sm">{item.description}</p>}
                                  </div>
                                </div>
                              </div>
                            ),
                        )}
                      </div>
                    </div>
                  ),
              )}
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
              <h2 className="text-center text-lg font-bold bg-primary-600 text-white px-4 py-1 rounded inline-block mx-auto mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {data.skills.map(
                  (skill) =>
                    skill.name && (
                      <div key={skill.id} className="bg-gray-100 border border-gray-200 px-3 py-1 text-sm rounded">
                        {skill.name}
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
        )

      case "ats-optimized":
        return (
          <div className="font-sans p-6 bg-white">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-1">{data.personal.fullName || "Your Name"}</h1>
              {data.personal.jobTitle && <p className="text-lg mb-2">{data.personal.jobTitle}</p>}
              <div className="flex flex-wrap gap-4 text-sm">
                {data.personal.email && <p>{data.personal.email}</p>}
                {data.personal.phone && <p>{data.personal.phone}</p>}
                {data.personal.location && <p>{data.personal.location}</p>}
              </div>
            </div>

            {data.personal.summary && (
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2">Professional Summary</h2>
                <p className="text-sm">{data.personal.summary}</p>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {data.skills.map(
                  (skill) =>
                    skill.name && (
                      <div key={skill.id} className="text-sm">
                        • {skill.name}
                      </div>
                    ),
                )}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Work Experience</h2>
              {data.experience.map(
                (exp) =>
                  exp.company && (
                    <div key={exp.id} className="mb-4">
                      <h3 className="font-bold">{exp.position}</h3>
                      <p className="text-sm mb-1">
                        {exp.company} | {exp.startDate} - {exp.endDate || "Present"}
                      </p>
                      <p className="text-sm">{exp.description}</p>
                    </div>
                  ),
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Education</h2>
              {data.education.map(
                (edu) =>
                  edu.institution && (
                    <div key={edu.id} className="mb-4">
                      <h3 className="font-bold">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-sm">
                        {edu.institution} | {edu.startDate} - {edu.endDate || "Present"}
                      </p>
                    </div>
                  ),
              )}
            </div>

            {/* Custom Sections */}
            {data.customSections.map(
              (section) =>
                section.title &&
                section.items.some((item) => item.title || item.description) && (
                  <div key={section.id} className="mb-6">
                    <h2 className="text-lg font-bold mb-2">{section.title}</h2>
                    {section.items.map(
                      (item) =>
                        (item.title || item.description) && (
                          <div key={item.id} className="mb-4">
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm mb-1">
                              {item.subtitle && `${item.subtitle}`} {item.date && `| ${item.date}`}
                            </p>
                            {item.description && <p className="text-sm">{item.description}</p>}
                          </div>
                        ),
                    )}
                  </div>
                ),
            )}
          </div>
        )

      case "executive":
        return (
          <div className="font-serif bg-white">
            <div className="border-b-4 border-primary-600 pb-6 pt-8 px-8">
              <div className="flex items-center justify-center gap-6">
                {data.personal.photo && (
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-300 flex-shrink-0">
                    <img
                      src={data.personal.photo || "/placeholder.svg"}
                      alt={data.personal.fullName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="text-center flex-1">
                  <h1 className="text-4xl font-bold mb-2">{data.personal.fullName || "Your Name"}</h1>
                  {data.personal.jobTitle && <p className="text-xl text-gray-700 mb-4">{data.personal.jobTitle}</p>}
                  <div className="flex justify-center gap-6 text-sm text-gray-600">
                    {data.personal.email && <p>{data.personal.email}</p>}
                    {data.personal.phone && <p>{data.personal.phone}</p>}
                    {data.personal.location && <p>{data.personal.location}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 py-6">
              {data.personal.summary && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-primary-700 mb-3 pb-1 border-b border-gray-300">
                    Executive Summary
                  </h2>
                  <p className="text-base leading-relaxed">{data.personal.summary}</p>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-xl font-bold text-primary-700 mb-3 pb-1 border-b border-gray-300">
                  Professional Experience
                </h2>
                {data.experience.map(
                  (exp) =>
                    exp.company && (
                      <div key={exp.id} className="mb-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                          <h3 className="text-lg font-bold">{exp.company}</h3>
                          <div className="text-sm font-medium">
                            {exp.startDate} - {exp.endDate || "Present"}
                          </div>
                        </div>
                        <p className="text-base font-semibold mb-2">{exp.position}</p>
                        <p className="text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    ),
                )}
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-primary-700 mb-3 pb-1 border-b border-gray-300">Education</h2>
                {data.education.map(
                  (edu) =>
                    edu.institution && (
                      <div key={edu.id} className="mb-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                          <h3 className="text-lg font-bold">{edu.institution}</h3>
                          <div className="text-sm font-medium">
                            {edu.startDate} - {edu.endDate || "Present"}
                          </div>
                        </div>
                        <p className="text-base">
                          {edu.degree} {edu.field && `in ${edu.field}`}
                        </p>
                      </div>
                    ),
                )}
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-primary-700 mb-3 pb-1 border-b border-gray-300">
                  Core Competencies
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {data.skills.map(
                    (skill) =>
                      skill.name && (
                        <div key={skill.id} className="text-sm py-1">
                          • {skill.name}
                        </div>
                      ),
                  )}
                </div>
              </div>

              {/* Custom Sections */}
              {data.customSections.map(
                (section) =>
                  section.title &&
                  section.items.some((item) => item.title || item.description) && (
                    <div key={section.id} className="mb-8">
                      <h2 className="text-xl font-bold text-primary-700 mb-3 pb-1 border-b border-gray-300">
                        {section.title}
                      </h2>
                      {section.items.map(
                        (item) =>
                          (item.title || item.description) && (
                            <div key={item.id} className="mb-4">
                              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                {item.date && <div className="text-sm font-medium">{item.date}</div>}
                              </div>
                              {item.subtitle && <p className="text-base mb-1">{item.subtitle}</p>}
                              {item.description && <p className="text-sm leading-relaxed">{item.description}</p>}
                            </div>
                          ),
                      )}
                    </div>
                  ),
              )}
            </div>
          </div>
        )

      case "infographic":
        return (
          <div className="font-sans bg-white">
            <div className="grid grid-cols-12 min-h-[1000px]">
              {/* Left sidebar */}
              <div className="col-span-4 bg-primary-700 text-white p-6">
                <div className="mb-8 text-center">
                  {data.personal.photo ? (
                    <div className="w-32 h-32 rounded-full bg-white mx-auto mb-4 flex items-center justify-center overflow-hidden border-4 border-white/30">
                      <img
                        src={data.personal.photo || "/placeholder.svg"}
                        alt={data.personal.fullName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-700">
                        {data.personal.fullName ? data.personal.fullName.charAt(0) : "?"}
                      </span>
                    </div>
                  )}
                  <h1 className="text-2xl font-bold mb-1">{data.personal.fullName || "Your Name"}</h1>
                  {data.personal.jobTitle && <p className="text-lg mb-2">{data.personal.jobTitle}</p>}
                </div>

                <div className="mb-6">
                  <h2 className="font-bold text-lg border-b border-white/30 pb-1 mb-3">Contact</h2>
                  {data.personal.email && (
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">@</div>
                      <p className="text-sm">{data.personal.email}</p>
                    </div>
                  )}
                  {data.personal.phone && (
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">#</div>
                      <p className="text-sm">{data.personal.phone}</p>
                    </div>
                  )}
                  {data.personal.location && (
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">⌂</div>
                      <p className="text-sm">{data.personal.location}</p>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h2 className="font-bold text-lg border-b border-white/30 pb-1 mb-3">Skills</h2>
                  {data.skills.map(
                    (skill, index) =>
                      skill.name && (
                        <div key={skill.id} className="mb-3">
                          <div className="flex justify-between mb-1">
                            <p className="text-sm">{skill.name}</p>
                            <p className="text-sm">{85 - index * 5}%</p>
                          </div>
                          <div className="w-full bg-white/20 h-2 rounded-full">
                            <div className="bg-white h-2 rounded-full" style={{ width: `${85 - index * 5}%` }}></div>
                          </div>
                        </div>
                      ),
                  )}
                </div>

                <div className="mb-6">
                  <h2 className="font-bold text-lg border-b border-white/30 pb-1 mb-3">Education</h2>
                  {data.education.map(
                    (edu) =>
                      edu.institution && (
                        <div key={edu.id} className="mb-4">
                          <h3 className="font-semibold text-sm">
                            {edu.degree} {edu.field && `in ${edu.field}`}
                          </h3>
                          <p className="text-sm opacity-80">{edu.institution}</p>
                          <p className="text-xs opacity-70">
                            {edu.startDate} - {edu.endDate || "Present"}
                          </p>
                        </div>
                      ),
                  )}
                </div>
              </div>

              {/* Main content */}
              <div className="col-span-8 p-6">
                {data.personal.summary && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-primary-700 mb-3">About Me</h2>
                    <div className="p-4 border-l-4 border-primary-700 bg-gray-50">
                      <p className="text-sm leading-relaxed">{data.personal.summary}</p>
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-primary-700 mb-4">Work Experience</h2>
                  {data.experience.map(
                    (exp, index) =>
                      exp.company && (
                        <div key={exp.id} className="mb-6 relative">
                          {index < data.experience.length - 1 && (
                            <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-gray-200"></div>
                          )}
                          <div className="flex">
                            <div className="w-8 h-8 rounded-full bg-primary-700 text-white flex items-center justify-center z-10">
                              {index + 1}
                            </div>
                            <div className="ml-4 flex-1">
                              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                                <h3 className="font-bold">{exp.position}</h3>
                                <div className="text-sm text-gray-600">
                                  {exp.startDate} - {exp.endDate || "Present"}
                                </div>
                              </div>
                              <p className="text-sm font-medium text-primary-700 mb-1">{exp.company}</p>
                              <p className="text-sm">{exp.description}</p>
                            </div>
                          </div>
                        </div>
                      ),
                  )}
                </div>

                {/* Custom Sections */}
                {data.customSections.map(
                  (section) =>
                    section.title &&
                    section.items.some((item) => item.title || item.description) && (
                      <div key={section.id} className="mb-8">
                        <h2 className="text-xl font-bold text-primary-700 mb-4">{section.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.items.map(
                            (item) =>
                              (item.title || item.description) && (
                                <div
                                  key={item.id}
                                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                                >
                                  <h3 className="font-bold mb-1">{item.title}</h3>
                                  {item.subtitle && <p className="text-sm text-primary-700 mb-1">{item.subtitle}</p>}
                                  {item.date && <p className="text-xs text-gray-600 mb-2">{item.date}</p>}
                                  {item.description && <p className="text-sm">{item.description}</p>}
                                </div>
                              ),
                          )}
                        </div>
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="p-6 text-center">
            <p>No template selected. Please choose a template.</p>
          </div>
        )
    }
  }

  return renderTemplate()
}
