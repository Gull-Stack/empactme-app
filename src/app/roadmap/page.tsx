import { CheckCircle, Clock, Circle, ArrowRight, Calendar } from "lucide-react";
import { roadmapData, getSummaryStats } from "@/lib/roadmap-data";
import type { Phase } from "@/lib/roadmap-data";
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
        return <span className="status-badge completed">Complete</span>;
      case "in-progress":
        return <span className="status-badge active">In Progress</span>;
      default:
        return <span className="status-badge pending">Planned</span>;
    }
  };

  const getTargetBlock = (phase: Phase) => {
    if (!phase.targetDate) return null;
    const isActive = phase.status === "in-progress";
    return (
      <div
        className={`mt-6 p-4 rounded-lg ${
          isActive ? "bg-brand-purple-light" : "bg-gray-100"
        }`}
      >
        <div className="flex items-center gap-2">
          <Calendar
            className={`w-4 h-4 ${
              isActive ? "text-brand-purple" : "text-gray-500"
            }`}
          />
          <span
            className={`text-sm font-medium ${
              isActive ? "text-brand-purple" : "text-gray-600"
            }`}
          >
            Target: {phase.targetDate}
          </span>
        </div>
      </div>
    );
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
              Track our progress as we build the future of influencer-commerce.
              Here&apos;s what we&apos;re working on and what&apos;s coming
              next.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="card">
              <div className="card-content text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {stats.completed}
                </div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">
                  {stats.inProgress}
                </div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  {stats.planned}
                </div>
                <div className="text-sm text-gray-600">Planned</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">
                  {stats.overall}%
                </div>
                <div className="text-sm text-gray-600">Overall Progress</div>
              </div>
            </div>
          </div>

          {/* Roadmap Phases */}
          <div className="space-y-8">
            {roadmapData.map((phase) => (
              <div key={phase.id} className="card">
                <div className="card-content">
                  {/* Phase Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4 flex-wrap">
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
                      />
                    </div>
                  </div>

                  {/* Phase Description */}
                  <p className="text-gray-600 mb-6">{phase.description}</p>

                  {/* Tasks List */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">
                      Tasks & Features
                    </h3>
                    {phase.tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
                      >
                        <div className="mt-0.5">
                          {getStatusIcon(task.status)}
                        </div>
                        <div className="flex-1">
                          <span
                            className={`${
                              task.status === "done"
                                ? "text-gray-600 line-through"
                                : "text-slate-800"
                            }`}
                          >
                            {task.name}
                          </span>
                          {task.description && (
                            <p className="text-xs text-gray-400 mt-1">
                              {task.description}
                            </p>
                          )}
                        </div>
                        {task.status === "in-progress" && (
                          <ArrowRight className="w-4 h-4 text-brand-purple mt-0.5" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Target Date */}
                  {getTargetBlock(phase)}
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
                  Join our community and help us prioritize features that matter
                  most to your business.
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
