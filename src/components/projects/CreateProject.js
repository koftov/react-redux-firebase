import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

const CreateProject = ({ auth, createProject, history }) => {
  const [project, setProject] = useState({ title: '', content: '' });
  if (!auth.uid) return <Redirect to="/signin" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject(project);
    history.push('/');
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.id]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-x">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
