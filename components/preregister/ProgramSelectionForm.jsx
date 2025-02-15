"use client"

import { useState } from "react"

export default function ProgramSelectionForm({ nextStep, prevStep, updateFormData, formData }) {
  const [programSelection, setProgramSelection] = useState(
    formData || {
      program: "",
      startDate: "",
      studyMode: "",
    },
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setProgramSelection({ ...programSelection, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateFormData(programSelection, "programSelection")
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="program" className="block text-sm font-medium text-gray-700">
          Programme d'études
        </label>
        <select
          name="program"
          id="program"
          value={programSelection.program}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Sélectionnez un programme</option>
          <option value="informatique">Informatique</option>
          <option value="gestion">Gestion</option>
          <option value="ingenierie">Ingénierie</option>
          <option value="sciences">Sciences</option>
        </select>
      </div>
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
          Date de début souhaitée
        </label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={programSelection.startDate}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="studyMode" className="block text-sm font-medium text-gray-700">
          Mode d'études
        </label>
        <select
          name="studyMode"
          id="studyMode"
          value={programSelection.studyMode}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Sélectionnez un mode d'études</option>
          <option value="fullTime">Temps plein</option>
          <option value="partTime">Temps partiel</option>
          <option value="distance">À distance</option>
        </select>
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
          Soumettre
        </button>
      </div>
    </form>
  )
}

