"use client"

import { useState } from "react"

export default function AcademicInfoForm({ nextStep, prevStep, updateFormData, formData }) {
  const [academicInfo, setAcademicInfo] = useState(
    formData || {
      highestDegree: "",
      institution: "",
      graduationYear: "",
      gpa: "",
    },
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setAcademicInfo({ ...academicInfo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateFormData(academicInfo, "academicInfo")
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="highestDegree" className="block text-sm font-medium text-gray-700">
          Diplôme le plus élevé
        </label>
        <input
          type="text"
          name="highestDegree"
          id="highestDegree"
          value={academicInfo.highestDegree}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
          Institution
        </label>
        <input
          type="text"
          name="institution"
          id="institution"
          value={academicInfo.institution}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">
          Année d'obtention
        </label>
        <input
          type="number"
          name="graduationYear"
          id="graduationYear"
          value={academicInfo.graduationYear}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="gpa" className="block text-sm font-medium text-gray-700">
          Moyenne générale (GPA)
        </label>
        <input
          type="number"
          step="0.01"
          name="gpa"
          id="gpa"
          value={academicInfo.gpa}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Précédent
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Suivant
        </button>
      </div>
    </form>
  )
}

