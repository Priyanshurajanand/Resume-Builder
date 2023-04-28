import React from "react";
import { fieldCd } from "../constants/typeCodes";
function ResumePreview(props) {
  // console.log('Resume Preview');
  const rvContact = (key, valToAppend) => {
    if (props.contactSection) {
      return props.contactSection[key]
        ? props.contactSection[key] + (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };

  const rvEducation = (key, valToAppend) => {
    if (props.educationSection) {
      return props.educationSection[key]
        ? props.educationSection[key] + (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };

  const rvSkill = (key, valToAppend) => {
    if (props.skillSection) {
      return props.skillSection[key]
        ? props.skillSection[key] + (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };

  const rvProject = (key, valToAppend) => {
    if (props.projectSection) {
      return props.projectSection[key]
        ? props.projectSection[key] + (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };

  const rvExperience = (key, valToAppend) => {
    if (props.experienceSection) {
      return props.experienceSection[key]
        ? props.experienceSection[key] + (valToAppend ? valToAppend : "")
        : "";
    }
    return "";
  };

  return (
    <div className={props.skinCd + " resume-preview "}>
      <div className={"name-section"}>
        <p className={"center contact-name text-upper"}>
          {" "}
          {rvContact(fieldCd.FirstName, " ") + rvContact(fieldCd.LastName)}{" "}
        </p>
        <p className={"center address"}>
          {rvContact(fieldCd.City, ", ") +
            rvContact(fieldCd.State, ", ") +
            rvContact(fieldCd.Country, ", ") +
            rvContact(fieldCd.ZipCode, ", ")}
        </p>
        <p className={"center"}>{rvContact(fieldCd.Email)}</p>
        <p className={"center"}>{rvContact(fieldCd.Phone)} </p>
      </div>

      <div className={"profSummSection text"}>
        <p className="heading bold underline">PROFESSIONAL SUMMARY</p>
        
        <p>{rvContact(fieldCd.ProfSummary)}</p>
      </div>

      <div className={"educationSection text-upper"}>
        <p className="heading bold underline">EDUCATIONAL DETAILS</p>
        <p><b>{rvEducation(fieldCd.SchoolName ,  " ,")}</b><span>{rvEducation(fieldCd.City)}</span></p>
        <p>{rvEducation(fieldCd.Degree , " -(") } {rvEducation(fieldCd.GraduationDate)} {rvEducation(fieldCd.GraduationYear , ")")}</p>
        <p>CPI - {rvEducation(fieldCd.GraduationCGPA)}</p>
      </div>

      <div className={"skillSection  text-upper"}>
        <p className="heading bold underline">SKILLS </p>
        
        <p  >
        <span>{rvSkill(fieldCd.Skill1 , " ,")} </span>
        <span>{rvSkill(fieldCd.Skill2 , " ,")}  </span>
        <span>{rvSkill(fieldCd.Skill3 , " ,")}  </span>
        <span>{rvSkill(fieldCd.Skill4 , " ,")}  </span>
        <span>{rvSkill(fieldCd.Skill5 , " ,")}  </span>
        <span>{rvSkill(fieldCd.Skill6 )}  </span>
        </p>
      </div>

      <div className={"projectSection text"}>
        <p className="heading bold underline">PROJECT </p>
        <p className="text-upper"><b>{rvProject(fieldCd.ProjectName , "  -")}</b> {rvProject(fieldCd.CompletionDate)}</p>
        <ul><p>Tech Used - {rvProject(fieldCd.TechnologyUsed)}</p>
        <p>Project link - {rvProject(fieldCd.ProjectLink)}</p>
        <p><li>{rvProject(fieldCd.Description)}</li></p></ul>
      </div>

      <div className={"experienceSection text"}>
        <p className="heading bold underline">Work Experience </p>
        <p className="text-upper">{rvExperience(fieldCd.CompanyName , " (") + rvExperience(fieldCd.JobDuration , " )")}</p>
        <ul>
        <p><li>Job Role - {rvExperience(fieldCd.JobTitle)}</li></p>
        <p><li>Tech Used - {rvExperience(fieldCd.TechUse)}</li></p>
        <p><li>{rvExperience(fieldCd.ShortDescription)}</li></p>
        </ul>
      </div>
    </div>
  );
}
export default ResumePreview;
