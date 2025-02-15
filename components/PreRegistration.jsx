"use client"

import { useState } from "react"
import PersonalInfoForm from "@/components/preregister/PersonalInfoForm"
import AcademicInfoForm from "@/components/preregister/AcademicInfoForm"
import ProgramSelectionForm from "@/components/preregister/ProgramSelectionForm"
import SubmissionConfirmation from "@/components/preregister/SubmissionConfirmation"

export default function PreRegistration() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    personalInfo: {},
    academicInfo: {},
    programSelection: {},
  })

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const updateFormData = (stepData, step) => {
    setFormData({
      ...formData,
      [step]: stepData,
    })
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfoForm nextStep={nextStep} updateFormData={updateFormData} formData={formData.personalInfo} />
      case 2:
        return (
          <AcademicInfoForm
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
            formData={formData.academicInfo}
          />
        )
      case 3:
        return (
          <ProgramSelectionForm
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
            formData={formData.programSelection}
          />
        )
      case 4:
        return <SubmissionConfirmation formData={formData} />
      default:
        return <PersonalInfoForm nextStep={nextStep} updateFormData={updateFormData} formData={formData.personalInfo} />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Formulaire de Préinscription</h1>
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={`w-1/4 text-center ${step >= item ? "text-blue-600" : "text-gray-400"}`}>
                <div
                  className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${step >= item ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                  {item}
                </div>
                <div className="mt-2">
                  {item === 1 && "Informations personnelles"}
                  {item === 2 && "Parcours académique"}
                  {item === 3 && "Choix du programme"}
                  {item === 4 && "Confirmation"}
                </div>
              </div>
            ))}
          </div>
        </div>
        {renderStep()}
      </div>
    </div>
  )
}

