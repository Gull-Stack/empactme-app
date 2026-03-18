import { CheckCircle, Clock, Circle, ArrowRight } from "lucide-react";
import { roadmapData, getSummaryStats } from "@/lib/roadmap-data";
import Navbar from "@/components/Navbar";

export default function RoadmapPage() {
  const stats = getSummaryStats();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "done":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-brand-purple animate-pulse" />;
      default:
        return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "done":
        return <span className="status-badge complete">Complete</span>;
      case "in-progress":
        return <span className="status-badge in-progress">In Progress</span>;
      default:
        return <span className="status-badge planned">Planned</span>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Product Roadmap
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track our progress as we build the future of influencer marketing. Here's what we're working on and what's coming next.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="card">
              <div className="card-content text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{stats.completed}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">{stats.inProgress}</div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">{stats.planned}</div>
                <div className="text-sm text-gray-600">Planned</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">{stats.overall}%</div>
                <div className="text-sm text-gray-600">Overall Progress</div>
              </div>
            </div>
          </div>

          {/* Roadmap Phases */}
          <div className="space-y-8">
            {roadmapData.map((phase, index) => (
              <div key={phase.id} className="card">
                <div className="card-content">
                  {/* Phase Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <h2 className="text-2xl font-bold text-slate-800">
                        {phase.name}
                      </h2>
                      {getStatusBadge(phase.status)}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-purple mb-1">
                        {phase.progress}%
                      </div>
                      <div className="text-sm text-gray-400">Complete</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-brand-purple h-2 rounded-full transition-all duration-500"
                        style={{ width: `${phase.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Phase Description */}
                  <p className="text-gray-600 mb-6">{phase.description}</p>

                  {/* Tasks List */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Tasks & Features</h3>
                    {phase.tasks.map((task) => (
                      <div key={task.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                        {getStatusIcon(task.status)}
                        <span className={`flex-1 ${task.status === 'done' ? 'text-gray-600 line-through' : 'text-slate-800'}`}>
                          {task.name}
                        </span>
                        {task.status === 'in-progress' && (
                          <ArrowRight className="w-4 h-4 text-brand-purple" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Target Dates */}
                  {phase.status === 'in-progress' && (
                    <div className="mt-6 p-4 bg-brand-purple-light rounded-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-purple" />
                        <span className="text-sm font-medium text-brand-purple">
                          Target Completion: Q2 2024
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {phase.status === 'planned' && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">
                          Estimated Start: Q3 2024
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-16">
            <div className="card max-w-2xl mx-auto">
              <div className="card-content">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Want to Shape Our Roadmap?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join our community and help us prioritize features that matter most to your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary px-6 py-3">
                    Join Beta Program
                  </button>
                  <button className="btn-secondary px-6 py-3">
                    Request Feature
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}