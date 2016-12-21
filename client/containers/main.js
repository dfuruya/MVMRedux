import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = null;
// const mapStateToProps = state => ({
//   favorites: state.favorites,
//   ingredients: state.ingredients,
// });

const mapDispatchToProps = null;

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Main);
