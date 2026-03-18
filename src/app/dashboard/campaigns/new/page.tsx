"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export default function NewCampaignPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { id: 1, title: "Service" },
    { id: 2, title: "Details" },
    { id: 3, title: "Budget" },
    { id: 4, title: "Review" },
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
            step.id <= currentStep
              ? "bg-brand-purple border-brand-purple text-white"
              : "border-gray-200 text-gray-400 bg-white"
          }`}>
            {step.id < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              <span className="text-sm font-medium">{step.id}</span>
            )}
          </div>
          <span className={`ml-2 text-sm font-medium ${
            step.id <= currentStep ? "text-slate-800" : "text-gray-400"
          }`}>
            {step.title}
          </span>
          {index < steps.length - 1 && (
            <div className={`w-8 h-0.5 ml-4 ${
              step.id < currentStep ? "bg-brand-purple" : "bg-border"
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const ServiceStep = () => (
    <div className="card">
      <div className="card-content">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">
          Select Service Type
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 border-2 border-brand-purple bg-brand-purple-light rounded-lg cursor-pointer">
            <h4 className="font-semibold text-slate-800 mb-2">Social Media Campaign</h4>
            <p className="text-gray-600 text-sm mb-4">
              Instagram posts, stories, and reels with your selected influencer.
            </p>
            <div className="text-sm text-brand-purple font-medium">
              Starting at $500
            </div>
          </div>
          
          <div className="p-6 border-2 border-gray-200 hover:border-brand-purple bg-white rounded-lg cursor-pointer transition-colors">
            <h4 className="font-semibold text-slate-800 mb-2">Video Content</h4>
            <p className="text-gray-600 text-sm mb-4">
              Custom video content including reels, YouTube videos, and TikToks.
            </p>
            <div className="text-sm text-gray-400">
              Starting at $1,000
            </div>
          </div>
          
          <div className="p-6 border-2 border-gray-200 hover:border-brand-purple bg-white rounded-lg cursor-pointer transition-colors">
            <h4 className="font-semibold text-slate-800 mb-2">Transportation Ads</h4>
            <p className="text-gray-600 text-sm mb-4">
              Mobile advertising on vehicles and transportation services.
            </p>
            <div className="text-sm text-gray-400">
              Starting at $300
            </div>
          </div>
          
          <div className="p-6 border-2 border-gray-200 hover:border-brand-purple bg-white rounded-lg cursor-pointer transition-colors">
            <h4 className="font-semibold text-slate-800 mb-2">Celebrity Videos</h4>
            <p className="text-gray-600 text-sm mb-4">
              Personalized video messages from verified celebrities and influencers.
            </p>
            <div className="text-sm text-gray-400">
              Starting at $2,000
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DetailsStep = () => (
    <div className="card">
      <div className="card-content">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">
          Campaign Details
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Campaign Name
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter campaign name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Campaign Description
            </label>
            <textarea
              className="form-input min-h-[100px] resize-none"
              placeholder="Describe your campaign goals and requirements"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                Start Date
              </label>
              <input
                type="date"
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                End Date
              </label>
              <input
                type="date"
                className="form-input"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Target Audience
            </label>
            <select className="form-input">
              <option>18-24 years old</option>
              <option>25-34 years old</option>
              <option>35-44 years old</option>
              <option>45+ years old</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Industry/Niche
            </label>
            <select className="form-input">
              <option>Fashion & Beauty</option>
              <option>Technology</option>
              <option>Travel & Lifestyle</option>
              <option>Food & Beverage</option>
              <option>Fitness & Health</option>
              <option>Entertainment</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const BudgetStep = () => (
    <div className="card">
      <div className="card-content">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">
          Budget & Payment
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Total Budget
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                className="form-input pl-8"
                placeholder="5,000"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Payment Schedule
            </label>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-3" defaultChecked />
                <span className="text-slate-800">50% upfront, 50% on completion</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-3" />
                <span className="text-slate-800">100% upfront</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-3" />
                <span className="text-slate-800">Custom payment schedule</span>
              </label>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-slate-800 mb-3">Budget Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Service Fee</span>
                <span className="text-slate-800">$4,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Platform Fee (10%)</span>
                <span className="text-slate-800">$450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Fee</span>
                <span className="text-slate-800">$50</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span className="text-slate-800">Total</span>
                  <span className="text-slate-800">$5,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ReviewStep = () => (
    <div className="card">
      <div className="card-content">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">
          Review & Submit
        </h3>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-slate-800 mb-3">Campaign Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Service Type</span>
                <span className="text-slate-800">Social Media Campaign</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Campaign Name</span>
                <span className="text-slate-800">Summer Fashion Collection</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="text-slate-800">March 1 - April 15, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Target Audience</span>
                <span className="text-slate-800">25-34 years old</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Budget</span>
                <span className="text-slate-800">$5,000</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="text-amber-600">⚠️</div>
            <div className="text-sm text-amber-800">
              By submitting this campaign, you agree to our terms of service and payment policy. 
              You will be charged 50% upfront and the remainder upon campaign completion.
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 text-brand-purple" />
            <label className="text-sm text-gray-600">
              I agree to the campaign terms and conditions
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ServiceStep />;
      case 2:
        return <DetailsStep />;
      case 3:
        return <BudgetStep />;
      case 4:
        return <ReviewStep />;
      default:
        return <ServiceStep />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <Link href="/dashboard/campaigns" className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple-dark mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Campaigns
        </Link>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          Create New Campaign
        </h1>
        <p className="text-gray-600">
          Set up your influencer marketing campaign in just a few steps
        </p>
      </div>

      {/* Step Indicator */}
      <StepIndicator />

      {/* Step Content */}
      {renderStep()}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="btn-secondary px-6 py-3 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {currentStep < totalSteps ? (
          <button
            onClick={nextStep}
            className="btn-primary px-6 py-3 flex items-center gap-2"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button className="btn-primary px-6 py-3">
            Submit Campaign
          </button>
        )}
      </div>
    </div>
  );
}