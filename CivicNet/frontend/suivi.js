document.addEventListener("DOMContentLoaded", () => {
    const trackingList = document.getElementById("trackingList");
  
    // Exemple de données
    const projects = [
      {
        title: "Aménagement d'un parc",
        description: "Créer un espace vert pour les familles et les sportifs.",
        status: "En cours de réalisation",
        timeline: ["Proposition soumise", "Vote terminé", "Travaux commencés"],
        budget: "50,000 €"
      },
      {
        title: "Nouvelle piste cyclable",
        description: "Étendre les pistes cyclables dans le centre-ville.",
        status: "Validé",
        timeline: ["Proposition soumise", "Vote terminé", "En attente de financement"],
        budget: "25,000 €"
      }
    ];
  
    // Fonction pour afficher les projets
    function renderProjects() {
      trackingList.innerHTML = projects.map(project => `
        <div class="proposal">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p><strong>Statut :</strong> ${project.status}</p>
          <p><strong>Budget :</strong> ${project.budget}</p>
          <h4>Chronologie :</h4>
          <ul>
            ${project.timeline.map(step => `<li>${step}</li>`).join("")}
          </ul>
        </div>
      `).join("");
    }
  
    renderProjects();
  });