import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ScoreCardProps {
  score: number
}

export default function ScoreCard({ score }: ScoreCardProps) {
  // Get feedback based on score
  const getFeedback = () => {
    if (score < 40) {
      return [
        "Add more details to your work experience.",
        "Include your professional summary.",
        "Add more skills relevant to your target job.",
        "Complete your education section.",
      ]
    } else if (score < 70) {
      return [
        "Quantify your achievements with numbers and metrics.",
        "Ensure your experience descriptions are action-oriented.",
        "Add more relevant skills to stand out.",
        "Make sure your contact information is complete.",
      ]
    } else {
      return [
        "Tailor your resume for specific job applications.",
        "Consider adding relevant certifications or projects.",
        "Review for any grammar or spelling issues.",
        "Double-check formatting in the preview.",
      ]
    }
  }

  // Determine score color
  const getScoreColor = () => {
    if (score < 40) return "text-red-500"
    if (score < 70) return "text-yellow-500"
    return "text-green-500"
  }

  // Determine progress color
  const getProgressColor = () => {
    if (score < 40) return "bg-red-500"
    if (score < 70) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <Card className="bg-gradient-to-b from-navy-900 to-navy-950 border border-navy-800/80 shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 shadow-[0_0_10px_rgba(0,128,255,0.3)]">
            <span className={`text-xl font-bold ${getScoreColor()}`}>{score}</span>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Resume Score</h3>
            <p className="text-gray-300 text-sm">Based on resume completeness</p>
          </div>
        </div>

        <div className="mb-4">
          <Progress value={score} className="h-2 bg-navy-700">
            <div className={`h-full ${getProgressColor()} animate-pulse`} style={{ width: `${score}%` }}></div>
          </Progress>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-gray-400">Needs Work</span>
            <span className="text-gray-400">Perfect</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-medium text-sm">Recommendations:</h4>
          {getFeedback().map((feedback, index) => (
            <div
              key={index}
              className="p-3 bg-navy-800 rounded-lg border border-navy-700/50 text-sm text-gray-300 shadow-inner"
            >
              {feedback}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
