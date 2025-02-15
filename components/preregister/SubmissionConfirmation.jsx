export default function SubmissionConfirmation({ formData }) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Confirmation de votre préinscription</h2>
        <p className="text-center text-gray-600 mb-8">
          Merci d'avoir soumis votre préinscription à l'Institut d'Excellence. Nous avons bien reçu vos informations et
          nous les examinerons dans les plus brefs délais.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Récapitulatif de votre demande :</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Informations personnelles :</h4>
              <p>
                Nom : {formData.personalInfo.firstName} {formData.personalInfo.lastName}
              </p>
              <p>Email : {formData.personalInfo.email}</p>
              <p>Téléphone : {formData.personalInfo.phone}</p>
            </div>
            <div>
              <h4 className="font-medium">Parcours académique :</h4>
              <p>Diplôme : {formData.academicInfo.highestDegree}</p>
              <p>Institution : {formData.academicInfo.institution}</p>
            </div>
            <div>
              <h4 className="font-medium">Programme choisi :</h4>
              <p>Programme : {formData.programSelection.program}</p>
              <p>Date de début : {formData.programSelection.startDate}</p>
              <p>Mode d'études : {formData.programSelection.studyMode}</p>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">
          Un membre de notre équipe d'admission vous contactera prochainement pour discuter des prochaines étapes de votre
          candidature.
        </p>
      </div>
    )
  }
  
  