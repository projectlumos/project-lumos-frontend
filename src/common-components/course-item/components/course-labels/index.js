import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { domain_api, language_api, soft_skill_api } from '../../../../common-services/api-endpoints';
import styled from 'styled-components';

const StyledLabels = styled.div`
  text-align: right;

  .course-label {
    margin: 2px;
  }
`;

// DomainLanguageLabels component fetches domains/languages from id list passed down as props
// and renders Labels for Courses component
export default class CourseLabels extends Component {

  renderDomainLabels() {
    if(this.props.domains) {
      if(this.props.domains.length) {
        return this.props.domains.map(domain => {
          return (
            <Label
              className='course-label'
              as={Link}
              to={`/technical/domains/${domain.id}/`}
              >
              {domain.domain_name}
            </Label>
          )
        })
      }
    }
  }
  renderLanguageLabels() {
    if(this.props.languages) {
      if(this.props.languages.length) {

        return this.props.languages.map(language => {
          return (
            <Label
              className='course-label'
              as={Link}
              to={`/technical/languages/${language.id}/`}
              >
              {language.language_name}
            </Label>
          )
        })
      }
    }
  }

  renderSoftSkillLabels() {
    if(this.props.softskills) {
      if(this.props.softskills.length) {
        return this.props.softskills.map(softskill => {
          return (
            <Label
              className='course-label'
              as={Link}
              to={`/soft-skills/${softskill.id}/`}
              >
              {softskill.soft_skill_category}
            </Label>
          )
        })
      }
    }
  }

  render() {
    return (
      <StyledLabels>
        {this.renderDomainLabels()}
        {this.renderLanguageLabels()}
        {this.renderSoftSkillLabels()}
      </StyledLabels>
    )
  }
}
