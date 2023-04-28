import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ResumePreview from "./resumePreview";
import { fieldCd } from "../constants/typeCodes";
import { useHistory } from "react-router-dom";
import {
  setProject,
  updateProject,
} from "../../redux/actions/projectActions";
import { connect } from "react-redux";

function Project(props) {
  console.log("Project");
  let history = useHistory();
  const [project, setProject] = useState(props.projectSection); //{}

  const onchange = (event) => {
    var key = event.target.name;
    var val = event.target.value;
    setProject({ ...project, [key]: val });
  };
  const getFieldData = (key) => {
    if (project && project[key]) {
      return project[key];
    }
    return "";
  };
  const onSubmit = async (e) => {
    if (props.projectSection != null) {
      //update
      props.updateProject(project);
    } else {
      //set
      props.setProject(project);
    }
    history.push("/experience");
  };

  return (
    <div className="container med project">
      <div className="section funnel-section">
        <div className="form-card">
          <h2 className="form-heading center">Project  Section</h2>
          <div className="form-section">
            <div className="input-group">
              <label>Project Name</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.ProjectName}
                  onChange={onchange}
                  value={getFieldData(fieldCd.ProjectName)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Completion Date</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.CompletionDate}
                  onChange={onchange}
                  value={getFieldData(fieldCd.CompletionDate)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Technology Used</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.TechnologyUsed}
                  onChange={onchange}
                  value={getFieldData(fieldCd.TechnologyUsed)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Project Link</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.ProjectLink}
                  onChange={onchange}
                  value={getFieldData(fieldCd.ProjectLink)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group full">
              <label>Description</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Description}
                  onChange={onchange}
                  value={getFieldData(fieldCd.Description)}
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
              <NavLink to="/skill" className="center">
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
            projectSection={project}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProject: (project) => dispatch(setProject(project)),
    updateProject: (project) => dispatch(updateProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
