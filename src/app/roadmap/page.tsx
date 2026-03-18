"use client";

import Navbar from "@/components/Navbar";
import { roadmapData, getSummaryStats, type Phase, type Task } from "@/lib/roadmap-data";
import { CheckCircle, Circle, Clock, ArrowRight } from "lucide-react";

export default function RoadmapPage() {
  const stats = getSummaryStats();

  const getStatusIcon = (status: Task["status"]) => {
    switch (status) {
      case "done":
        return <CheckCircle className="w-5 h-5 text-green" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-cyan" />;
      case "planned":
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPhaseStatusColor = (status: Phase["status"]) => {
    switch (status) {
      case "done":
        return "border-green bg-green/5";
      case "in-progress":
        return "border-cyan bg-cyan/5";
      case "planned":
        return "border-gray-500 bg-gray-500/5";
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Product Roadmap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track our progress as we build the future of influencer commerce. 
            Transparent development, measurable milestones.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green mb-2">{stats.completed}</div>
            <div className="text-sm text-gray-400">Completed</div>
          </div>
          
          <div className="bg-surface border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan mb-2">{stats.inProgress}</div>
            <div className="text-sm text-gray-400">In Progress</div>
          </div>
          
          <div className="bg-surface border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gray-300 mb-2">{stats.planned}</div>
            <div className="text-sm text-gray-400">Planned</div>
          </div>
          
          <div className="bg-surface border border-border rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{stats.overall}%</div>
            <div className="text-sm text-gray-400">Overall Progress</div>
          </div>
        </div>

        {/* Phase Cards */}
        <div className="space-y-8">
          {roadmapData.map((phase, phaseIndex) => (
            <div 
              key={phase.id} 
              className={`border-2 rounded-xl p-8 transition-all duration-300 hover:border-accent/50 ${getPhaseStatusColor(phase.status)}`}
            >
              {/* Phase Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl font-serif font-bold mb-2">
                    {phase.name}
                  </h2>
                  <p className="text-gray-300">
                    {phase.description}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      {phase.progress}%
                    </div>
                    <div className="text-sm text-gray-400">
                      Complete
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="w-full bg-surface-2 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-accent to-cyan h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${phase.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Tasks Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {phase.tasks.map((task, taskIndex) => (
                  <div 
                    key={task.id}
                    className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg border border-border/50 hover:border-border transition-colors"
                  >
                    {getStatusIcon(task.status)}
                    <div className="flex-1">
                      <div className={`font-medium ${
                        task.status === "done" ? "text-gray-300 line-through" : "text-white"
                      }`}>
                        {task.name}
                      </div>
                      {task.description && (
                        <div className="text-sm text-gray-400 mt-1">
                          {task.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Phase Connection Arrow */}
              {phaseIndex < roadmapData.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-surface/30 rounded-xl p-12">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Want to be part of the journey?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of forward-thinking brands and creators. 
            Get early access to new features and help shape the platform.
          </p>
          <button className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors">
            Join the Waitlist
          </button>
        </div>
      </div>
    </main>
  );
}