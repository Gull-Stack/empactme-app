"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check,
  Video,
  Image,
  Megaphone,
  Users,
  Calendar,
  DollarSign,
  Target
} from "lucide-react";

type Step = "service" | "details" | "budget" | "review";

export default function NewCampaignPage() {
  const [currentStep, setCurrentStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState<string>("");

  const steps = [
    { id: "service", name: "Select Service", icon: Target },
    { id: "details", name: "Campaign Details", icon: Megaphone },
    { id: "budget", name: "Budget & Timeline", icon: Calendar },
    { id: "review", name: "Review & Submit", icon: Check }
  ];

  const services = [
    {
      id: "social-posts",
      name: "Social Media Posts",
      description: "Instagram posts, stories, and reels",
      icon: <Image className="w-8 h-8" />,
      price: "Starting at $250"
    },
    {
      id: "video-content",
      name: "Video Content",
      description: "YouTube videos, TikToks, and branded content",
      icon: <Video className="w-8 h-8" />,
      price: "Starting at $500"
    },
    {
      id: "influencer-campaign",
      name: "Influencer Campaign",
      description: "Multi-platform campaigns with top creators",
      icon: <Users className="w-8 h-8" />,
      price: "Starting at $1,000"
    },
    {
      id: "brand-partnership",
      name: "Brand Partnership",
      description: "Long-term brand ambassador programs",
      icon: <Megaphone className="w-8 h-8" />,
      price: "Starting at $2,500"
    }
  ];

  const getStepIndex = (step: Step) => steps.findIndex(s => s.id === step);
  const isStepCompleted = (step: Step) => getStepIndex(step) < getStepIndex(currentStep);
  const isStepCurrent = (step: Step) => step === currentStep;

  const nextStep = () => {
    const currentIndex = getStepIndex(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id as Step);
    }
  };

  const prevStep = () => {
    const currentIndex = getStepIndex(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as Step);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link 
            href="/dashboard/campaigns"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-3xl font-serif font-bold">New Campaign</h1>
            <p className="text-gray-400">Create a new influencer campaign</p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-surface border border-border rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`
                flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
                ${isStepCompleted(step.id as Step) 
                  ? "bg-green border-green text-white" 
                  : isStepCurrent(step.id as Step)
                  ? "bg-accent border-accent text-white"
                  : "border-border text-gray-400"
                }
              `}>
                {isStepCompleted(step.id as Step) ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              
              <div className="ml-3">
                <p className={`text-sm font-medium ${
                  isStepCurrent(step.id as Step) ? "text-accent" : "text-gray-400"
                }`}>
                  {step.name}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-4 ${
                  isStepCompleted(steps[index + 1].id as Step) ? "bg-green" : "bg-border"
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-surface border border-border rounded-lg p-8">
        {currentStep === "service" && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Select Service Type</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`
                    p-6 rounded-lg border-2 text-left transition-colors
                    ${selectedService === service.id 
                      ? "border-accent bg-accent/5" 
                      : "border-border hover:border-accent/30"
                    }
                  `}
                >
                  <div className="text-accent mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <p className="text-accent font-semibold">{service.price}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === "details" && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Campaign Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Campaign Name
                </label>
                <input
                  type="text"
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                  placeholder="Enter campaign name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                  placeholder="Describe your campaign objectives and requirements"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Target Audience
                  </label>
                  <select className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                    <option>18-24 years old</option>
                    <option>25-34 years old</option>
                    <option>35-44 years old</option>
                    <option>45+ years old</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Industry
                  </label>
                  <select className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                    <option>Fashion & Beauty</option>
                    <option>Technology</option>
                    <option>Food & Beverage</option>
                    <option>Travel & Lifestyle</option>
                    <option>Health & Fitness</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === "budget" && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Budget & Timeline</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Campaign Budget
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      className="w-full bg-surface-2 border border-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                      placeholder="5000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Type
                  </label>
                  <select className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                    <option>Fixed Budget</option>
                    <option>Per Post</option>
                    <option>Per Impression</option>
                    <option>Performance Based</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === "review" && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Review & Submit</h2>
            <div className="space-y-6">
              <div className="bg-surface-2 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Campaign Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Service:</span>
                    <span>Social Media Posts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Budget:</span>
                    <span>$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span>30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target Audience:</span>
                    <span>25-34 years old</span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-2 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Terms & Conditions</h3>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-400">
                    I agree to the campaign terms and conditions, including payment schedules and content guidelines.
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === "service"}
          className="flex items-center space-x-2 px-6 py-3 bg-surface-2 border border-border rounded-lg text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        {currentStep === "review" ? (
          <button className="flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors">
            <span>Submit Campaign</span>
            <Check className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={nextStep}
            disabled={currentStep === "service" && !selectedService}
            className="flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}