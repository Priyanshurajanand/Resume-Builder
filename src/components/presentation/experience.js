import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ResumePreview from "./resumePreview";
import { fieldCd } from "../constants/typeCodes";
import { useHistory } from "react-router-dom";
import {
  setExperience,
  updateExperience,
} from "../../redux/actions/experienceActions";
import { connect } from "react-redux";

function Experience(props) {
  console.log("Experience");
  let history = useHistory();
  const [experience, setExperience] = useState(props.experienceSection); //{}

  const onchange = (event) => {
    var key = event.target.name;
    var val = event.target.value;
    setExperience({ ...experience, [key]: val });
  };
  const getFieldData = (key) => {
    if (experience && experience[key]) {
      return experience[key];
    }
    return "";
  };
  const onSubmit = async (e) => {
    if (props.experienceSection != null) {
      //update
      props.updateExperience(experience);
    } else {
      //set
      props.setExperience(experience);
    }
    history.push("/finalize");
  };

  return (
    <div className="container med experience">
      <div className="section funnel-section">
        <div className="form-card">
          <h2 className="form-heading center">Work experience  Section</h2>
          <div className="form-section">
            <div className="input-group">
              <label>Company Name</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.CompanyName}
                  onChange={onchange}
                  value={getFieldData(fieldCd.CompanyName)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Job Title</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.JobTitle}
                  onChange={onchange}
                  value={getFieldData(fieldCd.JobTitle)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Tech Use</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.TechUse}
                  onChange={onchange}
                  value={getFieldData(fieldCd.TechUse)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Duration of Job</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.JobDuration}
                  onChange={onchange}
                  value={getFieldData(fieldCd.JobDuration)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group full">
              <label>Short Description</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.ShortDescription}
                  onChange={onchange}
                  value={getFieldData(fieldCd.ShortDescription)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
           <div className="form-buttons">
              <button
                className="btn hvr-float-shadow"
                type="button"
                onClick={onSubmit}
              >
                Next
              </button>
              <NavLink to="/project" className="center">
                Back
              </NavLink>
            </div>
          </div>
        </div>
        <div className="preview-card">
          <ResumePreview
            contactSection={props.contactSection}
            educationSection={props.educationSection}
            skillSection={props.skillSection}
            projectSection={props.projectSection}
            experienceSection={experience}
            skinCd={props?.document?.skinCd}
          ></ResumePreview>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    document: state.document,
    contactSection: state.contact,
    educationSection : state.education,
    skillSection: state.skill,
    projectSection: state.project,
    experienceSection: state.experience,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setExperience: (experience) => dispatch(setExperience(experience)),
    updateExperience: (experience) => dispatch(updateExperience(experience)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
