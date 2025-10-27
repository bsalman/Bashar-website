const {
  UserInfo,
  Skill,
  Education,
  Experience,
  Project,
  P_education,
  P_experience,
  P_projects,
  P_skills
} = require("../modules/index");

async function getInfo(person_id) {
  const person = await UserInfo.findByPk(person_id);
  const countProgrammingSkills = await P_skills.count({
    where: { person_id: person_id }
  });

  const countProjects = await P_projects.count({
    where: { person_id: person_id }
  });

  return { person, countProgrammingSkills, countProjects };
}

/**
 * Fetches all skills for a given person by ID.
 *
 * @param {number} personId - The ID of the person.
 * @returns {Promise<Array>} - Array of skill objects.
 */
const getSkills = async (personId) => {
  try {
    const skills = await Skill.findAll({
      attributes: ["skill", "skill_level", "main_direction"],
      include: [
        {
          model: UserInfo,
          attributes: [],
          where: { id: personId },
          through: { attributes: [] }
        }
      ],
      order: [["id", "ASC"]]
    });
    return skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw new Error("Failed to retrieve skills.");
  }
};

/**
 * Fetches all projects for a given person by ID.
 *
 * @param {number} personId - The ID of the person.
 * @returns {Promise<Array>} - Array of project objects.
 */
const getProjects = async (person_id) => {
  try {
    const projects = await Project.findAll({
      attributes: ["project_name", "project_url", "web_img_url", "description"],
      include: [
        {
          model: UserInfo,
          attributes: [],
          where: { id: person_id },
          through: { attributes: [] }
        }
      ]
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to retrieve projects.");
  }
};

/***
 * @param {number} personId - The ID of the person.
 * @returns {Promise<Array>} -Array of Experiences
 */

const getExperience = async (person_id) => {
  try {
    const experiences = await Experience.findAll({
      attributes: [
        "start_date",
        "end_date",
        "company",
        "location",
        "country",
        "occupation",
        "job_title"
      ],
      include: [
        {
          model: UserInfo,
          attributes: [],
          where: { id: person_id },
          through: { attributes: [] }
        }
      ]
    });
    return experiences;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    throw new Error("Failed to retrieve experiences.");
  }
};
/***
 *  @param {number} personId - The ID of the person.
 * @returns {Promise<Array>}  - Array from Education
 */
const getEducation = async (person_id) => {
  try {
    const education = await Education.findAll({
      attributes: [
        "start_date",
        "end_date",
        "specialization",
        "location",
        "certificate"
      ],
      include: [
        {
          model: UserInfo,
          attributes: [],
          where: { id: person_id },
          through: { attributes: [] }
        }
      ]
    });
    return education;
  } catch (error) {
    console.error("Error fetching education:", error);
    throw new Error("Failed to retrieve education.");
  }
};
module.exports = {
  getInfo,
  getSkills,
  getProjects,
  getEducation,
  getExperience
};
