import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ResumePreview from "./resumePreview";
import {  fieldCd } from "../constants/typeCodes";
import { useHistory } from "react-router-dom";
import { setSkill, updateSkill } from "../../redux/actions/skillActions";
import { connect } from "react-redux";

function Skill(props) {
  console.log("Skill");
  let history = useHistory();
  const [skill, setSkill] = useState(props.SkillSection); //{}

  const onchange = (event) => {
    var key = event.target.name;
    var val = event.target.value;
    setSkill({ ...skill, [key]: val });
  };
  const getFieldData = (key) => {
    if (skill && skill[key]) {
      return skill[key];
    }
    return "";
  };
  const onSubmit = async (e) => {
    if (props.SkillSection != null) {
      //update
      props.updateSkill(skill);
    } else {
      //set
      props.setSkill(skill);
    }
    history.push("/project");
  };

  return (
    <div className="container med skill">
      <div className="section funnel-section">
        <div className="form-card">
          <h2 className="form-heading center">Skills Section</h2>
          <div className="form-section">
            <div className="input-group">
              <label>Skill 1</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Skill1}
                  onChange={onchange}
                  value={getFieldData(fieldCd.Skill1)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Skill 2</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Skill2}
                  onChange={onchange}
                  value={getFieldData(fieldCd.Skill2)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Skill 3</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Skill3}
                  onChange={onchange}
                  value={getFieldData(fieldCd.Skill3)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Skill 4</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Skill4}
                  onChange={onchange}
                  value={getFieldData(fieldCd.Skill4)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Skill 5</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Skill5}
                  onChange={onchange}
                  value={getFieldData(fieldCd.Skill5)}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label> Skill 6</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Skill6}
                  onChange={onchange}
                  value={getFieldData(fieldCd.Skill6)}
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
              <NavLink to="/education" className="center">
                Back
              </NavLink>
            </div>
          </div>
        </div>
        <div className="preview-card">
          <ResumePreview
            contactSection={props.contactSection}
            educationSection={props.educationSection}
            skillSection={skill}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSkill: (skill) => dispatch(setSkill(skill)),
    updateSkill: (skill) => dispatch(updateSkill(skill)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skill);
